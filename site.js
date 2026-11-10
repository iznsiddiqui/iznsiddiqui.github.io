/* Shared: config, theme switch (sunrise/sunset), call + WhatsApp popup, reveal on scroll */
const CONFIG={email:'iznsiddiqui03@gmail.com',phone:'+92 336 6846708',wa:'923366846708',showEmptySlots:false};
const $=s=>document.querySelector(s);
const SHOW=CONFIG.showEmptySlots;
function loc(u){return /^(https?:|mailto:|tel:|data:|#)/.test(u)?u:encodeURI(u)}
function img(u){if(!u)return'';const m=u.match(/drive\.google\.com.*\/d\/([^/?]+)/)||u.match(/drive\.google\.com.*[?&]id=([^&]+)/);
 return m?`https://drive.google.com/thumbnail?id=${m[1]}&sz=w1600`:loc(u)}
function counters(root){root.querySelectorAll('.n').forEach(e=>{const to=+e.dataset.to,d=+e.dataset.d,u=e.dataset.u,t0=performance.now();
 (function f(t){const p=Math.min(1,(t-t0)/900);e.textContent=(to*(1-Math.pow(1-p,3))).toFixed(d)+u;if(p<1)requestAnimationFrame(f)})(t0)})}
let io;function observe(){io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.classList.contains('card'))counters(e.target);io.unobserve(e.target)}}),{threshold:.15});
 document.querySelectorAll('.rv').forEach(n=>io.observe(n))}

/* theme: light = sunrise, dark = sunset. The sun glides because CSS transitions its position. */
(function(){
 const root=document.documentElement,btn=$('#themeBtn');
 function label(){const dark=root.getAttribute('data-theme')==='dark';
  if(btn){btn.setAttribute('aria-label',dark?'Switch to sunrise':'Switch to sunset');btn.title=dark?'Switch to sunrise':'Switch to sunset'}}
 if(btn)btn.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';
  root.setAttribute('data-theme',next);try{localStorage.setItem('theme',next)}catch(e){}label()});
 label();
})();

/* call / WhatsApp popup: any element with data-phone opens it */
(function(){
 const tel='tel:'+CONFIG.phone.replace(/\s/g,'');
 const d=document.createElement('dialog');d.id='phoneDlg';d.className='mini';
 d.innerHTML=`<div class="dh"><h3>Get in touch</h3><button class="x" aria-label="Close">&times;</button></div>
 <div class="db"><p class="pnum">${CONFIG.phone}</p>
 <a class="btn p big" href="${tel}"><svg class="i " viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Call</a>
 <a class="btn big wa" href="https://wa.me/${CONFIG.wa}" target="_blank" rel="noopener"><svg class="i " viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> WhatsApp</a></div>`;
 document.body.appendChild(d);
 d.querySelector('.x').onclick=()=>d.close();
 d.addEventListener('click',e=>{if(e.target===d)d.close()});
 document.addEventListener('click',e=>{const t=e.target.closest('[data-phone]');if(t){e.preventDefault();d.showModal()}});
})();

/* role rotator (home page) */
(function(){const e=$('#rot');if(!e)return;
 const W=['power-distribution monitoring systems','embedded firmware','industrial IoT devices','transformer protection and control','robots that snap together'];let wi=0;
 setInterval(()=>{e.style.opacity=0;setTimeout(()=>{wi=(wi+1)%W.length;e.textContent=W[wi];e.style.opacity=1},300)},2600)})();

const yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();
observe();
