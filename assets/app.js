/* Página de treino. Lê o treino.json da pasta em que o index.html está. */
const G = {
  machine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 1.8v3"/><rect x="5.5" y="4.8" width="13" height="3.2" rx="1.1"/><rect x="5.5" y="9.4" width="13" height="3.2" rx="1.1"/><rect x="5.5" y="14" width="13" height="3.2" rx="1.1"/><rect x="5.5" y="18.6" width="13" height="3.2" rx="1.1"/><path d="M18.5 15.6h2.6"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.6" y="9" width="2.4" height="6" rx="1"/><rect x="5.6" y="6.5" width="2.9" height="11" rx="1.2"/><rect x="15.5" y="6.5" width="2.9" height="11" rx="1.2"/><rect x="19" y="9" width="2.4" height="6" rx="1"/><path d="M8.5 12h7"/></svg>',
  cable: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9.5" cy="7.5" r="4.6"/><circle cx="9.5" cy="7.5" r="1.1" fill="currentColor" stroke="none"/><path d="M14.1 7.5v9.3M14.1 16.8l-2.4 2.9M14.1 16.8l2.4 2.9M10.6 19.9h7"/></svg>',
  smith: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 3v18M17.5 3v18M3 10.5h18"/><rect x="2" y="8" width="2.2" height="5" rx=".8"/><rect x="19.8" y="8" width="2.2" height="5" rx=".8"/></svg>',
  band: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="8.2" width="17" height="7.6" rx="3.8" transform="rotate(-24 12 12)"/></svg>',
  body: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.6" r="2"/><path d="M12 7.6v6.2M7.5 10.2h9M12 13.8l-3.2 6.6M12 13.8l3.2 6.6"/></svg>',
  warnLine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.4 4.3 3 17.4A1.9 1.9 0 0 0 4.7 20.2h14.6a1.9 1.9 0 0 0 1.7-2.8L13.6 4.3a1.9 1.9 0 0 0-3.2 0z"/><path d="M12 9.4v4.2"/><circle cx="12" cy="16.7" r="0.9" fill="currentColor" stroke="none"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10.3 3.9 2.4 17.6A2 2 0 0 0 4.1 20.6h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4.5" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.6" r="1.15" fill="#fff"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.6 2.5c.4 2.6-.9 4.2-2.3 5.7C8.7 9.9 7 11.7 7 14.6 7 18 9.3 21 12.4 21c3.3 0 5.6-2.6 5.6-6.1 0-2.5-1.3-4.3-2.4-5.4.1 1.5-.4 2.7-1.4 3.4.2-3.5-.5-7.1-1.6-9.4z"/></svg>',
  tip: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5a6.5 6.5 0 0 0-3.9 11.7c.6.5 1 1.2 1 2V17h5.8v-.8c0-.8.4-1.5 1-2A6.5 6.5 0 0 0 12 2.5z"/><rect x="9.2" y="18.3" width="5.6" height="1.5" rx=".75"/><rect x="10.2" y="20.6" width="3.6" height="1.4" rx=".7"/></svg>',
  down: '<svg viewBox="0 0 14 8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.5 1.5 7 6.5l5.5-5"/></svg>',
  chev: '<svg viewBox="0 0 8 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.5 1.5 6.5 7l-5 5.5"/></svg>',
  back: '<svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2 2 10l8 8"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.8v14.4a1 1 0 0 0 1.5.87l12-7.2a1 1 0 0 0 0-1.74l-12-7.2A1 1 0 0 0 7 4.8z"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8.5 7H17v8.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  no: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg>'
};

const EQ = { machine: "Máquina", dumbbell: "Halteres", cable: "Polia", smith: "Smith", band: "Elástico", bodyweight: "Peso do corpo" };
const EQ_ICON = { machine: G.machine, dumbbell: G.dumbbell, cable: G.cable, smith: G.smith, band: G.band, bodyweight: G.body };
const BEFORE_ICON = { warning: G.warnLine, flame: G.flame, tip: G.tip };
const NOTE_TYPES = ["shoulder", "tip"];
/* Página inicial com a lista de programas (uma pasta acima). No GitHub Pages o link fica sem "index.html" */
const HUB = /github\.io$/.test(location.hostname) ? "../" : "../index.html";

/* Firefox no Android: a barra de endereço que some ao rolar faz a barra de abas pular, e o desfoque
   deixa a rolagem travada (bugs conhecidos do Firefox). Nele a página rola dentro do body, então a
   barra de endereço fica parada, e as barras ficam sólidas, sem desfoque. */
