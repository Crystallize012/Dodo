// ============================================================
//  BIO LINK — Script Enhanced by Claude
// ============================================================

// 1. Inject Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap';
document.head.appendChild(fontLink);

// 2. Inject CSS
const style = document.createElement('style');
style.innerHTML = `
  :root {
    --bg:           #09090b;
    --bg2:          #111115;
    --card:         rgba(255,255,255,0.04);
    --border:       rgba(255,255,255,0.09);
    --text:         #f4f4f5;
    --sub:          #71717a;
    --accent:       #6ee7b7;
    --accent2:      #38bdf8;
    --glow:         rgba(110,231,183,0.18);
    --btn-bg:       rgba(255,255,255,0.06);
    --btn-hover:    rgba(255,255,255,0.12);
    --radius:       18px;
  }
  [data-theme="light"] {
    --bg:           #f0f9ff;
    --bg2:          #e0f2fe;
    --card:         rgba(255,255,255,0.70);
    --border:       rgba(0,0,0,0.08);
    --text:         #0f172a;
    --sub:          #64748b;
    --accent:       #0ea5e9;
    --accent2:      #6366f1;
    --glow:         rgba(14,165,233,0.18);
    --btn-bg:       rgba(0,0,0,0.04);
    --btn-hover:    rgba(0,0,0,0.08);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.5s, color 0.5s;
    overflow-x: hidden;
  }

  /* ── BACKGROUND MESH ── */
  body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0;
    background:
      radial-gradient(ellipse 80% 50% at 20% 10%, rgba(110,231,183,0.10) 0%, transparent 70%),
      radial-gradient(ellipse 60% 60% at 80% 80%, rgba(56,189,248,0.10) 0%, transparent 70%);
    pointer-events: none;
  }
  [data-theme="light"] body::before {
    background:
      radial-gradient(ellipse 80% 50% at 20% 10%, rgba(14,165,233,0.12) 0%, transparent 70%),
      radial-gradient(ellipse 60% 60% at 80% 80%, rgba(99,102,241,0.10) 0%, transparent 70%);
  }

  /* ── CONTAINER ── */
  .container {
    position: relative; z-index: 1;
    width: 92%;
    max-width: 580px;
    background: var(--card);
    backdrop-filter: blur(28px) saturate(160%);
    -webkit-backdrop-filter: blur(28px) saturate(160%);
    border: 1px solid var(--border);
    border-radius: 28px;
    padding: 48px 40px 36px;
    text-align: center;
    box-shadow: 0 8px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
    animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) both;
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(32px) scale(0.97); }
    to   { opacity:1; transform:translateY(0) scale(1); }
  }

  /* ── THEME TOGGLE ── */
  .toggle-theme {
    position: absolute; top: 20px; right: 20px;
    background: var(--btn-bg);
    border: 1px solid var(--border);
    border-radius: 50%;
    width: 40px; height: 40px;
    font-size: 18px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.3s, transform 0.5s;
    color: var(--text);
  }
  .toggle-theme:hover { background: var(--btn-hover); }
  .rotate-anim { transform: rotate(360deg) scale(1.2); }

  /* ── VISITOR COUNTER ── */
  .visitor-badge {
    position: absolute; top: 20px; left: 20px;
    background: var(--btn-bg);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 11px;
    color: var(--sub);
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.5px;
    display: flex; align-items: center; gap: 5px;
  }
  .visitor-badge span { color: var(--accent); font-weight: 600; }

  /* ── PROFILE ── */
  .profile-wrap {
    position: relative;
    display: inline-block;
    margin-bottom: 18px;
  }
  .profile-ring {
    position: absolute; inset: -6px;
    border-radius: 50%;
    background: conic-gradient(var(--accent), var(--accent2), var(--accent));
    animation: spin 4s linear infinite;
    opacity: 0.7;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .profile-ring::after {
    content: '';
    position: absolute; inset: 4px;
    border-radius: 50%;
    background: var(--bg);
  }
  img.profile {
    position: relative; z-index: 1;
    width: 108px; height: 108px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s;
  }
  img.profile:hover { transform: scale(1.06); }

  /* ── NAME & TITLE ── */
  h1 {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    margin-bottom: 4px;
    background: linear-gradient(135deg, var(--text) 30%, var(--sub));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .tagline {
    font-size: 0.875rem;
    color: var(--accent);
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  /* ── TYPING ── */
  .typing-wrap {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    height: 24px;
    margin: 12px 0 22px;
    color: var(--sub);
    font-size: 0.875rem;
  }
  .typing-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: blink 1s infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

  /* ── DIVIDER ── */
  .divider {
    width: 48px; height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    border-radius: 2px;
    margin: 0 auto 22px;
  }

  /* ── LINKS ── */
  .links-wrapper {
    display: flex; flex-direction: column; gap: 11px;
  }
  .bio-link {
    display: flex; align-items: center; gap: 14px;
    background: var(--btn-bg);
    border: 1px solid var(--border);
    padding: 14px 20px;
    border-radius: var(--radius);
    color: var(--text);
    text-decoration: none;
    font-size: 0.925rem;
    font-weight: 500;
    transition: transform 0.25s, background 0.25s, box-shadow 0.25s, border-color 0.25s;
    text-align: left;
    position: relative;
    overflow: hidden;
    animation: slideIn 0.5s cubic-bezier(.22,.68,0,1.2) both;
  }
  .bio-link:nth-child(1) { animation-delay: 0.10s; }
  .bio-link:nth-child(2) { animation-delay: 0.18s; }
  .bio-link:nth-child(3) { animation-delay: 0.26s; }
  .bio-link:nth-child(4) { animation-delay: 0.34s; }
  .bio-link:nth-child(5) { animation-delay: 0.42s; }
  .bio-link:nth-child(6) { animation-delay: 0.50s; }
  @keyframes slideIn {
    from { opacity:0; transform:translateX(-16px); }
    to   { opacity:1; transform:translateX(0); }
  }
  .bio-link::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: var(--radius);
  }
  .bio-link:hover { transform: translateY(-2px) scale(1.01); border-color: var(--accent); box-shadow: 0 6px 28px var(--glow); }
  .bio-link:hover::before { opacity: 0.06; }
  .bio-link:active { transform: scale(0.98); }

  .link-icon {
    font-size: 1.2rem;
    width: 36px; height: 36px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    position: relative; z-index: 1;
    transition: background 0.25s;
  }
  .bio-link:hover .link-icon { background: rgba(255,255,255,0.12); }
  .link-text { position: relative; z-index: 1; }
  .link-arrow {
    margin-left: auto;
    color: var(--sub);
    font-size: 0.75rem;
    position: relative; z-index: 1;
    transition: transform 0.25s, color 0.25s;
  }
  .bio-link:hover .link-arrow { transform: translateX(3px); color: var(--accent); }

  /* ── MUSIC BUTTON ── */
  .music-section {
    margin-top: 24px;
    display: flex; align-items: center; justify-content: center; gap: 14px;
  }
  .music-btn {
    display: flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    transition: transform 0.25s, box-shadow 0.25s, opacity 0.25s;
    box-shadow: 0 4px 20px var(--glow);
  }
  .music-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px var(--glow); }
  .music-btn:active { transform: scale(0.96); }
  .music-label { font-size: 0.78rem; color: var(--sub); }

  /* ── TIME ── */
  .time {
    margin-top: 20px;
    font-size: 0.8rem;
    color: var(--sub);
    letter-spacing: 0.5px;
    font-family: 'Syne', sans-serif;
  }

  /* ── FOOTER ── */
  footer {
    margin-top: 18px;
    font-size: 0.72rem;
    color: var(--sub);
    opacity: 0.6;
    letter-spacing: 0.8px;
  }

  /* ── TOAST NOTIFICATION ── */
  .toast {
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(80px);
    background: var(--card);
    border: 1px solid var(--border);
    backdrop-filter: blur(20px);
    padding: 10px 22px;
    border-radius: 50px;
    font-size: 0.85rem;
    color: var(--text);
    box-shadow: 0 4px 30px rgba(0,0,0,0.3);
    transition: transform 0.4s cubic-bezier(.22,.68,0,1.2), opacity 0.4s;
    opacity: 0; pointer-events: none; z-index: 999;
  }
  .toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
`;
document.head.appendChild(style);

