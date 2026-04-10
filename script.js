// 1. Tambahkan CSS secara dinamis
const style = document.createElement('style');
style.innerHTML = `
    :root {
      --bg-gradient: linear-gradient(135deg, #0f0f0f, #252525);
      --card-color: rgba(255, 255, 255, 0.05);
      --text-color: #ffffff;
      --subtext-color: #b0b0b0;
      --accent-color: #007aff;
      --button-bg: rgba(255, 255, 255, 0.1);
      --button-hover: rgba(255, 255, 255, 0.2);
    }
    [data-theme="light"] {
      --bg-gradient: linear-gradient(135deg, #e0e0e0, #ffffff);
      --card-color: rgba(0, 0, 0, 0.05);
      --text-color: #1a1a1a;
      --subtext-color: #444;
      --accent-color: #0056b3;
      --button-bg: rgba(0, 0, 0, 0.05);
      --button-hover: rgba(0, 0, 0, 0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: var(--bg-gradient);
      color: var(--text-color);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
    }
    .container {
      background: var(--card-color);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      padding: 40px 20px;
      width: 90%;
      max-width: 400px;
      text-align: center;
      position: relative;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .toggle-theme { position: absolute; top: 20px; right: 20px; background: none; border: none; font-size: 22px; cursor: pointer; transition: 0.4s; }
    .rotate-anim { transform: rotate(360deg) scale(1.3); }
    img.profile { width: 110px; height: 110px; border-radius: 50%; border: 2px solid var(--accent-color); padding: 5px; margin-bottom: 15px; }
    .links-wrapper { display: flex; flex-direction: column; gap: 12px; }
    .bio-link {
      background: var(--button-bg);
      padding: 14px;
      border-radius: 14px;
      color: var(--text-color);
      text-decoration: none;
      transition: 0.3s;
    }
    .bio-link:hover { transform: scale(1.03); background: var(--button-hover); }
    .music-btn { margin-top: 25px; background: var(--accent-color); color: white; border: none; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; }
`;
document.head.appendChild(style);

// 2. Render HTML ke dalam #app
const app = document.getElementById('app');
app.innerHTML = `
    <div class="container">
        <button class="toggle-theme" id="themeBtn">🌓</button>
        <img src="https://files.catbox.moe/o387vs.jpg" class="profile" />
        <h1>Dodo</h1>
        <p style="color:var(--accent-color)">Dodo Cihuyyy</p>
        <div id="typing" style="margin: 20px 0; height: 20px; color: var(--subtext-color)"></div>
        <div class="links-wrapper">
            
    <a class="bio-link" href="https://wa.me/6288212461534" target="_blank"> WhatsApp Dodo</a>
    <a class="bio-link" href="https://www.instagram.com/always.ido" target="_blank"> Instagram</a>
    <a class="bio-link" href="https://tiktok.com/@alwys.dodo" target="_blank"> TikTok</a>
    <a class="bio-link" href="https://whatsapp.com/channel/0029VbALF9uB4hdLg0QlSV2M" target="_blank"> WhatsApp Channel¹</a>
    <a class="bio-link" href="https://whatsapp.com/channel/0029Vb5si3ZG8l5GJf8yaC1N" target="_blank"> WhatsApp Channel²</a>
    <a class="bio-link" href="https://t.me/dodoirused" target="_blank"> Telegram</a>
        </div>
        <button class="music-btn" id="musicBtn">▶</button>
        <div id="time" style="font-size: 12px; margin-top: 15px; opacity: 0.6;"></div>
    </div>
    <audio id="bg-music" loop><source src="https://files.catbox.moe/lvhshq.mp3"></audio>
`;

// 3. Logika JavaScript
const btn = document.getElementById("themeBtn");
btn.onclick = () => {
    btn.classList.add("rotate-anim");
    const next = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTimeout(() => {
        document.body.setAttribute("data-theme", next);
        btn.textContent = next === "dark" ? "🌓" : "☀️";
        btn.classList.remove("rotate-anim");
    }, 250);
};

// Musik
const audio = document.getElementById("bg-music");
document.getElementById("musicBtn").onclick = function() {
    if (audio.paused) { audio.play(); this.textContent = "⏸"; }
    else { audio.pause(); this.textContent = "▶"; }
};

// Efek Mengetik
const typing = document.getElementById("typing");
const texts = ["Partner Chandz...", "Ready Bot & Panel"];
let tIdx = 0, cIdx = 0, isDel = false;
function type() {
    const full = texts[tIdx];
    typing.innerHTML = isDel ? full.substring(0, cIdx--) : full.substring(0, cIdx++);
    let speed = isDel ? 50 : 100;
    if (!isDel && cIdx === full.length + 1) { isDel = true; speed = 2000; }
    else if (isDel && cIdx === 0) { isDel = false; tIdx = (tIdx + 1) % texts.length; }
    setTimeout(type, speed);
}
type();

// Proteksi
document.addEventListener('contextmenu', e => e.preventDefault());
