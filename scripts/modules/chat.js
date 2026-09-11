/* =====================================================================
 * Lyse.AI — Chat (mode démo, non connecté à une IA)
 * ---------------------------------------------------------------------
 * Ce fichier fait 3 choses :
 *   1. Charge la config depuis `.env` (APP_MODE / API_URL / API_KEY / API_MODEL)
 *   2. Simule ce que ferait un vrai appel API, sans jamais réellement
 *      appeler une IA — et affiche ces infos dans un panneau "debug"
 *      utile au dev (endpoint prévu, payload, latence, etc.)
 *   3. Gère l'UI du chat (envoi, affichage des bulles, etc.)
 *
 * Pour brancher une vraie IA plus tard : voir la section
 * "TODO: BRANCHER UNE VRAIE API" dans callChatAPI().
 * ===================================================================== */

(() => {
  'use strict';

  /* -------------------------- 1. Config / .env -------------------------- */

  const DEFAULT_ENV = {
    APP_MODE: 'test',
    API_URL: '',
    API_KEY: '',
    API_MODEL: 'lyse-ai-v1',
  };

  /** Parse un fichier .env (texte brut) en objet clé/valeur. */
  function parseEnv(text) {
    const out = {};
    text.split('\n').forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) return;
      const eq = line.indexOf('=');
      if (eq === -1) return;
      const key = line.slice(0, eq).trim();
      let value = line.slice(eq + 1).trim();
      // retire d'éventuels guillemets
      value = value.replace(/^["']|["']$/g, '');
      out[key] = value;
    });
    return out;
  }

  /** Charge `.env` via fetch. Si indisponible (file://, 404...), retombe sur les défauts. */
  async function loadEnv() {
    try {
      const res = await fetch('./.env', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const parsed = { ...DEFAULT_ENV, ...parseEnv(text) };
      console.info('[Lyse.AI] .env chargé :', parsed);
      return { ...parsed, _source: '.env' };
    } catch (err) {
      console.warn(
        '[Lyse.AI] Impossible de lire ./.env (normal en file:// ou sans serveur). ' +
          'Valeurs par défaut utilisées. Détail :',
        err.message
      );
      return { ...DEFAULT_ENV, _source: 'defaults' };
    }
  }

  /**
   * Détermine le mode effectif, avec priorité :
   * 1) ?mode=test|prod dans l'URL
   * 2) override choisi via le bouton de mode (localStorage)
   * 3) APP_MODE défini dans .env
   * 4) "test" par défaut
   */
  function resolveMode(env) {
    const urlMode = new URLSearchParams(location.search).get('mode');
    if (urlMode === 'test' || urlMode === 'prod') return { mode: urlMode, source: 'url' };

    const stored = localStorage.getItem('lyse_mode_override');
    if (stored === 'test' || stored === 'prod') return { mode: stored, source: 'localStorage' };

    if (env.APP_MODE === 'test' || env.APP_MODE === 'prod') {
      return { mode: env.APP_MODE, source: '.env' };
    }
    return { mode: 'test', source: 'default' };
  }

  /* --------------------------- 2. API scaffold --------------------------- */

  function maskKey(key) {
    if (!key) return '(vide)';
    if (key.length <= 8) return '••••••••';
    return `${key.slice(0, 4)}••••${key.slice(-4)}`;
  }

  function buildRequestPreview(env, mode, history) {
    return {
      endpoint: env.API_URL || '(API_URL non défini dans .env)',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${maskKey(env.API_KEY)}`,
      },
      body: {
        model: env.API_MODEL,
        mode,
        messages: history.map((m) => ({ role: m.role, content: m.content })),
      },
    };
  }

  function estimateTokens(text) {
    // Estimation grossière (≈ 4 caractères / token), utile seulement pour debug.
    return Math.max(1, Math.round(text.length / 4));
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Point d'entrée "API". Ne contacte jamais une vraie IA pour l'instant.
   * Retourne { reply, debug } où `debug` contient tout ce qui serait utile
   * à un dev pour vérifier ce qui *aurait* été envoyé/reçu.
   */
  async function callChatAPI({ env, mode, userMessage, history }) {
    const startedAt = performance.now();
    const requestPreview = buildRequestPreview(env, mode, history);

    if (mode === 'test') {
      // Mode TEST : on simule juste une latence réseau réaliste.
      await wait(500 + Math.random() * 500);
      const elapsed = Math.round(performance.now() - startedAt);
      return {
        reply:
          "Mode **test** actif — je ne suis connecté à aucune IA. " +
          "J'affiche simplement les infos que le vrai appel API aurait utilisées.",
        debug: {
          mode,
          statutIA: 'Non connectée (mode test)',
          configSource: env._source,
          horodatage: new Date().toISOString(),
          latenceSimulee: `${elapsed} ms`,
          longueurMessage: `${userMessage.length} caractères`,
          tokensEstimes: `≈ ${estimateTokens(userMessage)} tokens`,
          messagesDansHistorique: history.length,
          requetePrevue: requestPreview,
        },
      };
    }

    // Mode PROD :
    // TODO: BRANCHER UNE VRAIE API
    // Dès que API_URL et API_KEY sont renseignés dans `.env`, décommenter
    // le bloc ci-dessous pour effectuer un vrai appel réseau :
    //
    const res = await fetch(env.API_URL, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${env.API_KEY}`,
       },
       body: JSON.stringify(requestPreview.body),
     });
     const data = await res.json();
     return { reply: data.reply, debug: { mode, statutIA: 'Connectée', ...data } };

    if (!env.API_URL || !env.API_KEY) {
      const elapsed = Math.round(performance.now() - startedAt);
      return {
        reply:
          "Mode **prod** actif, mais `API_URL` et/ou `API_KEY` sont vides dans `.env`. " +
          "Aucune requête n'a été envoyée. Voici ce qui *aurait* été appelé :",
        debug: {
          mode,
          statutIA: 'Non connectée (API_URL/API_KEY manquants)',
          configSource: env._source,
          horodatage: new Date().toISOString(),
          latenceSimulee: `${elapsed} ms`,
          longueurMessage: `${userMessage.length} caractères`,
          tokensEstimes: `≈ ${estimateTokens(userMessage)} tokens`,
          requetePrevue: requestPreview,
        },
      };
    }

    // API_URL / API_KEY présents mais l'appel réel reste désactivé pour l'instant
    // (voir TODO ci-dessus) : on continue d'afficher un aperçu, sans réseau.
    await wait(400);
    return {
      reply:
        'Mode **prod** actif et une API est configurée, mais l\'appel réel est encore ' +
        'désactivé côté code (voir `js/chat.js` → `callChatAPI`). Aperçu de la requête :',
      debug: {
        mode,
        statutIA: 'Configurée mais désactivée côté code',
        configSource: env._source,
        horodatage: new Date().toISOString(),
        requetePrevue: requestPreview,
      },
    };
  }

  /* ------------------------------ 3. UI ------------------------------ */

  const els = {};
  let state = {
    env: DEFAULT_ENV,
    mode: 'test',
    modeSource: 'default',
    history: [],
    sending: false,
  };

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /** Rendu minimal type markdown : gère **gras** et retours à la ligne. */
  function renderInline(text) {
    return escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function renderDebugCard(debug) {
    const { requetePrevue, ...rest } = debug;
    const rows = Object.entries(rest)
      .map(
        ([k, v]) => `
        <div class="debug-row">
          <div class="debug-key">${escapeHtml(k)}</div>
          <div class="debug-val">${escapeHtml(String(v))}</div>
        </div>`
      )
      .join('');

    const pre = requetePrevue
      ? `<pre class="debug-pre">${escapeHtml(JSON.stringify(requetePrevue, null, 2))}</pre>`
      : '';

    return `
      <details class="debug-card">
        <summary>Infos de développement</summary>
        <div class="debug-body">
          ${rows}
          ${pre}
        </div>
      </details>`;
  }

  const ICONS = {
    assistant:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c.6 2.8 1.6 3.8 4.4 4.4-2.8.6-3.8 1.6-4.4 4.4-.6-2.8-1.6-3.8-4.4-4.4C10.4 6.8 11.4 5.8 12 3z"></path><path d="M18.5 14c.35 1.6.9 2.15 2.5 2.5-1.6.35-2.15.9-2.5 2.5-.35-1.6-.9-2.15-2.5-2.5 1.6-.35 2.15-.9 2.5-2.5z"></path></svg>',
    system:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12" y2="8.01"></line><line x1="12" y1="11" x2="12" y2="16"></line></svg>',
  };

  function addMessage({ role, content, debug }) {
    const wrap = document.createElement('div');
    wrap.className = `msg ${role}`;

    const icon = ICONS[role] || '';
    const bubbleContent = `<p>${renderInline(content)}</p>${debug ? renderDebugCard(debug) : ''}`;

    wrap.innerHTML = `
      <div class="msg-avatar">${icon}</div>
      <div class="msg-bubble">${bubbleContent}</div>`;

    els.messages.appendChild(wrap);
    els.messages.scrollTop = els.messages.scrollHeight;
    return wrap;
  }

  function addTypingIndicator() {
    const wrap = document.createElement('div');
    wrap.className = 'msg assistant';
    wrap.id = 'typing-indicator';
    wrap.innerHTML = `
      <div class="msg-avatar">${ICONS.assistant}</div>
      <div class="msg-bubble">
        <div class="typing"><span></span><span></span><span></span></div>
      </div>`;
    els.messages.appendChild(wrap);
    els.messages.scrollTop = els.messages.scrollHeight;
  }

  function removeTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
  }

  function updateModeBadge() {
    els.modePill.dataset.mode = state.mode;
    els.modeLabel.textContent = `Mode : ${state.mode.toUpperCase()}`;
    els.modePill.title = `Source : ${state.modeSource}. Clique pour basculer (dev only).`;
  }

  function toggleMode() {
    const next = state.mode === 'test' ? 'prod' : 'test';
    localStorage.setItem('lyse_mode_override', next);
    location.reload();
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (state.sending) return;

    const text = els.input.value.trim();
    if (!text) return;

    state.sending = true;
    els.sendBtn.disabled = true;
    els.input.value = '';
    autoGrow();

    state.history.push({ role: 'user', content: text });
    addMessage({ role: 'user', content: text });

    addTypingIndicator();

    try {
      const { reply, debug } = await callChatAPI({
        env: state.env,
        mode: state.mode,
        userMessage: text,
        history: state.history,
      });

      removeTypingIndicator();
      state.history.push({ role: 'assistant', content: reply });
      addMessage({ role: 'assistant', content: reply, debug });
    } catch (err) {
      removeTypingIndicator();
      addMessage({
        role: 'assistant',
        content: `Erreur inattendue côté client : ${err.message}`,
      });
      console.error(err);
    } finally {
      state.sending = false;
      els.sendBtn.disabled = false;
      els.input.focus();
    }
  }

  function autoGrow() {
    els.input.style.height = 'auto';
    els.input.style.height = `${Math.min(els.input.scrollHeight, 160)}px`;
  }

  function clearConversation() {
    state.history = [];
    els.messages.innerHTML = '';
    addMessage({
      role: 'system',
      content: 'Conversation réinitialisée.',
    });
    addWelcomeMessage();
  }

  function addWelcomeMessage() {
    addMessage({
      role: 'assistant',
      content:
        "Bonjour 👋 Je suis l'assistant Lyse.AI, en **mode démonstration**. " +
        "Aucune IA n'est branchée pour l'instant : chaque message que tu envoies " +
        "déclenche simplement l'affichage des infos qu'un vrai appel API aurait utilisées, " +
        "pour faciliter le développement.",
    });
  }

  async function init() {
    els.messages = document.getElementById('chat-messages');
    els.form = document.getElementById('composer-form');
    els.input = document.getElementById('composer-input');
    els.sendBtn = document.getElementById('send-btn');
    els.modePill = document.getElementById('mode-pill');
    els.modeLabel = document.getElementById('mode-label');
    els.clearBtn = document.getElementById('clear-btn');
    els.banner = document.getElementById('env-banner');

    const env = await loadEnv();
    const { mode, source } = resolveMode(env);
    state.env = env;
    state.mode = mode;
    state.modeSource = source;

    updateModeBadge();

    els.banner.innerHTML = `
      <strong>Aucune IA connectée.</strong> Ceci est un chatbot de démonstration.
      Mode actuel : <code>${mode}</code> (source : ${source}).
      Change la valeur de <code>APP_MODE</code> dans <code>.env</code>, ajoute
      <code>?mode=prod</code> à l'URL, ou clique sur le badge de mode en haut à droite
      pour basculer.`;

    addWelcomeMessage();

    els.form.addEventListener('submit', handleSubmit);
    els.input.addEventListener('input', autoGrow);
    els.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        els.form.requestSubmit();
      }
    });
    els.modePill.addEventListener('click', toggleMode);
    els.clearBtn.addEventListener('click', clearConversation);
    els.input.focus();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