// 3. Render HTML
const app = document.getElementById('app');
app.innerHTML = `
  <div class="container">

    <div class="visitor-badge">
      👁 <span id="visitorCount">0</span> views
    </div>

    <button class="toggle-theme" id="themeBtn" title="Toggle Theme">🌙</button>

    <div class="profile-wrap">
      <div class="profile-ring"></div>
      <img src="https://files.catbox.moe/o387vs.jpg" class="profile" alt="Dodo" />
    </div>

    <h1>Dodo</h1>
    <p class="tagline">Dodo Cihuyyy</p>

    <div class="typing-wrap">
      <div class="typing-dot"></div>
      <span id="typing"></span>
    </div>

    <div class="divider"></div>

    <div class="links-wrapper">
      <a class="bio-link" href="https://wa.me/6288212461534" target="_blank" rel="noopener">
        <span class="link-icon">💬</span>
        <span class="link-text">WhatsApp Dodo</span>
        <span class="link-arrow">→</span>
      </a>
      <a class="bio-link" href="https://www.instagram.com/always.ido" target="_blank" rel="noopener">
        <span class="link-icon">📸</span>
        <span class="link-text">Instagram</span>
        <span class="link-arrow">→</span>
      </a>
      <a class="bio-link" href="https://tiktok.com/@alwys.dodo" target="_blank" rel="noopener">
        <span class="link-icon">🎵</span>
        <span class="link-text">TikTok</span>
        <span class="link-arrow">→</span>
      </a>
      <a class="bio-link" href="https://whatsapp.com/channel/0029VbALF9uB4hdLg0QlSV2M" target="_blank" rel="noopener">
        <span class="link-icon">📢</span>
        <span class="link-text">WhatsApp Channel ¹</span>
        <span class="link-arrow">→</span>
      </a>
      <a class="bio-link" href="https://whatsapp.com/channel/0029Vb5si3ZG8l5GJf8yaC1N" target="_blank" rel="noopener">
        <span class="link-icon">📣</span>
        <span class="link-text">WhatsApp Channel ²</span>
        <span class="link-arrow">→</span>
      </a>
      <a class="bio-link" href="https://t.me/dodoirused" target="_blank" rel="noopener">
        <span class="link-icon">✈️</span>
        <span class="link-text">Telegram</span>
        <span class="link-arrow">→</span>
      </a>
    </div>

    <div class="music-section">
      <button class="music-btn" id="musicBtn">▶ Play Music</button>
      <span class="music-label" id="musicLabel">Background Music</span>
    </div>

    <div class="time" id="time"></div>
    <footer>© Website Dodo • All Rights Reserved</footer>
  </div>

  <div class="toast" id="toast"></div>

  <audio id="bg-music" loop>
    <source src="https://files.catbox.moe/lvhshq.mp3" type="audio/mpeg">
  </audio>
`;

