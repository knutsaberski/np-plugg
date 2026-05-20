// ── Konfiguration ──────────────────────────────────────────────
const CONFIG = {
  model: 'claude-sonnet-4-5',
  maxTokens: 3000,
};

// ── Kategorier (årskurser) ──────────────────────────────────────
const CATEGORIES = {
  ak9: {
    name: 'Åk 9',
    subtitle: 'Grundskolan',
    emoji: '🏫',
    gradient: 'linear-gradient(145deg, #1a3a6b, #2563b0)',
    theme: 'blue',
    subjects: ['matte', 'svenska', 'engelska', 'no', 'so'],
  },
  gym1: {
    name: 'År 1',
    subtitle: 'Gymnasiet',
    emoji: '📗',
    gradient: 'linear-gradient(145deg, #14472f, #1e7a50)',
    theme: 'green',
    subjects: ['svenska1', 'engelska5', 'matematik1'],
  },
  gym2: {
    name: 'År 2',
    subtitle: 'Gymnasiet',
    emoji: '📘',
    gradient: 'linear-gradient(145deg, #3b1f6e, #6033b4)',
    theme: 'purple',
    subjects: ['svenska2', 'engelska6', 'matematik2', 'historia1', 'naturkunskap1'],
  },
  gym3: {
    name: 'År 3',
    subtitle: 'Gymnasiet',
    emoji: '🎓',
    gradient: 'linear-gradient(145deg, #6b2020, #b03a2e)',
    theme: 'red',
    subjects: ['svenska3', 'engelska7', 'matematik34'],
  },
};