const FF_ANDROID = /Android/i.test(navigator.userAgent) && /Firefox\//.test(navigator.userAgent);
if (FF_ANDROID) document.documentElement.classList.add("ff-android");
const scroller = FF_ANDROID ? document.body : null;
const getScroll = () => scroller ? scroller.scrollTop : window.scrollY;
const setScroll = y => { if (scroller) scroller.scrollTop = y; else window.scrollTo(0, y); };

/* Armazenamento local (só neste aparelho) */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const sk = id => "treino:v3:" + id;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const doneCount = (id, n) => { const d = store.get(sk(id), []); let c = 0; for (let k = 0; k < n; k++) if (d[k]) c++; return c; };
const plural = (n, one, many) => n + " " + (n === 1 ? one : many);

/* ============================================================
   Leitura e conferência do treino.json
   ============================================================ */
let D = null;          // dados já conferidos e indexados
let usingEmbedded = false;

const ID_RE = { tr: /^tr-[A-Za-z0-9]+$/, it: /^it-[A-Za-z0-9]+$/, ex: /^ex-[A-Za-z0-9]+$/, gui: /^gui-[A-Za-z0-9]+$/ };
const PREFIX_NAME = { tr: "treino", it: "item", ex: "exercício", gui: "guia" };

function buildIndex(data) {
  const errors = [];
  const err = m => errors.push(m);
  const isObj = v => v && typeof v === "object" && !Array.isArray(v);
  if (!isObj(data)) return { errors: ["O arquivo precisa ser um objeto, começando com {."] };
  const workouts = Array.isArray(data.workouts) ? data.workouts : (err('Falta a lista "workouts".'), []);
  const exercises = Array.isArray(data.exercises) ? data.exercises : (err('Falta a lista "exercises".'), []);
  const guides = data.guides === undefined ? [] : Array.isArray(data.guides) ? data.guides : (err('"guides" precisa ser uma lista.'), []);

  const seen = {};
  const checkId = (id, kind, where) => {
    if (typeof id !== "string" || !ID_RE[kind].test(id)) {
      err(where + ': o "id" precisa começar com "' + kind + '-" seguido de letras ou números (veio ' + JSON.stringify(id) + ").");
      return false;
    }
    if (seen[id]) { err('O id "' + id + '" está repetido (' + seen[id] + " e " + where + ")."); return false; }
    seen[id] = where;
    return true;
  };
  const cleanNotes = (notes, where) => {
    if (notes === undefined) return [];
    if (!Array.isArray(notes)) { err(where + ': "notes" precisa ser uma lista.'); return []; }
    return notes.map((n, k) => {
      if (!isObj(n)) { err(where + ", observação " + (k + 1) + ": precisa ser um objeto com type e lines."); return null; }
      const lines = typeof n.lines === "string" ? [n.lines] : Array.isArray(n.lines) ? n.lines.filter(l => typeof l === "string" && l.trim()) : [];
      if (!lines.length) { err(where + ", observação " + (k + 1) + ': "lines" está vazio.'); return null; }
      if (!NOTE_TYPES.includes(n.type)) console.warn(where + ': tipo de observação "' + n.type + '" desconhecido, mostrando como dica.');
      return { type: NOTE_TYPES.includes(n.type) ? n.type : "tip", lines };
    }).filter(Boolean);
  };
  const needText = (v, field, where) => {
    if (typeof v === "string" && v.trim()) return true;
    err(where + ': falta "' + field + '".');
    return false;
  };
  const needSets = (it, where) => {
    if (!(Number.isInteger(it.sets) && it.sets >= 1 && it.sets <= 20)) err(where + ': "sets" precisa ser um número inteiro entre 1 e 20.');
    if (!(typeof it.reps === "string" && it.reps.trim()) && typeof it.reps !== "number") err(where + ': falta "reps".');
  };

  /* Catálogo */
  const exById = {};
  exercises.forEach((e, k) => {
    const where = "Exercício " + (k + 1) + (e && e.name ? " (" + e.name + ")" : "");
    if (!isObj(e)) { err(where + ": precisa ser um objeto."); return; }
    if (!checkId(e.id, "ex", where)) return;
    needText(e.name, "name", where);
    if (e.equipment !== undefined && !EQ[e.equipment]) console.warn(where + ': equipamento "' + e.equipment + '" desconhecido.');
    const videos = Array.isArray(e.videos) ? e.videos.filter(v => typeof v === "string" && /^https?:\/\//.test(v)) : [];
    exById[e.id] = {
      id: e.id, name: e.name || "", equipment: e.equipment, muscle: typeof e.muscle === "string" ? e.muscle : "",
      url: typeof e.url === "string" && /^https?:\/\//.test(e.url) ? e.url : "", videos,
      notes: cleanNotes(e.notes, where), alternatives: Array.isArray(e.alternatives) ? e.alternatives : [], where
    };
    if (e.alternatives !== undefined && !Array.isArray(e.alternatives)) err(where + ': "alternatives" precisa ser uma lista de ids.');
  });
  Object.values(exById).forEach(e => {
    e.alternatives.forEach(a => {
      if (typeof a !== "string" || !a.startsWith("ex-")) err(e.where + ': a alternativa ' + JSON.stringify(a) + ' não é um id de exercício (precisa começar com "ex-").');
      else if (!exById[a]) err(e.where + ': a alternativa "' + a + '" não existe em "exercises".');
      else if (a === e.id) err(e.where + ": o exercício aparece como alternativa dele mesmo.");
    });
    e.alternatives = e.alternatives.filter(a => exById[a] && a !== e.id);
  });
  const needEx = (id, where) => {
    if (typeof id !== "string" || !id.startsWith("ex-")) { err(where + ': "exercise" precisa ser um id de exercício (começa com "ex-").'); return false; }
    if (!exById[id]) { err(where + ': o exercício "' + id + '" não existe em "exercises".'); return false; }
    return true;
  };

  /* Guias */
  const guideById = {};
  guides.forEach((g, k) => {
    const where = "Guia " + (k + 1) + (g && g.title ? " (" + g.title + ")" : "");
    if (!isObj(g)) { err(where + ": precisa ser um objeto."); return; }
    if (!checkId(g.id, "gui", where)) return;
    needText(g.title, "title", where);
    guideById[g.id] = g;
  });

  /* Treinos */
  const itemById = {};
  const wById = {};
  const list = [];
  if (!workouts.length && !errors.length) err('A lista "workouts" está vazia.');
  workouts.forEach((w, k) => {
    const where = "Treino " + (w && w.name ? w.name : k + 1);
    if (!isObj(w)) { err(where + ": precisa ser um objeto."); return; }
    if (!checkId(w.id, "tr", where)) return;
    needText(w.name, "name", where);
    const wk = { id: w.id, name: w.name || "", description: typeof w.description === "string" ? w.description : "",
                 day: typeof w.day === "string" ? w.day : "", before: [], items: [] };
    (Array.isArray(w.items) ? w.items : (err(where + ': falta a lista "items".'), [])).forEach((it, j) => {
      const iw = where + ", item " + (j + 1);
      if (!isObj(it)) { err(iw + ": precisa ser um objeto."); return; }
      if (!checkId(it.id, "it", iw)) return;
      if (!needEx(it.exercise, iw)) return;
      needSets(it, iw);
      const item = { id: it.id, exercise: it.exercise, sets: it.sets, reps: String(it.reps), per: typeof it.per === "string" ? it.per : "",
                     notes: cleanNotes(it.notes, iw) };
      wk.items.push(item);
      itemById[item.id] = { item, workout: wk, warm: false };
    });
    if (w.before !== undefined && !Array.isArray(w.before)) err(where + ': "before" precisa ser uma lista.');
    (Array.isArray(w.before) ? w.before : []).forEach((b, j) => {
      const bw = where + ', "before" ' + (j + 1);
      if (!isObj(b)) { err(bw + ": precisa ser um objeto."); return; }
      if (b.type === "guide") {
        if (typeof b.guide !== "string" || !b.guide.startsWith("gui-")) { err(bw + ': "guide" precisa ser um id de guia (começa com "gui-").'); return; }
        if (!guideById[b.guide]) { err(bw + ': o guia "' + b.guide + '" não existe em "guides".'); return; }
        wk.before.push({ type: "guide", guide: b.guide, title: b.title || guideById[b.guide].title, subtitle: b.subtitle || "", icon: b.icon });
      } else if (b.type === "warmup") {
        if (!checkId(b.id, "it", bw)) return;
        if (!needEx(b.exercise, bw)) return;
        needSets(b, bw);
        const item = { id: b.id, exercise: b.exercise, sets: b.sets, reps: String(b.reps), per: typeof b.per === "string" ? b.per : "",
                       notes: cleanNotes(b.notes, bw), type: "warmup", title: b.title || "Aquecimento", subtitle: b.subtitle || "", icon: b.icon || "flame" };
        wk.before.push(item);
        itemById[item.id] = { item, workout: wk, warm: true };
      } else err(bw + ': "type" precisa ser "guide" ou "warmup" (veio ' + JSON.stringify(b.type) + ").");
    });
    list.push(wk);
    wById[wk.id] = wk;
  });

  return { errors, db: { workouts: list, wById, exById, guideById, itemById } };
}

function parseError(e, text) {
  const msg = String(e && e.message || e);
  let line = null, col = null;
  const lc = msg.match(/line (\d+) column (\d+)/i);
  const pos = msg.match(/position (\d+)/i);
  if (lc) { line = +lc[1]; col = +lc[2]; }
  else if (pos) {
    const before = text.slice(0, +pos[1]).split("\n");
    line = before.length; col = before[before.length - 1].length + 1;
  }
  return "O arquivo não é um JSON válido" + (line ? " (linha " + line + ", coluna " + col + ")" : "") +
    ". Confira vírgulas, aspas e chaves perto desse ponto. Detalhe: " + msg;
}

function fatal(errors, source) {
  document.querySelector(".tabbar").hidden = true;
  detailView.hidden = true;
  listView.hidden = false;
  listView.innerHTML =
    nav("Erro no treino.json", HUB, "Treinos") +
    '<div class="lt"><h1 class="large-title t2">Erro no treino.json</h1>' +
      '<p class="lt-sub">Corrija o arquivo e recarregue a página.' + (source ? " Lido de: " + esc(source) + "." : "") + '</p></div>' +
    '<p class="g-head">' + plural(errors.length, "problema", "problemas") + '</p>' +
    '<div class="group">' + errors.slice(0, 30).map(m =>
      '<div class="err-row">' + G.warn + '<span>' + esc(m) + '</span></div>').join("") +
      (errors.length > 30 ? '<div class="err-row"><span></span><span>… e mais ' + (errors.length - 30) + '.</span></div>' : '') +
    '</div><div class="spacer"></div>';
  updateNav();
}

async function load() {
  let text = null, source = "treino.json";
  try {
    const r = await fetch("treino.json", { cache: "no-cache" });
    if (r.ok) text = await r.text();
  } catch (e) { /* aberto direto do computador: o navegador não deixa ler outro arquivo */ }
  if (text === null) {
    const emb = document.getElementById("treino-data");
    text = emb ? emb.textContent.trim() : "";
    if (!text) {
      fatal(["Não consegui ler o treino.json desta pasta. Abra pelo link do GitHub Pages ou por um servidor local (veja o README)."], "");
      return;
    }
    source = "cópia embutida no index.html";
    usingEmbedded = true;
  }
  let data;
  try { data = JSON.parse(text); } catch (e) { fatal([parseError(e, text)], source); return; }
  const res = buildIndex(data);
  if (res.errors.length) { fatal(res.errors, source); return; }
  D = res.db;
  migrateV2();
  buildTabbar();
  window.addEventListener("hashchange", route);
  route();
}

/* Séries marcadas na versão anterior da página (chaves por letra e posição) passam para as chaves por id */
function migrateV2() {
  try {
    if (localStorage.getItem("treino:v3:migrado")) return;
    D.workouts.forEach(wk => {
      const L = wk.name.toLowerCase();
      const move = (oldKey, id) => {
        const v = localStorage.getItem(oldKey);
        if (v !== null && localStorage.getItem(sk(id)) === null) localStorage.setItem(sk(id), v);
        localStorage.removeItem(oldKey);
      };
      wk.items.forEach((it, i) => move("treino:v2:" + L + ":" + i, it.id));
      wk.before.forEach(b => { if (b.type === "warmup") move("treino:v2:" + L + ":aq", b.id); });
    });
    localStorage.setItem("treino:v3:migrado", "1");
  } catch (e) {}
}

/* ============================================================
   Telas
   ============================================================ */
const exIcon = ex => EQ_ICON[ex.equipment] || G.dumbbell;
const workoutItems = wk => wk.before.filter(b => b.type === "warmup").concat(wk.items);

/* Observações do exercício + do item, juntando as do mesmo tipo numa caixa só */
function mergeNotes(a, b) {
  const out = [];
  a.concat(b || []).forEach(n => {
    const same = out.find(o => o.type === n.type);
    if (same) same.lines = same.lines.concat(n.lines);
    else out.push({ type: n.type, lines: n.lines.slice() });
  });
  return out;
}

function nav(title, backHref, backLabel) {
  return '<header class="nav">' +
    (backHref ? '<a class="back" href="' + backHref + '">' + G.back + esc(backLabel) + '</a>' : '<span></span>') +
    '<span class="nav-title">' + esc(title) + '</span><span></span></header>';
}

function setsLine(it) {
  return plural(it.sets, "série", "séries") + " · " + it.reps + " reps" + (it.per ? " " + it.per : "");
}

function exCell(it) {
  const ex = D.exById[it.exercise];
  const d = doneCount(it.id, it.sets);
  const full = d === it.sets;
  return '<a class="cell" href="#' + it.id + '">' +
    '<span class="thumb">' + exIcon(ex) + (full ? '<span class="badge">' + G.check + '</span>' : '') + '</span>' +
    '<span class="cell-main"><span class="cell-title">' + esc(ex.name) + '</span>' +
    '<span class="cell-sub">' + esc(setsLine(it)) + (d > 0 && !full ? ' · <span class="prog">' + d + ' de ' + it.sets + '</span>' : '') + '</span></span>' +
    '<span class="chev">' + G.chev + '</span></a>';
}

function beforeCell(b) {
  const href = b.type === "guide" ? b.guide : b.id;
  const done = b.type === "warmup" && doneCount(b.id, b.sets) === b.sets;
  const sub = b.subtitle || (b.type === "warmup" ? setsLine(b) : "");
  return '<a class="cell" href="#' + href + '"><span class="thumb orange">' + (BEFORE_ICON[b.icon] || (b.type === "guide" ? G.warnLine : G.flame)) +
      (done ? '<span class="badge">' + G.check + '</span>' : '') + '</span>' +
    '<span class="cell-main"><span class="cell-title">' + esc(b.title) + '</span>' + (sub ? '<span class="cell-sub">' + esc(sub) + '</span>' : '') + '</span>' +
    '<span class="chev">' + G.chev + '</span></a>';
}

function listHTML(wk) {
  const doneSets = workoutItems(wk).reduce((s, it) => s + doneCount(it.id, it.sets), 0);
  const title = "Treino " + wk.name;
  const sub = [wk.description, wk.day].filter(Boolean).join(" · ");
  return (
    nav(title, HUB, "Treinos") +
    '<div class="lt"><h1 class="large-title">' + esc(title) + '</h1>' + (sub ? '<p class="lt-sub">' + esc(sub) + '</p>' : '') + '</div>' +
    (wk.before.length ? '<p class="g-head">Antes de começar</p><div class="group">' + wk.before.map(beforeCell).join("") + '</div>' : '') +
    '<p class="g-head">' + plural(wk.items.length, "exercício", "exercícios") + '</p>' +
    (wk.items.length ? '<div class="group">' + wk.items.map(exCell).join("") + '</div>' : '') +
    '<p class="g-foot">Séries marcadas ficam salvas só neste aparelho.' +
      (usingEmbedded && location.protocol === "file:" ? ' Aberto direto do computador: edições no treino.json só aparecem no GitHub Pages ou num servidor local.' : '') + '</p>' +
    (doneSets > 0 ? '<div class="spacer"></div><div class="group"><button class="cell-btn" type="button" id="reset">Zerar séries deste treino</button></div>' : '')
  );
}

function notesHTML(notes) {
  if (!notes.length) return "";
  return '<div class="spacer"></div><div class="group">' + notes.map(n =>
    '<div class="note ' + (n.type === "shoulder" ? "ombro" : "dica") + '"><div class="note-h">' +
      (n.type === "shoulder" ? G.warn + "Cuidado com o ombro" : G.tip + "Dica") + '</div>' +
      (n.lines.length > 1 ? '<ul>' + n.lines.map(l => '<li>' + esc(l) + '</li>').join("") + '</ul>' : '<p>' + esc(n.lines[0]) + '</p>') +
    '</div>').join("") + '</div>';
}

function tabIcon(l) {
  const fs = l.length > 1 ? 10 : 12.5;
  return '<svg class="ti" viewBox="0 0 26 26" aria-hidden="true">' +
    '<g class="line"><rect x="2.8" y="2.8" width="20.4" height="20.4" rx="5.8" fill="none" stroke="currentColor" stroke-width="1.7"/>' +
      '<text x="13" y="13.6" text-anchor="middle" dominant-baseline="middle" font-size="' + fs + '" font-weight="600" fill="currentColor" font-family="-apple-system, BlinkMacSystemFont, Inter, sans-serif">' + esc(l) + '</text></g>' +
    '<g class="fill"><rect x="1.9" y="1.9" width="22.2" height="22.2" rx="6.3" fill="currentColor"/>' +
      '<text x="13" y="13.6" text-anchor="middle" dominant-baseline="middle" font-size="' + fs + '" font-weight="700" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, Inter, sans-serif">' + esc(l) + '</text></g>' +
  '</svg>';
}

function buildTabbar() {
  const bar = document.querySelector(".tabbar");
  const inner = bar.querySelector(".tabbar-in");
  inner.style.gridTemplateColumns = "repeat(" + D.workouts.length + ", 1fr)";
  inner.innerHTML = D.workouts.map(wk => {
    const l = wk.name.length <= 2 ? wk.name : wk.name.charAt(0);
    const label = wk.name.length <= 3 ? "Treino " + wk.name : wk.name;
    return '<button type="button" data-tab="' + wk.id + '" aria-selected="false">' + tabIcon(l) + '<span class="tl">' + esc(label) + '</span></button>';
  }).join("");
  bar.hidden = false;
}

function fallbackMedia(url, name) {
  return '<a class="video-media" href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="Ver vídeo de ' + esc(name) + '"><span class="play">' + G.play + '</span></a>';
}

function siteName(url) {
  try { return /(^|\.)musclewiki\.com$/.test(new URL(url).hostname) ? "MuscleWiki" : "site"; } catch (e) { return "site"; }
}

function videoHTML(ex, jump) {
  const vids = ex.videos.slice(0, 4);
  const url = ex.url;
  if (!vids.length && !url) return jump ? '<div class="group video">' + jump + '</div>' : '';
  const media = vids.length
    ? '<div class="carousel" data-url="' + esc(url) + '" data-name="' + esc(ex.name) + '"><div class="slides">' +
        vids.map(v => '<div class="slide"><video src="' + esc(v) + '" muted loop playsinline preload="metadata" aria-label="Vídeo de ' + esc(ex.name) + '"></video></div>').join("") +
      '</div>' + (vids.length > 1 ? '<div class="dots">' + vids.map((_, k) => '<span' + (k ? '' : ' class="on"') + '></span>').join("") + '</div>' : '') + '</div>'
    : fallbackMedia(url, ex.name);
  return '<div class="group video">' + media +
    (url ? '<a class="video-row" href="' + esc(url) + '" target="_blank" rel="noopener"><span>' + (vids.length ? 'Abrir no ' + siteName(url) : 'Ver vídeo') + '</span><span class="ext">' + G.ext + '</span></a>' : '') +
    (jump || '') +
  '</div>';
}

/* Toca só o vídeo visível; se nenhum carregar, volta para o botão */
let carouselIO = null;
function initCarousel() {
  if (carouselIO) { carouselIO.disconnect(); carouselIO = null; }
  const car = detailView.querySelector(".carousel");
  if (!car) return;
  const slides = car.querySelector(".slides");
  const fallback = () => {
    if (!car.isConnected) return;
    if (car.dataset.url) car.outerHTML = fallbackMedia(car.dataset.url, car.dataset.name);
    else car.remove();
  };
  const drop = v => {
    const slide = v.closest(".slide");
    const idx = Array.from(slides.children).indexOf(slide);
    slide.remove();
    const dots = car.querySelector(".dots");
    if (dots && dots.children[idx]) dots.children[idx].remove();
    if (dots && dots.children.length < 2) dots.remove();
    if (!slides.children.length) fallback();
  };
  const vids = Array.from(car.querySelectorAll("video"));
  if ("IntersectionObserver" in window) {
    carouselIO = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio >= 0.6) { const pr = e.target.play(); if (pr && pr.catch) pr.catch(() => {}); }
      else e.target.pause();
    }), { threshold: [0, 0.6, 1] });
  }
  vids.forEach(v => {
    v.addEventListener("error", () => drop(v), { once: true });
    if (carouselIO) carouselIO.observe(v); else { const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}); }
  });
  slides.addEventListener("scroll", () => {
    const i = Math.round(slides.scrollLeft / Math.max(1, slides.clientWidth));
    car.querySelectorAll(".dots span").forEach((d, k) => d.classList.toggle("on", k === i));
  }, { passive: true });
  setTimeout(() => {
    const live = Array.from(car.querySelectorAll("video"));
    if (live.length && live.every(v => v.error || v.networkState === 3)) fallback();
  }, 5000);
}
document.addEventListener("securitypolicyviolation", e => {
  if ((e.effectiveDirective || e.violatedDirective || "").indexOf("media-src") === 0) {
    const car = detailView.querySelector(".carousel");
    if (car) { if (car.dataset.url) car.outerHTML = fallbackMedia(car.dataset.url, car.dataset.name); else car.remove(); }
  }
});

