import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ANTHROPIC_URL     = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

app.use(express.json({ limit: '32kb' }));
app.use(express.static(__dirname));

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

app.listen(PORT, () => {
  console.log(`NP-Plugg körs på http://localhost:${PORT}`);
});