// ── Ämnen ───────────────────────────────────────────────────────
const SUBJECTS = {
  // ── Åk 9 ──────────────────────────────────────────────────────
  matte: {
    name: 'Matematik',
    emoji: '🔢',
    desc: 'Algebra, geometri & statistik',
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    topic: 'matematik för svenska niondeklassare på NP-nivå. Täck in algebra, geometri, statistik, sannolikhetslära och taluppfattning',
  },
  no: {
    name: 'NO',
    emoji: '🔬',
    desc: 'Fysik, kemi & biologi',
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    topic: 'naturorienterande ämnen (NO) för svenska niondeklassare på NP-nivå. Blanda frågor från fysik, kemi och biologi',
  },
  so: {
    name: 'SO',
    emoji: '🌍',
    desc: 'Historia, geo & samhälle',
    gradient: 'linear-gradient(135deg,#f59e0b,#d97706)',
    topic: 'samhällsorienterande ämnen (SO) för svenska niondeklassare på NP-nivå. Blanda historia, geografi, samhällskunskap och religion',
  },
  svenska: {
    name: 'Svenska',
    emoji: '📝',
    desc: 'Grammatik, litteratur & analys',
    gradient: 'linear-gradient(135deg,#ef4444,#dc2626)',
    topic: 'svenska för niondeklassare på NP-nivå. Täck grammatik, litteraturhistoria, textanalys och språklig variation',
  },
  engelska: {
    name: 'Engelska',
    emoji: '🌐',
    desc: 'Grammar, vocab & reading',
    gradient: 'linear-gradient(135deg,#3b82f6,#2563eb)',
    topic: 'engelska för svenska niondeklassare på NP-nivå. Inkludera grammar, vocabulary, reading comprehension och idioms',
  },

  // ── Gymnasiet År 1 ─────────────────────────────────────────────
  svenska1: {
    name: 'Svenska 1',
    emoji: '📝',
    desc: 'Retorik, analys & skrivande',
    gradient: 'linear-gradient(135deg,#ef4444,#dc2626)',
    topic: 'svenska 1 för gymnasiet på NP-nivå. Täck grundläggande textanalys, retorik, grammatik, skrivande och litteraturhistoria',
  },
  engelska5: {
    name: 'Engelska 5',
    emoji: '🌐',
    desc: 'Grammar, communication & text',
    gradient: 'linear-gradient(135deg,#3b82f6,#2563eb)',
    topic: 'engelska 5 för gymnasiet på NP-nivå (A-kurs). Inkludera grammar, vocabulary, reading comprehension och grundläggande kommunikation',
  },
  matematik1: {
    name: 'Matematik 1',
    emoji: '🔢',
    desc: 'Algebra, funktioner & statistik',
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    topic: 'matematik 1 för gymnasiet på NP-nivå (A-kurs). Täck grundläggande algebra, linjära funktioner, statistik och procenträkning',
  },

  // ── Gymnasiet År 2 ─────────────────────────────────────────────
  svenska2: {
    name: 'Svenska 2',
    emoji: '📖',
    desc: 'Litteratur, argumentation & stil',
    gradient: 'linear-gradient(135deg,#ef4444,#dc2626)',
    topic: 'svenska 2 för gymnasiet på NP-nivå. Täck djupare textanalys, muntlig kommunikation, litteraturhistoria och skriftlig argumentation',
  },
  engelska6: {
    name: 'Engelska 6',
    emoji: '🗺️',
    desc: 'Advanced grammar & literature',
    gradient: 'linear-gradient(135deg,#3b82f6,#2563eb)',
    topic: 'engelska 6 för gymnasiet på NP-nivå (B-kurs). Inkludera mer avancerad grammar, litteratur, idioms och reading comprehension',
  },
  matematik2: {
    name: 'Matematik 2',
    emoji: '📐',
    desc: 'Trigonometri, kombinatorik & mer',
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    topic: 'matematik 2 för gymnasiet på NP-nivå (B-kurs). Täck trigonometri, kombinatorik, sannolikhetslära och andragradsfunktioner',
  },
  historia1: {
    name: 'Historia 1',
    emoji: '🏛️',
    desc: 'Historiska epoker & källkritik',
    gradient: 'linear-gradient(135deg,#a78bfa,#7c3aed)',
    topic: 'historia 1 för gymnasiet på NP-nivå. Täck historiska epoker, industrialisering, demokratiutveckling, källkritik och historiska samband från antiken till 1900-talet',
  },
  naturkunskap1: {
    name: 'Naturkunskap 1',
    emoji: '🌿',
    desc: 'Miljö, hållbarhet & vetenskap',
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    topic: 'naturkunskap 1 för gymnasiet på NP-nivå. Täck grundläggande naturvetenskap, miljö, hållbar utveckling, kropp och hälsa samt naturvetenskapliga metoder',
  },

  // ── Gymnasiet År 3 ─────────────────────────────────────────────
  svenska3: {
    name: 'Svenska 3',
    emoji: '📚',
    desc: 'Litteraturvetenskap & retorik',
    gradient: 'linear-gradient(135deg,#ef4444,#dc2626)',
    topic: 'svenska 3 för gymnasiet på NP-nivå. Täck avancerad textanalys, litteraturvetenskap, retorisk analys och akademiskt skrivande',
  },
  engelska7: {
    name: 'Engelska 7',
    emoji: '🎭',
    desc: 'Literature, analysis & nuance',
    gradient: 'linear-gradient(135deg,#3b82f6,#2563eb)',
    topic: 'engelska 7 för gymnasiet på NP-nivå (C-kurs). Inkludera avancerad litteraturanalys, akademisk engelska, komplexa grammatikstrukturer och nyanser i språkbruk',
  },
  matematik34: {
    name: 'Matematik 3/4',
    emoji: '🧮',
    desc: 'Derivata, integraler & vektorer',
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    topic: 'matematik 3 och 4 för gymnasiet på NP-nivå. Täck derivata, integraler, komplexa tal, vektorer och avancerade funktioner',
  },
};

// ── Historik (localStorage) ─────────────────────────────────────
const HISTORY_KEY = 'provklar_history';

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
  catch { return []; }
}

function saveQuizResult() {
  const total = state.questions.length;
  const correctCount = state.answers.filter(a => a.isCorrect).length;
  const entry = {
    id: Date.now(),
    date: new Date().toISOString(),
    subject: state.subject,
    subjectName: SUBJECTS[state.subject]?.name || state.subject,
    category: state.category,
    score: correctCount,
    total,
    pct: Math.round((correctCount / total) * 100),
  };
  const history = loadHistory();
  history.unshift(entry);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 200)));
}