function optionCell(href, ex, sub) {
  return '<a class="cell" href="' + href + '">' +
    '<span class="thumb soft">' + exIcon(ex) + '</span>' +
    '<span class="cell-main"><span class="cell-title">' + esc(ex.name) + '</span>' + (sub ? '<span class="cell-sub">' + esc(sub) + '</span>' : '') + '</span>' +
    '<span class="chev">' + G.chev + '</span></a>';
}

/* Tela de um item do treino (exercício principal) ou de uma alternativa dele (altId) */
function detailHTML(ref, altId) {
  const { item, workout: wk, warm } = ref;
  const main = D.exById[item.exercise];
  const alt = altId ? D.exById[altId] : null;
  const ex = alt || main;
  const base = "#" + item.id;
  const d = store.get(sk(item.id), []);
  const sets = Array.from({ length: item.sets }, (_, k) =>
    '<button class="set" type="button" data-set="' + k + '" aria-pressed="' + !!d[k] + '">' +
      '<span class="circle">' + G.check + '</span><span>Série ' + (k + 1) + '</span>' +
      '<span class="set-detail">' + esc(item.reps) + ' reps</span></button>').join("");

  let options = "";
  if (!alt && main.alternatives.length) {
    options = '<p class="g-head" id="alts">Alternativas</p><div class="group">' +
      main.alternatives.map(a => optionCell(base + "-" + a, D.exById[a], EQ[D.exById[a].equipment] || "")).join("") +
      '</div><p class="g-foot">Se o aparelho estiver ocupado.</p>';
  } else if (alt) {
    const others = [optionCell(base, main, "Exercício principal")]
      .concat(main.alternatives.filter(a => a !== alt.id).map(a => optionCell(base + "-" + a, D.exById[a], EQ[D.exById[a].equipment] || "")));
    options = '<p class="g-head" id="alts">Outras opções</p><div class="group">' + others.join("") + '</div>';
  }

  const nOpts = main.alternatives.length;
  const jump = nOpts ? '<button class="video-row jump" type="button" data-jump="alts"><span>' + (alt ? 'Ver outras opções' : 'Ver alternativas') + '</span>' +
    '<span class="jump-r"><span class="count">' + nOpts + '</span>' + G.down + '</span></button>' : '';
  const back = alt
    ? nav(ex.name, base, warm ? item.title : (main.name.length <= 16 ? main.name : "Voltar"))
    : nav(ex.name, "#" + wk.id, "Treino " + wk.name);
  const sub = warm
    ? (alt ? item.title + " · alternativa para " + main.name : item.title + " · antes do treino")
    : (alt ? "Alternativa para " + main.name : main.muscle);
  const foot = alt
    ? 'As séries marcadas aqui contam para ' + esc(warm ? item.title : main.name) + ' na lista.'
    : (item.sets === 1 ? 'Toque na série quando terminar.' : 'Toque em cada série quando terminar.');
  const label = item.sets === 1 ? "Série" : "Séries";

  return (
    back +
    '<div class="lt"><h1 class="large-title t2">' + esc(ex.name) + '</h1>' + (sub ? '<p class="lt-sub">' + esc(sub) + '</p>' : '') + '</div>' +
    '<div class="spacer" style="height:8px"></div>' +
    videoHTML(ex, jump) +
    '<div class="spacer"></div>' +
    '<div class="group stats"><div class="stat"><span class="s-l">' + label + '</span><span class="s-v">' + item.sets + '</span></div>' +
      '<div class="stat"><span class="s-l">Repetições' + (item.per ? ' ' + esc(item.per) : '') + '</span><span class="s-v">' + esc(item.reps) + '</span></div></div>' +
    notesHTML(mergeNotes(ex.notes, item.notes)) +
    '<p class="g-head">' + label + '</p><div class="group" id="sets">' + sets + '</div>' +
    '<p class="g-foot">' + foot + '</p>' +
    options +
    '<div class="spacer"></div>'
  );
}

