
/* Shared: config, theme switch (sunrise/sunset), call + WhatsApp popup, reveal on scroll */
const CONFIG={email:'iznsiddiqui03@gmail.com',phone:'+92 336 6846708',wa:'923366846708',showEmptySlots:false};
const $=s=>document.querySelector(s);
const SHOW=CONFIG.showEmptySlots;

function loc(u){return /^(https?:|mailto:|tel:|data:|#)/.test(u)?u:encodeURI(u)}

function img(u){
  if(!u)return'';
  const m=u.match(/drive\.google\.com.*\/d\/([^/?]+)/)||u.match(/drive\.google\.com.*[?&]id=([^&]+)/);
  return m?`https://drive.google.com/thumbnail?id=${m[1]}&sz=w1600`:loc(u)
}

function counters(root){
  root.querySelectorAll('.n').forEach(e=>{
    const to=+e.dataset.to,d=+e.dataset.d,u=e.dataset.u,t0=performance.now();
    (function f(t){
      const p=Math.min(1,(t-t0)/900);
      e.textContent=(to*(1-Math.pow(1-p,3))).toFixed(d)+u;
      if(p<1)requestAnimationFrame(f)
    })(t0)
  })
}

let io;
function observe(){
  io&&io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      if(e.target.classList.contains('card'))counters(e.target);
      io.unobserve(e.target)
    }
  }),{threshold:.15});
  document.querySelectorAll('.rv').forEach(n=>io.observe(n))
}

/* Light = sunrise; dark = sunset. CSS owns the scene and popup palette. */
(function(){
  const root=document.documentElement,btn=$('#themeBtn'),meta=document.querySelector('meta[name="theme-color"]');

  function apply(theme){
    const dark=theme==='dark';
    root.setAttribute('data-theme',dark?'dark':'light');
    if(meta)meta.setAttribute('content',dark?'#0b1220':'#f2eee7');
    if(btn){
      btn.setAttribute('aria-label',dark?'Switch to sunrise':'Switch to sunset');
      btn.title=dark?'Switch to sunrise':'Switch to sunset';
    }
  }

  let initial=root.getAttribute('data-theme')==='dark'?'dark':'light';
  try{
    const saved=localStorage.getItem('theme');
    if(saved==='dark'||saved==='light')initial=saved;
  }catch(e){}

  apply(initial);

  if(btn)btn.addEventListener('click',()=>{
    const next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    apply(next);
    try{localStorage.setItem('theme',next)}catch(e){}
  });
})();

/* Call / WhatsApp popup: any element with data-phone opens it */
(function(){
  const tel='tel:'+CONFIG.phone.replace(/\s/g,'');
  const d=document.createElement('dialog');
  d.id='phoneDlg';
  d.className='mini';

  d.innerHTML=`<div class="dh"><h3>Get in touch</h3><button class="x" aria-label="Close">&times;</button></div>
  <div class="db"><p class="pnum">${CONFIG.phone}</p>
  <a class="btn p big" href="${tel}">Call</a>
  <a class="btn big wa" href="https://wa.me/${CONFIG.wa}" target="_blank" rel="noopener">WhatsApp</a></div>`;

  document.body.appendChild(d);
  d.querySelector('.x').onclick=()=>d.close();
  d.addEventListener('click',e=>{if(e.target===d)d.close()});

  document.addEventListener('click',e=>{
    const t=e.target.closest('[data-phone]');
    if(t){
      e.preventDefault();
      d.showModal()
    }
  });
})();

/* Role rotator (home page) */
(function(){
  const e=$('#rot');
  if(!e)return;
  const W=['power-distribution monitoring systems','embedded firmware','industrial IoT devices','transformer protection and control','robots that snap together'];
  let wi=0;
  setInterval(()=>{
    e.style.opacity=0;
    setTimeout(()=>{
      wi=(wi+1)%W.length;
      e.textContent=W[wi];
      e.style.opacity=1
    },300)
  },2600)
})();

const yr=$('#yr');
if(yr)yr.textContent=new Date().getFullYear();

observe();