function renderHistoryChart(canvas, sessions) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.parentElement.clientWidth || 480;
  const H = 180;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  const PAD = { top: 16, right: 16, bottom: 36, left: 44 };
  const data = [...sessions].reverse().slice(-20);

  ctx.clearRect(0, 0, W, H);

  if (data.length < 2) {
    ctx.fillStyle = 'rgba(106,127,154,0.7)';
    ctx.font = '13px Space Grotesk, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      data.length === 0 ? 'Inga resultat ännu' : 'Kör fler quiz för att se trenden',
      W / 2, H / 2 + 4
    );
    return;
  }

  const cW = W - PAD.left - PAD.right;
  const cH = H - PAD.top - PAD.bottom;

  [0, 25, 50, 75, 100].forEach(pct => {
    const y = PAD.top + cH - (pct / 100) * cH;
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + cW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(106,127,154,0.75)';
    ctx.font = '10px Space Grotesk, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(pct + '%', PAD.left - 6, y + 4);
  });

  const pts = data.map((s, i) => ({
    x: PAD.left + (i / (data.length - 1)) * cW,
    y: PAD.top + cH - (s.pct / 100) * cH,
    pct: s.pct,
    d: new Date(s.date),
  }));

  const grad = ctx.createLinearGradient(0, PAD.top, 0, PAD.top + cH);
  grad.addColorStop(0, 'rgba(201,168,76,0.22)');
  grad.addColorStop(1, 'rgba(201,168,76,0)');
  ctx.beginPath();
  ctx.moveTo(pts[0].x, PAD.top + cH);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, PAD.top + cH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = '#c9a84c';
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();

  pts.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#c9a84c';
    ctx.fill();
    ctx.strokeStyle = '#08111f';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  const maxLabels = Math.min(pts.length, 5);
  const step = Math.max(1, Math.floor((pts.length - 1) / (maxLabels - 1)));
  const indices = new Set([0, pts.length - 1]);
  for (let i = step; i < pts.length - 1; i += step) indices.add(i);
  ctx.fillStyle = 'rgba(106,127,154,0.8)';
  ctx.font = '10px Space Grotesk, sans-serif';
  ctx.textAlign = 'center';
  [...indices].sort((a, b) => a - b).forEach(i => {
    const p = pts[i];
    ctx.fillText(`${p.d.getDate()}/${p.d.getMonth() + 1}`, p.x, H - 6);
  });
}

function renderHistoryView(subjectFilter) {
  const all = loadHistory();
  const sessions = subjectFilter ? all.filter(h => h.subject === subjectFilter) : all;
  const n = sessions.length;
  const avgPct = n ? Math.round(sessions.reduce((s, h) => s + h.pct, 0) / n) : 0;
  const bestPct = n ? Math.max(...sessions.map(h => h.pct)) : 0;

  $('hist-stat-total').textContent = n;
  $('hist-stat-avg').textContent   = n ? avgPct + '%' : '–';
  $('hist-stat-best').textContent  = n ? bestPct + '%' : '–';

  renderHistoryChart($('hist-chart'), sessions);

  const listEl = $('hist-list');
  listEl.innerHTML = '';
  if (n === 0) {
    listEl.innerHTML = '<p class="hist-empty">Inga resultat ännu – kör ett quiz!</p>';
    return;
  }
  sessions.slice(0, 30).forEach(s => {
    const item = document.createElement('div');
    item.className = 'hist-item';
    const d = new Date(s.date);
    const dateStr = d.toLocaleDateString('sv-SE', { day: 'numeric', month: 'short' }) +
      ' ' + d.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });
    const cls = s.pct >= 70 ? 'good' : s.pct >= 50 ? 'mid' : 'low';
    item.innerHTML = `
      <div class="hist-item-info">
        <span class="hist-item-subject">${s.subjectName}</span>
        <span class="hist-item-date">${dateStr}</span>
      </div>
      <div class="hist-item-score hist-score-${cls}">
        <span class="hist-item-pts">${s.score}/${s.total}</span>
        <span class="hist-item-pct">${s.pct}%</span>
      </div>
    `;
    listEl.appendChild(item);
  });
}