function guideHTML(g, wk) {
  const ps = g.painScale;
  let scale = "";
  if (ps && Number.isFinite(ps.min) && Number.isFinite(ps.max) && ps.max > ps.min && ps.max - ps.min <= 20) {
    const n = ps.max - ps.min + 1;
    const cells = Array.from({ length: n }, (_, k) => {
      const v = ps.min + k;
      return '<span class="' + (Number.isFinite(ps.okUpTo) && v <= ps.okUpTo ? "g" : "r") + '">' + v + '</span>';
    }).join("");
    scale = '<p class="g-head">Escala de dor</p>' +
      '<div class="group"><div class="scale"><div class="scale-bar" style="grid-template-columns:repeat(' + n + ',1fr)" aria-label="Escala de dor de ' + ps.min + ' a ' + ps.max + '">' + cells + '</div>' +
      '<div class="scale-cap"><span>' + esc(ps.minLabel || "") + '</span><span>' + esc(ps.maxLabel || "") + '</span></div></div></div>';
  }
  const rules = Array.isArray(g.rules) && g.rules.length
    ? (scale ? '<div class="spacer"></div>' : '') + '<div class="group">' + g.rules.map(r =>
        '<div class="rule"><span class="dot ' + (r.level === "stop" ? "r" : r.level === "warn" ? "o" : "g") + '"></span><span>' +
          (r.title ? '<b>' + esc(r.title) + '</b> ' : '') + esc(r.text || "") + '</span></div>').join("") + '</div>'
    : "";
  const avoid = Array.isArray(g.avoid) && g.avoid.length
    ? '<p class="g-head">Não fazer</p><div class="group">' +
        g.avoid.map(t => '<div class="avoid">' + G.no + '<span>' + esc(t) + '</span></div>').join("") + '</div>'
    : "";
  return (
    nav(g.title, "#" + wk.id, "Treino " + wk.name) +
    '<div class="lt"><h1 class="large-title t2">' + esc(g.title) + '</h1>' + (g.subtitle ? '<p class="lt-sub">' + esc(g.subtitle) + '</p>' : '') + '</div>' +
    scale + rules + avoid +
    '<div class="spacer"></div>'
  );
}

