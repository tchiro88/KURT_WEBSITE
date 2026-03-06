export default {
  fetch() {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>deadband.io — coming soon</title>
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Barlow:wght@300;400;600;900&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0a0a0a;--steel:#1c1c1c;--amber:#e8a020;--amber-dim:#7a5010;--green:#27ae60;--text:#c8c8c0;--dim:#505048;--mono:'Share Tech Mono',monospace;--sans:'Barlow',sans-serif}
html,body{height:100%;background:var(--bg);color:var(--text);font-family:var(--sans);overflow:hidden}
body::before{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px);pointer-events:none;z-index:100}
.container{display:grid;grid-template-rows:auto 1fr auto;height:100vh;padding:24px;max-width:1200px;margin:0 auto}
.topbar{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #222;padding-bottom:16px;animation:fadeIn .6s ease both}
.status-row{display:flex;align-items:center;gap:20px;font-family:var(--mono);font-size:11px;color:var(--dim)}
.status-dot{display:flex;align-items:center;gap:6px}
.dot{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 6px var(--green);animation:blink 2.4s ease-in-out infinite}
.dot.amber{background:var(--amber);box-shadow:0 0 6px var(--amber);animation-delay:.8s}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.sys-id{font-family:var(--mono);font-size:11px;color:var(--dim);letter-spacing:.1em}
.main{display:flex;flex-direction:column;justify-content:center;padding:40px 0;animation:fadeUp .8s ease .2s both}
.tag{font-family:var(--mono);font-size:11px;color:var(--amber);letter-spacing:.2em;text-transform:uppercase;margin-bottom:28px;display:flex;align-items:center;gap:10px}
.tag::before{content:'';display:block;width:28px;height:1px;background:var(--amber)}
.wordmark{font-family:var(--sans);font-weight:900;font-size:clamp(52px,10vw,120px);line-height:.9;letter-spacing:-.03em;color:#fff}
.wordmark span{color:var(--amber)}
.waveform{margin:36px 0 32px;height:48px}
.waveform svg{width:100%;max-width:480px;height:48px;overflow:visible}
.wave-path{stroke:var(--amber);stroke-width:1.5;fill:none;stroke-dasharray:600;stroke-dashoffset:600;animation:drawLine 2s ease .6s forwards}
.wave-path-dim{stroke:var(--amber-dim);stroke-width:1;fill:none;opacity:.4}
@keyframes drawLine{to{stroke-dashoffset:0}}
.descriptor{font-size:clamp(15px,2vw,19px);font-weight:300;color:var(--text);line-height:1.6;max-width:540px;margin-bottom:48px;opacity:0;animation:fadeIn .8s ease 1.2s forwards}
.descriptor strong{color:#fff;font-weight:600}
.notify{display:flex;max-width:420px;opacity:0;animation:fadeIn .8s ease 1.5s forwards}
.notify input{flex:1;background:var(--steel);border:1px solid #2a2a2a;border-right:none;color:var(--text);font-family:var(--mono);font-size:13px;padding:12px 16px;outline:none;transition:border-color .2s}
.notify input::placeholder{color:var(--dim)}
.notify input:focus{border-color:var(--amber-dim)}
.notify button{background:var(--amber);border:1px solid var(--amber);color:#000;font-family:var(--sans);font-weight:600;font-size:12px;letter-spacing:.1em;text-transform:uppercase;padding:12px 20px;cursor:pointer;white-space:nowrap}
.notify-note{margin-top:10px;font-family:var(--mono);font-size:10px;color:var(--dim);opacity:0;animation:fadeIn .8s ease 1.8s forwards}
.bottombar{border-top:1px solid #1a1a1a;padding-top:16px;display:flex;align-items:center;justify-content:space-between;animation:fadeIn .6s ease .4s both}
.metrics{display:flex;gap:32px}
.metric{display:flex;flex-direction:column;gap:2px}
.metric-label{font-family:var(--mono);font-size:9px;color:var(--dim);letter-spacing:.15em;text-transform:uppercase}
.metric-value{font-family:var(--mono);font-size:14px;color:var(--amber)}
.domain-tag{font-family:var(--mono);font-size:11px;color:var(--dim)}
.bracket-tl,.bracket-br{position:fixed;width:40px;height:40px;pointer-events:none;opacity:.25}
.bracket-tl{top:16px;left:16px;border-top:1px solid var(--amber);border-left:1px solid var(--amber)}
.bracket-br{bottom:16px;right:16px;border-bottom:1px solid var(--amber);border-right:1px solid var(--amber)}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:600px){.container{padding:16px}.metrics{gap:16px}.notify{max-width:100%}}
</style>
</head>
<body>
<div class="bracket-tl"></div>
<div class="bracket-br"></div>
<div class="container">
  <div class="topbar">
    <div class="status-row">
      <div class="status-dot"><div class="dot"></div><span>SYSTEM NOMINAL</span></div>
      <div class="status-dot"><div class="dot amber"></div><span>INITIALIZING</span></div>
    </div>
    <div class="sys-id">DB-001 // REV 0.0.1</div>
  </div>
  <div class="main">
    <div class="tag">Automation · Industrial IoT · Robotics</div>
    <div class="wordmark">dead<span>band</span><br>.io</div>
    <div class="waveform">
      <svg viewBox="0 0 480 48" preserveAspectRatio="none">
        <polyline class="wave-path-dim" points="0,24 40,24 40,8 80,8 80,24 120,24 120,40 160,40 160,24 200,24 200,8 240,8 240,24 280,24 280,40 320,40 320,24 360,24 360,8 400,8 400,24 480,24"/>
        <polyline class="wave-path" points="0,24 40,24 40,8 80,8 80,24 120,24 120,40 160,40 160,24 200,24 200,8 240,8 240,24 280,24 280,40 320,40 320,24 360,24 360,8 400,8 400,24 480,24"/>
      </svg>
    </div>
    <p class="descriptor">Precision control systems for <strong>industrial automation</strong>, autonomous vehicles, and high-speed process control. Operating where tolerance is measured in microseconds.</p>
    <div class="notify">
      <input type="email" placeholder="your@email.com" id="emailInput"/>
      <button onclick="handleNotify()">NOTIFY ME</button>
    </div>
    <div class="notify-note" id="notifyNote">// early access · no spam · unsubscribe anytime</div>
  </div>
  <div class="bottombar">
    <div class="metrics">
      <div class="metric"><div class="metric-label">Status</div><div class="metric-value">IN BUILD</div></div>
      <div class="metric"><div class="metric-label">Signal</div><div class="metric-value" id="signalVal">—</div></div>
      <div class="metric"><div class="metric-label">Uptime</div><div class="metric-value" id="uptimeVal">00:00:00</div></div>
    </div>
    <div class="domain-tag">deadband.io</div>
  </div>
</div>
<script>
const start=Date.now();
function updateUptime(){const s=Math.floor((Date.now()-start)/1000);const h=String(Math.floor(s/3600)).padStart(2,'0');const m=String(Math.floor((s%3600)/60)).padStart(2,'0');const sc=String(s%60).padStart(2,'0');document.getElementById('uptimeVal').textContent=h+':'+m+':'+sc}
setInterval(updateUptime,1000);
function updateSignal(){document.getElementById('signalVal').textContent=(Math.random()*.4+99.6).toFixed(2)+'%'}
updateSignal();setInterval(updateSignal,2800);
function handleNotify(){const i=document.getElementById('emailInput');const n=document.getElementById('notifyNote');if(i.value&&i.value.includes('@')){n.textContent="// registered — we'll be in touch";n.style.color='#27ae60';n.style.opacity='1';i.value='';i.placeholder='registered ✓';i.disabled=true}else{i.style.borderColor='#c0392b';setTimeout(()=>i.style.borderColor='',1000)}}
document.getElementById('emailInput').addEventListener('keydown',e=>{if(e.key==='Enter')handleNotify()});
</script>
</body>
</html>`;
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  }
};