function showHistory() {
  const history = loadHistory();
  const subjects = [...new Set(history.map(h => h.subject))];
  const filterEl = $('hist-filter');
  filterEl.innerHTML = '';

  const makeTab = (text, subject) => {
    const btn = document.createElement('button');
    btn.className = 'hist-tab' + (subject === '' ? ' active' : '');
    btn.textContent = text;
    btn.dataset.subject = subject;
    return btn;
  };
  filterEl.appendChild(makeTab('Alla', ''));
  subjects.forEach(k => filterEl.appendChild(makeTab(SUBJECTS[k]?.name || k, k)));

  filterEl.addEventListener('click', e => {
    const tab = e.target.closest('.hist-tab');
    if (!tab) return;
    filterEl.querySelectorAll('.hist-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderHistoryView(tab.dataset.subject);
  });

  showScreen('screen-history');
  requestAnimationFrame(() => renderHistoryView(''));
}

// ── App-state ───────────────────────────────────────────────────
const state = {
  category: null,
  subject: null,
  questions: [],
  current: 0,
  score: 0,
  mcCount: 0,
  answers: [],
};

// ── Hjälpfunktioner ─────────────────────────────────────────────
function $(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

let toastTimer;
function showToast(msg) {
  let toast = $('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3800);
}

// ── Rendera kategori-kort (startsidan) ──────────────────────────
function renderCategoryGrid() {
  const grid = $('category-grid');
  grid.innerHTML = '';
  Object.entries(CATEGORIES).forEach(([key, c]) => {
    const btn = document.createElement('button');
    btn.className = 'subject-card';
    btn.innerHTML = `
      <span class="subject-name">${c.name}</span>
      <span class="subject-desc">${c.subtitle}</span>
    `;
    btn.addEventListener('click', () => selectCategory(key));
    grid.appendChild(btn);
  });
}

// ── Välj kategori → visa ämneslistan ───────────────────────────
function setTheme(theme) {
  document.body.className = theme ? `theme-${theme}` : '';
}

function selectCategory(categoryKey) {
  state.category = categoryKey;
  const cat = CATEGORIES[categoryKey];
  setTheme(cat.theme);
  $('subjects-title').textContent = cat.name;
  renderSubjectGrid(cat.subjects);
  showScreen('screen-subjects');
}

// ── Rendera ämnes-kort ──────────────────────────────────────────
function renderSubjectGrid(subjectKeys) {
  const grid = $('subject-grid');
  grid.innerHTML = '';
  const gradient = CATEGORIES[state.category].gradient;
  subjectKeys.forEach(key => {
    const s = SUBJECTS[key];
    const btn = document.createElement('button');
    btn.className = 'subject-card';
    btn.style.background = gradient;
    btn.innerHTML = `
      <span class="subject-name">${s.name}</span>
      <span class="subject-desc">${s.desc}</span>
    `;
    btn.addEventListener('click', () => startQuiz(key));
    grid.appendChild(btn);
  });
}

// ── Starta quiz ──────────────────────────────────────────────────
async function startQuiz(subjectKey) {
  state.subject = subjectKey;
  state.questions = [];
  state.current = 0;
  state.score = 0;
  state.mcCount = 0;
  state.answers = [];

  const subj = SUBJECTS[subjectKey];
  $('loading-subject-label').textContent = `${subj.emoji} ${subj.name}`;
  showScreen('screen-loading');

  try {
    const questions = await fetchQuestions(subjectKey);
    state.questions = questions;
    state.mcCount = questions.filter(q => q.type === 'multiple_choice').length;
    showQuestion();
    showScreen('screen-quiz');
  } catch (err) {
    showScreen('screen-subjects');
    showToast('Fel: ' + (err.message || 'Kunde inte generera frågor'));
  }
}

// ── Generera skriftliga frågor via Claude ────────────────────────
async function generateWrittenQuestions(subjectKey) {
  const subj = SUBJECTS[subjectKey];

  const userPrompt = `Skapa 6 skriftliga NP-frågor om ${subj.topic}.

Krav:
- 3 korta frågor (type: "short_answer") – kräver 2-3 meningar
- 3 långa frågor (type: "long_answer") – kräver ett stycke eller mer
- 2 frågor med level "E" (grundläggande kunskaper)
- 2 frågor med level "C" (tillämpning och analys)
- 2 frågor med level "A" (fördjupad analys, inga begränsningar)
- Blanda typerna och nivåerna

Svara med EXAKT denna JSON och inget annat:
{
  "questions": [
    {
      "id": 1,
      "type": "short_answer",
      "level": "E",
      "question": "Frågetext?",
      "sampleAnswer": "Ett godkänt svar bör innehålla...",
      "gradingCriteria": "E: grundläggande svar om... C: mer nyanserat... A: djupare analys..."
    }
  ]
}`;

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 3000,
      system: 'Du är en erfaren NP-lärare. Du svarar ALLTID med ren JSON och inget annat.',
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });

  if (!response.ok) throw new Error('Kunde inte generera skriftliga frågor');

  const data = await response.json();
  const raw = data.content?.[0]?.text || '';
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Ogiltigt svar från AI');

  const parsed = JSON.parse(match[0]);
  return parsed.questions || [];
}

// ── Hämta frågor – blandar sparade MC + skriftliga ───────────────
async function fetchQuestions(subjectKey) {
  const MC_COUNT = 4;
  const mcLevels = ['E', 'E', 'C', 'A'];
  let mcQuestions = [];

  // Hämta MC från sparad fil
  const savedRes = await fetch(`/api/questions/${state.category}/${subjectKey}`);
  if (savedRes.ok) {
    const data = await savedRes.json();
    if (Array.isArray(data.questions) && data.questions.length > 0) {
      mcQuestions = data.questions.slice(0, MC_COUNT).map((q, i) => ({
        ...q,
        type: 'multiple_choice',
        level: mcLevels[i] || 'C',
      }));
    }
  }

  // Fallback MC via Claude om inga sparade
  if (mcQuestions.length === 0) {
    const subj = SUBJECTS[subjectKey];
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: CONFIG.model,
        max_tokens: 3000,
        system: 'Du är en erfaren NP-lärare. Du svarar ALLTID med ren JSON.',
        messages: [{ role: 'user', content: `Skapa exakt 4 flervalsfrågor om ${subj.topic} med 4 alternativ (A-D), correct som bokstav och explanation. Svara med JSON: {"questions":[...]}` }],
      }),
    });
    const data = await response.json();
    const raw = data.content?.[0]?.text || '';
    const match = raw.match(/\{[\s\S]*\}/);
    if (match) {
      const parsed = JSON.parse(match[0]);
      mcQuestions = (parsed.questions || []).slice(0, 4).map((q, i) => ({
        ...q, type: 'multiple_choice', level: mcLevels[i] || 'C',
      }));
    }
  }

  // Generera skriftliga frågor
  const writtenQuestions = await generateWrittenQuestions(subjectKey);

  // Blanda ihop och returnera
  const all = [...mcQuestions, ...writtenQuestions];
  return all.sort(() => Math.random() - 0.5);
}