/* ============================================================
   Navegação
   ============================================================ */
const listView = document.getElementById("list-view");
const detailView = document.getElementById("detail-view");
const sheet = document.getElementById("sheet");
const listScroll = {};
let currentList = null;

function activeView() { return detailView.hidden ? listView : detailView; }

function updateNav() {
  const v = activeView();
  const n = v.querySelector(".nav");
  const t = v.querySelector(".large-title");
  if (!n || !t) return;
  n.classList.toggle("scrolled", t.getBoundingClientRect().bottom < 50);
}

function setTab(id) {
  document.querySelectorAll(".tabbar [data-tab]").forEach(b => b.setAttribute("aria-selected", b.dataset.tab === id));
}

function show(view, push) {
  (view === listView ? detailView : listView).hidden = true;
  view.hidden = false;
  view.classList.remove("push");
  if (push) { void view.offsetWidth; view.classList.add("push"); }
}

function openDetail(wk, html) {
  if (!listView.hidden && currentList) listScroll[currentList] = getScroll();
  setTab(wk.id);
  currentList = wk.id;
  detailView.innerHTML = html;
  show(detailView, true);
  setScroll(0);
}

function route() {
  if (!D) return;
  const h = (location.hash || "").slice(1);
  const im = h.match(/^(it-[A-Za-z0-9]+)(?:-(ex-[A-Za-z0-9]+))?$/);
  const ref = im && D.itemById[im[1]];
  if (ref && (!im[2] || D.exById[ref.item.exercise].alternatives.includes(im[2]))) {
    openDetail(ref.workout, detailHTML(ref, im[2] || null));
    detailView.dataset.item = ref.item.id;
    initCarousel();
  } else if (D.guideById[h]) {
    const wk = D.wById[currentList] || D.workouts.find(w => w.before.some(b => b.guide === h)) || D.workouts[0];
    openDetail(wk, guideHTML(D.guideById[h], wk));
    delete detailView.dataset.item;
  } else {
    const wk = D.wById[h] || D.wById[currentList] || D.workouts[0];
    currentList = wk.id;
    setTab(wk.id);
    listView.innerHTML = listHTML(wk);
    show(listView, false);
    setScroll(listScroll[wk.id] || 0);
  }
  updateNav();
}

