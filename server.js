import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ANTHROPIC_URL     = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

app.use(express.json({ limit: '32kb' }));
app.use(express.static(__dirname));

// Hämta 10 slumpmässiga frågor från pre-genererade JSON-filer
app.get('/api/questions/:category/:subject', (req, res) => {
  const { category, subject } = req.params;
  const filväg = path.join(__dirname, 'data', 'prov', category, `${subject}.json`);

  if (!fs.existsSync(filväg)) {
    return res.status(404).json({ error: 'Inga sparade frågor för detta ämne' });
  }

  const data = JSON.parse(fs.readFileSync(filväg, 'utf-8'));
  const shuffled = data.questions.sort(() => Math.random() - 0.5);
  res.json({ questions: shuffled.slice(0, 10) });
});

app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY saknas i .env-filen' });
  }

  // Tillåt bara de fält som appen faktiskt använder – skicka aldrig vidare okänt innehåll
  const { model, max_tokens, system, messages } = req.body;
  if (!model || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Ogiltigt anrop till /api/chat' });
  }

  try {
    const upstream = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': ANTHROPIC_VERSION,
      },
      body: JSON.stringify({ model, max_tokens, system, messages }),
    });

    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (err) {
    res.status(502).json({ error: 'Kunde inte nå Anthropic API: ' + err.message });
  }
});

// Rätta ett skriftligt svar med Claude
app.post('/api/grade', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'ANTHROPIC_API_KEY saknas' });

  const { question, studentAnswer, subject, level, sampleAnswer, gradingCriteria } = req.body;
  if (!question || !studentAnswer) {
    return res.status(400).json({ error: 'Fråga och svar krävs' });
  }

  const systemPrompt = `Du är en erfaren NP-lärare som bedömer skriftliga elevsvar. Du ger konstruktiv, uppmuntrande feedback på svenska direkt till eleven. Du svarar ALLTID med ren JSON och inget annat.`;

  const userPrompt = `Bedöm detta elevsvar på en NP-fråga.

Ämne: ${subject}
Frågenivå: ${level}-nivå (maxbetyg på denna fråga är ${level})
Fråga: ${question}
Exempelsvar: ${sampleAnswer || 'Inget exempelsvar tillgängligt'}
Bedömningskriterier: ${gradingCriteria || 'Bedöm efter NP-standard för ämnet'}

Elevens svar: "${studentAnswer}"

OBS: Om maxbetyget är E kan grade ALDRIG bli C eller A. Om maxbetyget är C kan grade ALDRIG bli A.

Svara med EXAKT denna JSON:
{
  "grade": "A" | "C" | "E" | "F",
  "summary": "En mening som sammanfattar bedömningen av svaret",
  "strengths": "Vad som var bra med svaret (1-2 meningar, riktat till eleven med 'du')",
  "improvements": "Vad som saknas eller kan förbättras (1-2 meningar, konstruktivt)"
}`;

  try {
    const upstream = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': ANTHROPIC_VERSION,
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    const data = await upstream.json();
    const raw = data.content?.[0]?.text || '';
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) return res.status(500).json({ error: 'Kunde inte tolka bedömningen' });
    res.json(JSON.parse(match[0]));
  } catch (err) {
    res.status(502).json({ error: 'Kunde inte nå Anthropic API: ' + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`NP-Plugg körs på http://localhost:${PORT}`);
});