// ── Visa aktuell fråga ───────────────────────────────────────────
function showQuestion() {
  const q = state.questions[state.current];
  const idx = state.current;
  const total = state.questions.length;

  $('q-counter').textContent = `Fråga ${idx + 1} / ${total}`;
  $('q-score').textContent = `${state.score} rätt`;
  $('progress-fill').style.width = `${(idx / total) * 100}%`;

  $('q-number').textContent = `Fråga ${idx + 1}`;
  $('q-text').textContent = q.question;

  // Nivåbadge
  const badge = $('q-level-badge');
  if (q.level) {
    const labels = { E: 'E-nivå', C: 'C-nivå', A: 'A-nivå' };
    badge.textContent = labels[q.level] || q.level;
    badge.className = `level-badge level-${q.level}`;
  } else {
    badge.className = 'level-badge hidden';
  }

  // Dölj allt
  $('q-explanation').className = 'explanation hidden';
  $('grading-result').classList.add('hidden');
  $('grading-loading').classList.add('hidden');
  $('btn-next').style.display = 'none';

  if (q.type === 'multiple_choice') {
    // Visa svarsalternativ
    $('written-section').classList.add('hidden');
    const optionsEl = $('q-options');
    optionsEl.innerHTML = '';
    optionsEl.style.display = 'flex';
    Object.entries(q.options).forEach(([letter, text]) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-letter">${letter}</span>${text}`;
      btn.dataset.letter = letter;
      btn.addEventListener('click', () => handleAnswer(letter));
      optionsEl.appendChild(btn);
    });
  } else {
    // Skriftlig fråga
    $('q-options').style.display = 'none';
    $('q-options').innerHTML = '';
    $('written-section').classList.remove('hidden');
    const input = $('written-input');
    input.value = '';
    input.rows = q.type === 'long_answer' ? 8 : 4;
    input.placeholder = q.type === 'long_answer'
      ? 'Skriv ditt svar här (ett stycke eller mer)...'
      : 'Skriv ditt svar här (2–3 meningar)...';
    $('btn-submit-written').disabled = false;
  }
}