// ── THEME TOGGLE ──
const themeBtn = document.getElementById('themeBtn');
let isDark = true;
themeBtn.onclick = () => {
  themeBtn.classList.add('rotate-anim');
  setTimeout(() => {
    isDark = !isDark;
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeBtn.textContent = isDark ? '🌙' : '☀️';
    themeBtn.classList.remove('rotate-anim');
  }, 250);
};

// ── MUSIC ──
const audio    = document.getElementById('bg-music');
const musicBtn = document.getElementById('musicBtn');
const musicLabel = document.getElementById('musicLabel');
musicBtn.onclick = function () {
  if (audio.paused) {
    audio.play();
    musicBtn.textContent = '⏸ Pause';
    musicLabel.textContent = '♪ Sedang Diputar';
    showToast('🎵 Musik diputar');
  } else {
    audio.pause();
    musicBtn.textContent = '▶ Play Music';
    musicLabel.textContent = 'Background Music';
    showToast('⏸ Musik dijeda');
  }
};

// ── TYPING EFFECT ──
const typing = document.getElementById('typing');
const texts  = ['Partner Chandz...', 'Ready Bot & Panel', 'Siap Membantu! 🚀'];
let tIdx = 0, cIdx = 0, deleting = false;
function typeAnim() {
  const full  = texts[tIdx];
  typing.textContent = full.substring(0, cIdx);
  let speed = deleting ? 45 : 90;
  if (!deleting && cIdx === full.length) { deleting = true; speed = 1800; }
  else if (deleting && cIdx === 0)       { deleting = false; tIdx = (tIdx + 1) % texts.length; }
  else                                   { cIdx += deleting ? -1 : 1; }
  setTimeout(typeAnim, speed);
}
typeAnim();

// ── LIVE CLOCK ──
function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent =
    now.toLocaleString('id-ID', { weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit' });
}
updateTime();
setInterval(updateTime, 1000);

// ── VISITOR COUNTER (localStorage) ──
const visits = parseInt(localStorage.getItem('dodo_visits') || '0') + 1;
localStorage.setItem('dodo_visits', visits);
document.getElementById('visitorCount').textContent = visits.toLocaleString('id-ID');

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── LINK CLICK TOAST ──
document.querySelectorAll('.bio-link').forEach(link => {
  link.addEventListener('click', () => {
    showToast('🔗 Membuka ' + link.querySelector('.link-text').textContent + '...');
  });
});

// ── RIGHT-CLICK PROTECTION ──
document.addEventListener('contextmenu', e => e.preventDefault());