function openSheet() {
  document.getElementById("sheet-msg").textContent = "As séries marcadas do Treino " + D.wById[currentList].name + " serão desmarcadas.";
  sheet.hidden = false;
  sheet.querySelector(".cancel").focus();
}
function closeSheet() { sheet.hidden = true; }

document.addEventListener("click", ev => {
  if (!D) return;
  const tab = ev.target.closest("[data-tab]");
  if (tab) {
    const k = tab.dataset.tab;
    if (!listView.hidden) listScroll[currentList] = getScroll();
    if (k !== currentList || listView.hidden) listScroll[k] = listView.hidden && k === currentList ? listScroll[k] : 0;
    if (location.hash === "#" + k) route(); else location.hash = k;
    return;
  }
  const setBtn = ev.target.closest("[data-set]");
  if (setBtn && detailView.dataset.item) {
    const id = detailView.dataset.item, k = +setBtn.dataset.set;
    const d = store.get(sk(id), []);
    d[k] = !d[k];
    store.set(sk(id), d);
    setBtn.setAttribute("aria-pressed", !!d[k]);
    return;
  }
  if (ev.target.closest("[data-jump]")) {
    const head = document.getElementById("alts");
    if (head) {
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      head.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      const grp = head.nextElementSibling;
      if (grp && !reduce) { grp.classList.remove("flash"); void grp.offsetWidth; grp.classList.add("flash"); }
    }
    return;
  }
  if (ev.target.closest("#reset")) { openSheet(); return; }
  const s = ev.target.closest("[data-sheet]");
  if (s) {
    if (s.dataset.sheet === "confirm") {
      workoutItems(D.wById[currentList]).forEach(it => store.del(sk(it.id)));
      closeSheet();
      route();
    } else closeSheet();
  }
});
document.addEventListener("keydown", ev => { if (ev.key === "Escape" && !sheet.hidden) closeSheet(); });
let navFrame = 0;
(scroller || window).addEventListener("scroll", () => {
  if (!navFrame) navFrame = requestAnimationFrame(() => { navFrame = 0; updateNav(); });
}, { passive: true });
load();