// ── Skicka in och rätta skriftligt svar ──────────────────────────
async function handleWrittenSubmit() {
  const q = state.questions[state.current];
  const studentAnswer = $('written-input').value.trim();

  if (!studentAnswer) {
    showToast('Skriv ett svar innan du skickar in');
    return;
  }

  $('btn-submit-written').disabled = true;
  $('written-section').classList.add('hidden');
  $('grading-loading').classList.remove('hidden');

  try {
    const res = await fetch('/api/grade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: q.question,
        studentAnswer,
        subject: state.subject,
        level: q.level,
        sampleAnswer: q.sampleAnswer,
        gradingCriteria: q.gradingCriteria,
      }),
    });

    const grading = await res.json();

    state.answers.push({
      type: q.type,
      grade: grading.grade,
      question: q.question,
      isCorrect: grading.grade !== 'F',
    });

    $('grading-loading').classList.add('hidden');
    $('grading-result').classList.remove('hidden');

    const gradeMap = { A: 'grade-a', C: 'grade-c', E: 'grade-e', F: 'grade-f' };
    const gradeBadge = $('grade-badge');
    gradeBadge.textContent = grading.grade === 'F' ? 'Ej godkänd' : `Betyg ${grading.grade}`;
    gradeBadge.className = `grade-badge ${gradeMap[grading.grade] || ''}`;
    $('grade-summary').textContent = grading.summary;
    $('grade-strengths').textContent = grading.strengths;
    $('grade-improvements').textContent = grading.improvements;

    const isLast = state.current === state.questions.length - 1;
    const nextBtn = $('btn-next');
    nextBtn.textContent = isLast ? 'Se resultat' : 'Nästa fråga →';
    nextBtn.style.display = 'block';

  } catch (err) {
    $('grading-loading').classList.add('hidden');
    $('written-section').classList.remove('hidden');
    $('btn-submit-written').disabled = false;
    showToast('Kunde inte rätta svaret. Försök igen.');
  }
}

// ── Hantera svarsklick ───────────────────────────────────────────
function handleAnswer(selected) {
  const q = state.questions[state.current];
  const correct = q.correct;
  const isCorrect = selected === correct;

  if (isCorrect) state.score++;
  state.answers.push({ type: 'multiple_choice', selected, correct, isCorrect, question: q.question });

  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    const letter = btn.dataset.letter;
    if (letter === selected && isCorrect)  btn.classList.add('correct');
    if (letter === selected && !isCorrect) btn.classList.add('wrong');
    if (letter === correct && !isCorrect)  btn.classList.add('reveal');
  });

  $('q-score').textContent = `${state.score} rätt`;

  const expEl = $('q-explanation');
  expEl.className = `explanation ${isCorrect ? 'correct-exp' : 'wrong-exp'}`;
  $('exp-icon').textContent = isCorrect ? '✅' : '❌';
  $('exp-verdict').textContent = isCorrect ? 'Rätt svar!' : `Fel – rätt svar var ${correct}`;
  $('exp-body').textContent = q.explanation;

  const isLast = state.current === state.questions.length - 1;
  const nextBtn = $('btn-next');
  nextBtn.textContent = isLast ? 'Se resultat 🏆' : 'Nästa fråga →';
  nextBtn.style.display = 'block';
}

