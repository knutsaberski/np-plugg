import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Alla ämnen organiserade per kategori
const SUBJECTS = {
  ak9: {
    label: 'Åk 9 – Grundskolan',
    ämnen: {
      matte:    'matematik för svenska niondeklassare på NP-nivå. Täck algebra, geometri, statistik, sannolikhetslära och taluppfattning',
      svenska:  'svenska för niondeklassare på NP-nivå. Täck grammatik, litteraturhistoria, textanalys och språklig variation',
      engelska: 'engelska för svenska niondeklassare på NP-nivå. Inkludera grammar, vocabulary, reading comprehension och idioms',
      no:       'naturorienterande ämnen (NO) för svenska niondeklassare på NP-nivå. Blanda frågor från fysik, kemi och biologi',
      so:       'samhällsorienterande ämnen (SO) för svenska niondeklassare på NP-nivå. Blanda historia, geografi, samhällskunskap och religion',
    },
  },
  gym1: {
    label: 'År 1 – Gymnasiet',
    ämnen: {
      svenska1:  'svenska 1 för gymnasiet på NP-nivå. Täck grundläggande textanalys, retorik, grammatik och litteraturhistoria',
      engelska5: 'engelska 5 för gymnasiet på NP-nivå (A-kurs). Inkludera grammar, vocabulary och reading comprehension',
      matematik1:'matematik 1 för gymnasiet på NP-nivå (A-kurs). Täck algebra, linjära funktioner, statistik och procenträkning',
    },
  },
  gym2: {
    label: 'År 2 – Gymnasiet',
    ämnen: {
      svenska2:     'svenska 2 för gymnasiet på NP-nivå. Täck djupare textanalys, muntlig kommunikation och skriftlig argumentation',
      engelska6:    'engelska 6 för gymnasiet på NP-nivå (B-kurs). Inkludera avancerad grammar, litteratur och idioms',
      matematik2:   'matematik 2 för gymnasiet på NP-nivå (B-kurs). Täck trigonometri, kombinatorik och andragradsfunktioner',
      historia1:    'historia 1 för gymnasiet på NP-nivå. Täck historiska epoker, industrialisering, demokratiutveckling och källkritik',
      naturkunskap1:'naturkunskap 1 för gymnasiet på NP-nivå. Täck naturvetenskap, miljö, hållbar utveckling och hälsa',
    },
  },
  gym3: {
    label: 'År 3 – Gymnasiet',
    ämnen: {
      svenska3:   'svenska 3 för gymnasiet på NP-nivå. Täck avancerad textanalys, litteraturvetenskap och akademiskt skrivande',
      engelska7:  'engelska 7 för gymnasiet på NP-nivå (C-kurs). Inkludera avancerad litteraturanalys och akademisk engelska',
      matematik34: 'matematik 3 och 4 för gymnasiet på NP-nivå. Täck derivata, integraler, komplexa tal och vektorer',
    },
  },
};

const FRÅGOR_PER_ÄMNE = 20;

async function genereraFrågor(ämnesNyckel, ämnesBeskrivning, kategori) {
  const prompt = `Skapa exakt ${FRÅGOR_PER_ÄMNE} flervalsfrågor om ${ämnesBeskrivning}.

Krav:
- Frågorna ska motsvara verkliga nationella provfrågor (NP) i Sverige
- Täck bredd av delområden inom ämnet – blanda lätta, medel och svåra frågor
- Varje fråga har exakt 4 svarsalternativ (A, B, C, D)
- Exakt ett korrekt svar per fråga
- Rätt svar ska vara jämnt fördelat – inte alltid A
- Förklaringen ska tydligt motivera VARFÖR svaret är rätt och varför de andra är fel

Svara med EXAKT denna JSON-struktur och inget annat:
{
  "questions": [
    {
      "id": 1,
      "question": "Frågetext?",
      "options": {
        "A": "Alternativ A",
        "B": "Alternativ B",
        "C": "Alternativ C",
        "D": "Alternativ D"
      },
      "correct": "B",
      "explanation": "B är rätt eftersom..."
    }
  ]
}`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8000,
    system: 'Du är en erfaren svensk lärare som skapar examinationsfrågor. Du svarar ALLTID med ren JSON och inget annat — inga kommentarer, inga förklaringar utanför JSON.',
    messages: [{ role: 'user', content: prompt }],
  });

  const raw = response.content[0].text;
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Kunde inte parsa JSON från svaret');

  const parsed = JSON.parse(match[0]);
  return parsed.questions;
}

async function main() {
  console.log('🎓 Provklar – Genererar NP-frågor med Claude AI\n');

  const startTid = Date.now();
  let totaltFrågor = 0;
  let totaltFiler = 0;

  for (const [kategoriNyckel, kategori] of Object.entries(SUBJECTS)) {
    const mapp = path.join(__dirname, 'data', 'prov', kategoriNyckel);
    fs.mkdirSync(mapp, { recursive: true });

    console.log(`\n── ${kategori.label} ──`);

    for (const [ämnesNyckel, ämnesBeskrivning] of Object.entries(kategori.ämnen)) {
      const filväg = path.join(mapp, `${ämnesNyckel}.json`);

      // Hoppa över om filen redan finns
      if (fs.existsSync(filväg)) {
        const befintlig = JSON.parse(fs.readFileSync(filväg, 'utf-8'));
        console.log(`  ✓ ${ämnesNyckel} – redan genererad (${befintlig.questions.length} frågor)`);
        totaltFrågor += befintlig.questions.length;
        totaltFiler++;
        continue;
      }

      process.stdout.write(`  ⏳ ${ämnesNyckel}...`);

      try {
        const frågor = await genereraFrågor(ämnesNyckel, ämnesBeskrivning, kategoriNyckel);

        const utdata = {
          subject: ämnesNyckel,
          category: kategoriNyckel,
          generated: new Date().toISOString().split('T')[0],
          questions: frågor,
        };

        fs.writeFileSync(filväg, JSON.stringify(utdata, null, 2), 'utf-8');
        totaltFrågor += frågor.length;
        totaltFiler++;
        console.log(` ✓ ${frågor.length} frågor sparade`);

        // Liten paus för att inte överbelasta API:et
        await new Promise(r => setTimeout(r, 1000));
      } catch (err) {
        console.log(` ✗ Fel: ${err.message}`);
      }
    }
  }

  const sekunder = Math.round((Date.now() - startTid) / 1000);
  console.log(`\n✅ Klart! ${totaltFrågor} frågor i ${totaltFiler} filer på ${sekunder}s`);
  console.log(`📁 Sparade i: data/prov/`);
}

main();