// ── Nästa fråga / Visa resultat ──────────────────────────────────
function handleNext() {
  const isLast = state.current === state.questions.length - 1;
  if (isLast) {
    showResult();
  } else {
    state.current++;
    showQuestion();
  }
}

// ── Resultatskärm ─────────────────────────────────────────────────
function showResult() {
  saveQuizResult();
  $('progress-fill').style.width = '100%';
  const total = state.questions.length;
  const correctCount = state.answers.filter(a => a.isCorrect).length;
  const pct = correctCount / total;

  let trophy, title, message;
  if (pct === 1) {
    trophy = '🥇'; title = 'Perfekt!';
    message = 'Imponerande – du klarade alla frågor! Du är mer än redo för NP.';
  } else if (pct >= 0.8) {
    trophy = '🌟'; title = 'Toppen!';
    message = 'Riktigt bra jobbat! Kolla igenom de frågor du missade och du är redo.';
  } else if (pct >= 0.6) {
    trophy = '📚'; title = 'Bra jobbat!';
    message = 'Du kan grunderna! Öva lite mer på de svagare delarna så är du i toppform.';
  } else if (pct >= 0.4) {
    trophy = '💪'; title = 'Fortsätt plugga!';
    message = 'Bra start! Det finns mer att lära – kör quizet igen och se hur du förbättras.';
  } else {
    trophy = '🔁'; title = 'Kör igen!';
    message = 'Alla börjar någonstans. Läs igenom förklaringarna och testa igen – du lär dig fort!';
  }

  $('result-trophy').textContent  = trophy;
  $('result-title').textContent   = title;
  $('result-points').textContent  = correctCount;
  $('result-message').textContent = message;
  document.querySelector('.score-denom').textContent = `/ ${total}`;

  const listEl = $('result-list');
  listEl.innerHTML = '';
  state.answers.forEach((a, i) => {
    const item = document.createElement('div');
    item.className = 'result-item';
    if (a.type === 'multiple_choice') {
      item.innerHTML = `
        <span class="result-item-icon">${a.isCorrect ? '✅' : '❌'}</span>
        <span class="result-item-text">${i + 1}. ${a.question}</span>
      `;
    } else {
      const gradeLabel = a.grade === 'F' ? 'Ej godkänd' : `Betyg ${a.grade}`;
      const gradeClass = a.grade ? `grade-${a.grade.toLowerCase()}` : 'grade-f';
      item.innerHTML = `
        <span class="grade-badge ${gradeClass}" style="font-size:0.72rem;padding:3px 9px;margin-right:8px">${gradeLabel}</span>
        <span class="result-item-text">${i + 1}. ${a.question}</span>
      `;
    }
    listEl.appendChild(item);
  });

  showScreen('screen-result');
}

// ── Event listeners ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryGrid();

  $('btn-back-categories').addEventListener('click', () => {
    setTheme(null);
    showScreen('screen-home');
  });

  $('btn-quit').addEventListener('click', () => {
    if (confirm('Avsluta quizet? Din progress försvinner.')) showScreen('screen-home');
  });
  $('btn-next').addEventListener('click', handleNext);
  $('btn-submit-written').addEventListener('click', handleWrittenSubmit);

  $('btn-home').addEventListener('click', () => showScreen('screen-home'));
  $('btn-retry').addEventListener('click', () => startQuiz(state.subject));
  $('btn-show-history').addEventListener('click', showHistory);

  $('btn-history').addEventListener('click', showHistory);
  $('btn-back-history').addEventListener('click', () => showScreen('screen-home'));
  $('btn-clear-history').addEventListener('click', () => {
    if (confirm('Vill du rensa all historik?')) {
      localStorage.removeItem(HISTORY_KEY);
      renderHistoryView('');
      showToast('Historiken har rensats');
    }
  });
});
