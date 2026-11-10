/* Projects page: data for the Thal Engineering products and personal projects, plus the popups. */
const PROJECTS=[
{
 id:'buildit',title:'Build-IT: Modular Robotics Kit for STEM Education',year:'2024-25',ctx:'NUST Final Year Project',status:'Working prototype',
 tags:['Robotics','Embedded','ML','Mechanical'],
 disciplines:['Electrical Engineering','Embedded Systems','Mechanical Design','Machine Learning'],
 grad:'linear-gradient(135deg,#7f1d1d,#1e1b4b)',
 bg:'assets/Build-It.jpg',
 pics:[],
 video:'assets/Build It.mp4', // plays locally from the assets folder
 videoLabel:'Dashboard Interface',
 summary:'A snap-together robotics kit with a block-coding web app and on-device few-shot object detection, built to make hands-on robotics and ML education affordable and locally available in Pakistan.',
 problem:'STEM kits are expensive and hard to source in Pakistan, and practical machine learning is almost absent from school-level robotics. Build-IT is a modular alternative aimed at students.',
 role:'Designed and built the project end to end: mechanical design (3D-printed modules, snap-fit pin, gripper), embedded firmware, the Blockly web app and backend, and the ML pipeline.',
 mets:[{v:59.2,d:1,u:' Wh',l:'4S Li-ion pack'},{v:1.2,d:1,u:'',l:'FEA safety factor, snap-fit pin'},{v:95.2,d:1,u:'%',l:'Detection precision'}],
 highlights:[
  'Modular PLA building blocks with a custom snap-fit pin, refined through several iterations (press-fit, rotational, magnetic) and analysed in ANSYS FEA.',
  'Power Brick enclosure (129 x 125 x 110 mm, 70 connecting slots) housing a Raspberry Pi 5, ESP32-S3, battery and buck converters.',
  'Sensor and motor blocks (IR, ultrasonic, colour) plus a 2-DOF gripper, all on RJ45 connectors for child-friendly, repeatable plug-in wiring.',
  'Replaced a ROS 2 setup with a lightweight framework because ROS 2 on the Pi added latency to sensor reads (observed, not benchmarked); the ESP32-S3 now runs low-level control as embedded firmware.',
  'Custom C++ library with FreeRTOS tasks that poll IR and ultrasonic sensors in the background and return a stable 5-sample rolling average.',
  'Few-shot object detection: 5 photos per object, no large dataset needed.'],
 steps:[
  ['Block code','Students drag custom Blockly blocks (run motor, read IR, display text, if/loops) in the browser.'],
  ['Convert','A Flask backend parses the Blockly XML in Python and generates Arduino C++ against the Build-IT library.'],
  ['Deploy','The .ino file is sent to the Raspberry Pi over SCP; Arduino CLI on the Pi compiles it and uploads it to the ESP32-S3.'],
  ['Run','The ESP32 drives motors and sensors in real time and signals the Pi over GPIO when a camera capture or ML inference is needed.'],
  ['ML','YOLOv4-Tiny finds the object, MobileNetV2 turns the crop into a 1280-d vector, and cosine similarity against class prototypes names it.']],
 bars:[['Orange cup',100],['Pink cup',100],['Green block',60],['Tang pack',46.7]],barsTitle:'Per-class recall (75 test images, 4 objects)',
 notes:['Snap-fit pin safety factor: 1.2 is PLA yield strength (50 MPa) divided by peak stress (40.7 MPa); ANSYS itself reports a minimum safety factor of 2.11.','Overall on the test set: precision 95.2% (59/62), recall 78.7% (59/75), F1 0.86.','Estimated runtime of about 86 minutes comes from a component power table (about 41 W worst case), not a measured run.','Demonstrated in person to students at a national engineering robotics contest.'],
 doc:'assets/Build-It.pdf',docLabel:'Presentation (PDF)',flowTitle:'From block code to robot',
 flow:['Blockly web app','Flask compiler','Raspberry Pi 5','ESP32-S3','Motors + sensors + ML'],
 links:[['Source code on GitHub','https://github.com/iznsiddiqui/Build-It']]
},
{
 id:'arm',title:'3-DOF Robotic Arm with Wi-Fi Control',year:'2025',ctx:'NUST coursework project',status:'Working prototype',
 tags:['Robotics','Embedded','IoT'],
 disciplines:['Electrical Engineering','Embedded Systems','Robotics & Kinematics'],
 grad:'linear-gradient(135deg,#0f766e,#1e293b)',
 bg:'assets/3 DOF Robot.jfif',
 pics:['assets/dashboard.png'],
 video:'assets/Demonstration of a 3 DOF- Robotic Arm.MOV',   // plays locally from the assets folder
 summary:'A low-cost servo arm controlled from any phone browser, paired with a MATLAB kinematic model of the same arm.',
 problem:'Prototype a functional arm of the kind used in packing and filling lines, using cheap parts, and keep a simulation that mirrors the hardware.',
 role:'Built the ESP32-S3 firmware and browser control app, and the MATLAB rigid-body-tree model. (Team project: my part is stated here; the report lists the full split.)',
 mets:[{v:4,d:0,u:'',l:'Servos (3 joints + gripper)'},{v:14,d:0,u:' cm',l:'Modelled link reach'},{v:2,d:0,u:'',l:'Home presets (hard / soft)'}],
 highlights:[
  'The ESP32-S3 hosts its own Wi-Fi access point and serves a web page with sliders for base, shoulder and elbow, plus gripper buttons. No app install needed.',
  'Hard-home and user-defined soft-home positions so the arm can return to a known pose.',
  'MATLAB Robotics Toolbox model built from Denavit-Hartenberg parameters with interactive joint sliders.',
  'Practical fixes documented in the report: servo jitter, 5 V supply sag and Wi-Fi dropouts.'],
 steps:[
  ['Phone','Open the arm\'s Wi-Fi network and visit its address in a browser.'],
  ['Web UI','Sliders send joint angles to the ESP32 with lightweight HTTP requests.'],
  ['ESP32-S3','Parses the angles and writes them to four SG-90 servos.'],
  ['MATLAB twin','The same arm is modelled with DH parameters to visualise reach and joint limits.']],
 widget:'arm',
 notes:['The report describes the build qualitatively; no accuracy or repeatability figures were measured, so none are claimed here.','The playground above is a simple 2-link side view using the modelled 5 cm and 9 cm links. It is illustrative and not calibrated to the physical arm.'],
 doc:'assets/3 DOF Robotic Arm- Report.pdf',docLabel:'Report (PDF)',flowTitle:'Browser-to-servo control',
 flow:['Phone browser','Wi-Fi access point','ESP32-S3','Servo motors','Arm movement'],
 repo:'', // Add the public repository URL here when ready.
 links:[]
},
{
 id:'hydro',title:'IoT Smart NFT Hydroponic Controller',year:'2023',ctx:'Internship project, Yousuf Dewan Companies',
 tags:['IoT','Embedded'],status:'Design and firmware',
 disciplines:['Electrical Engineering','Embedded Systems','IoT'],
 grad:'linear-gradient(135deg,#166534,#0f172a)',
 bg:'assets/Hydroponics.jfif',
 pics:[],
 video:'',
 summary:'An ESP32 monitoring and control design for a nutrient-film hydroponic lettuce system, with a Blynk dashboard, safety interlocks and local control that keeps working when Wi-Fi drops.',
 problem:'Small hydroponic setups need constant manual checks. A missed low-water or pump failure can stop nutrient delivery and damage the crop.',
 role:'Designed the electronics architecture, wrote the firmware and specified the dashboard and calibration procedures.',
 mets:[{v:8,d:0,u:'',l:'Measured parameters'},{v:5,d:0,u:'',l:'Relay-controlled loads'},{v:20,d:0,u:'',l:'Dashboard datastreams'}],
 highlights:[
  'Reads pH, TDS, water and air temperature, humidity, light, reservoir level and flow from a single ESP32.',
  'Auto mode with a fan hysteresis band, a lighting schedule and a refill pump with a 90 s timeout; manual mode from the Blynk app.',
  'Safety interlocks: pumps never run on a LOW level, refill stops at HIGH, and a flow fault alert fires if the pump runs with no flow.',
  'Local control continues when Wi-Fi or the cloud is unavailable.',
  'Pin map, wiring notes, calibration procedures and failure-mode table documented.'],
 steps:[
  ['Sense','Averaged ADC reads for pH and TDS, 1-Wire water temperature, DHT22, BH1750 and a flow sensor.'],
  ['Decide','AUTO or MANUAL logic with interlocks applied first.'],
  ['Act','Five relays drive circulation, air, light, fan and refill.'],
  ['Report','Telemetry and alerts go to the Blynk dashboard.']],
 notes:['This is a design and firmware project completed during a 2023 internship; the documentation was written up for this portfolio. The full-size growing structure was not built, and sensor values would need calibration before use.','Sample dashboards in the write-up show illustrative values, not measured data.'],
 doc:'assets/IoT-based Hydroponics System.pdf',docLabel:'Report (PDF)',flowTitle:'Sense, decide and actuate',
 flow:['Sensors','ESP32 control','Safety interlocks','5 relays','Blynk dashboard'],
 repo:'', // Add the public repository URL here when ready.
 links:[]
}
];

/* Industry work (Thal Engineering). Display-only cards: heading, one-liner and a background picture (bg). They do not open. */
const INDUSTRY=[
{
 id:'olts',title:'Oil Level & Temperature Sensor (RS485 OLTS)',ctx:'Thal Engineering',year:'2026',status:'In service: 50+ devices',
 tags:['Embedded','Power Distribution'],specs:['STM32','RS485','220 VAC / 5 VDC','IP54'],
 grad:'linear-gradient(135deg,#334155,#1e3a8a)',bg:'assets/RS485.jpg',
 summary:'A sensor that measures transformer oil level and temperature and sends the data to the energy meter over RS485, built for long-distance communication.',
 role:'Firmware and circuit design.',stack:'STM32 microcontroller, RS485 long-distance communication, powered from 220 VAC or 5 VDC.',
 mets:[{v:50,d:0,u:'+',l:'Devices deployed in the field'},{v:54,d:0,u:'',l:'IP rating (IP54)'}],
 verify:['Passed the IEC 61000 EMC tests, including surge and RF immunity, and high-voltage testing.','Passed impulse testing on a 54-rated (IP54) enclosure.','Tests witnessed and certified by PPMC.'],
 outcome:'In normal field use on 50+ devices; sales are ongoing.'
},
{
 id:'apms',title:'APMS: Asset Protection and Management System',ctx:'Thal Engineering',year:'2026',status:'Field trial: 5 units deployed',
 tags:['Embedded','Power Distribution'],specs:['STM32','GSM','220 VAC / 5 VDC','25-200 kVA'],
 grad:'linear-gradient(135deg,#334155,#7c2d12)',bg:'assets/APMS.png',
 summary:'A system for power distribution companies that provides remote control, monitoring and load shedding of distribution transformers from the LT side, plus energy metering including active power, energy and phase-wise current and voltage. It can trip the supply on low or high oil level, high temperature or power parameters, and it trips instantly even without GSM communication.',
 role:'Firmware and circuit design, control wiring and enclosure design.',stack:'STM32 microcontroller with GSM communication; local trip logic that works without GSM.',
 mets:[{v:5,d:0,u:' s',l:'Response time'},{v:5,d:0,u:'',l:'Units deployed in the field'},{v:200,d:0,u:' kVA',l:'Largest transformer size supported'}],
 verify:['Field trial on live networks.'],
 outcome:'5 units deployed, controlling major areas in central and northern Pakistan. Developed for 25, 50, 100 and 200 kVA transformers.'
},
{
 id:'dcrc',title:'DCRC HT: Remote HT-Side Load Shedding',ctx:'Thal Engineering',year:'2026',status:'Field trial, pilot order',
 tags:['Embedded','Power Distribution'],specs:['STM32','GSM','220 VAC / 24 VDC','11 kV switch'],
 grad:'linear-gradient(135deg,#334155,#14532d)',bg:'assets/Dcrc.jpg',
 summary:'Remote load shedding on the HT side by controlling an ABB load break switch on 11 kV lines, with tripping based on parameters such as door opening, oil level, temperature or battery failure. Scheduled load shedding runs 4 times a day independent of GSM.',
 role:'Firmware and circuit design, testing, control wiring, and enclosure design and development.',stack:'STM32 microcontroller with GSM communication; controls an ABB load break switch.',
 mets:[{v:5,d:0,u:' s',l:'Response after fault detection'},{v:4,d:0,u:'',l:'Load-shedding cycles per day, without GSM'},{v:11,d:0,u:' kV',l:'Switched by the load break switch'}],
 verify:['Field trial in progress on live substations and pole-mounted transformers.'],
 outcome:'Initial pilot order of 5 units now in field trial with the customer; mass production is planned after the trial.'
}
];

function embed(u){let m=u.match(/\/d\/([^/]+)/)||u.match(/[?&]id=([^&]+)/);
 if(u.includes('drive.google.com')&&m)return`https://drive.google.com/file/d/${m[1]}/preview`;
 m=u.match(/[?&]v=([^&]+)/)||u.match(/youtu\.be\/([^?]+)/);
 return m?`https://www.youtube.com/embed/${m[1]}`:u}
function vis(o,cls){return `<div class="${cls}" style="background-image:${o.grad}">${o.bg?`<div class="bgb" style="background-image:url('${img(o.bg)}')"></div><img src="${img(o.bg)}" alt="${o.title}" referrerpolicy="no-referrer" onerror="this.previousElementSibling.style.display='none';this.style.display='none'">`:''}</div>`}
function vid(u,t){return /\.(mp4|mov|webm)$/i.test(u)?`<video controls playsinline preload="metadata" src="${loc(u)}" title="${t}"></video>`:`<iframe src="${embed(u)}" allow="autoplay;fullscreen" allowfullscreen loading="lazy" title="${t}"></iframe>`}
function proofHTML(p){const src=p.repo||(p.links&&p.links[0]?p.links[0][1]:'');
 const it=[['Source code',src],[p.docLabel||'Report',p.doc||''],['Video',p.video||''],['Photos',((p.pics&&p.pics.length)||p.bg)?'#':''],['Measured data',p.bars?'#':'']];
 return `<h4>Proof</h4><div class="proof">${it.map(([k,u])=>u?(u==='#'?`<span class="pf ok">&#10003; ${k}</span>`:`<a class="pf ok" href="${loc(u)}" target="_blank" rel="noopener">&#10003; ${k}</a>`):`<span class="pf no">${k}: not public</span>`).join('')}</div>`}
function bgStyle(o){return o.bg?`background-image:linear-gradient(rgba(5,9,26,.35),rgba(5,9,26,.55)),url('${img(o.bg)}')`:`background-image:${o.grad}`}
function pics(arr,label){const valid=(arr||[]).filter(Boolean);if(!valid.length)return'';
 const a=valid.map((u,i)=>`<img src="${img(u)}" alt="${label} picture ${i+1}" loading="lazy">`).join('');
 return `<h4>Pictures</h4><div class="gal">${a}</div>`}
function num(m){return`<span class="n" data-to="${m.v}" data-d="${m.d}" data-u="${m.u}">0${m.u}</span>`}
function flowMarkup(p){if(!p.flow||!p.flow.length)return'';
 const nodes=p.flow.map((name,i)=>`${i?'<span class="flow-arrow" aria-hidden="true">›</span>':''}<div class="flow-node" data-flow-node="${i}">${name}</div>`).join('');
 return `<div class="flow-visual"><div class="flow-caption"><strong>${p.flowTitle||'System workflow'}</strong><span>Animated sequence</span></div><div class="pipeline">${nodes}</div><div class="flow-status" aria-live="polite"></div></div>`}
function startFlowAnimation(d,p){const box=d.querySelector('.flow-visual');if(!box)return;
 const nodes=[...box.querySelectorAll('[data-flow-node]')],status=box.querySelector('.flow-status');let i=0;
 const tick=()=>{nodes.forEach((n,j)=>n.classList.toggle('active',j===i));if(status)status.textContent=`Active stage: ${p.flow[i]}`;i=(i+1)%nodes.length};
 tick();d._flowTimer=setInterval(tick,950)}
function projectLinks(p){const links=[...(p.links||[])];if(p.repo)links.push(['GitHub repository',p.repo]);
 const html=links.map(l=>`<a class="btn" href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join('');
 const slot=(SHOW&&!p.repo&&['arm','hydro'].includes(p.id))?`<div class="repo-slot">GitHub repository link reserved — add the URL in this project’s <code>repo</code> field.</div>`:'';
 return html||slot?`<h4>Links</h4>${html}${slot}`:''}
function hydroDiagram(){return `<div class="hydro-visual"><div class="flow-caption"><strong>Nutrient-film circulation loop</strong><span>Conceptual system diagram</span></div><div class="hydro-scroll"><svg viewBox="0 0 720 205" role="img" aria-label="Hydroponic reservoir, pump, growing channel, sensors and ESP32 controller">
 <defs><linearGradient id="hTank" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#254b79"/><stop offset="1" stop-color="#14294a"/></linearGradient></defs>
 <rect x="22" y="112" width="126" height="70" rx="9" fill="url(#hTank)" stroke="#7fa8f0"/><text x="85" y="137" fill="#eef1fa" text-anchor="middle" font-size="13">Reservoir</text><text x="85" y="157" fill="#a3afcf" text-anchor="middle" font-size="11">Level sensor</text>
 <circle cx="180" cy="146" r="23" fill="#253b6c" stroke="#7fa8f0"/><text x="180" y="150" fill="#eef1fa" text-anchor="middle" font-size="11">Pump</text>
 <rect x="244" y="48" width="230" height="62" rx="10" fill="#183456" stroke="#54b8e7"/><text x="359" y="73" fill="#eef1fa" text-anchor="middle" font-size="14">NFT growing channel</text><text x="359" y="92" fill="#a3afcf" text-anchor="middle" font-size="11">Water + nutrient solution</text>
 <rect x="516" y="40" width="88" height="78" rx="9" fill="#25345b" stroke="#f2c94c"/><text x="560" y="70" fill="#eef1fa" text-anchor="middle" font-size="13">ESP32</text><text x="560" y="89" fill="#a3afcf" text-anchor="middle" font-size="10">Logic + relays</text>
 <rect x="630" y="40" width="76" height="78" rx="9" fill="#26345f" stroke="#7fa8f0"/><text x="668" y="70" fill="#eef1fa" text-anchor="middle" font-size="12">Blynk</text><text x="668" y="89" fill="#a3afcf" text-anchor="middle" font-size="10">Dashboard</text>
 <path class="hydro-water" d="M148 146 H157 M203 146 H220 V79 H244 M474 79 H516 M604 79 H630"/><path class="hydro-water" d="M359 110 V165 H85 V182" opacity=".7"/><circle class="hydro-dot" cx="0" cy="0" r="4"><animateMotion dur="5s" repeatCount="indefinite" path="M148 146 H157 M203 146 H220 V79 H244 M474 79 H516"/></circle>
 <text x="350" y="194" fill="#a3afcf" text-anchor="middle" font-size="10">Sensors feed local control; interlocks govern the relay outputs</text>
 </svg></div></div>`}


/* ===== cards ===== */
const cats=['All',...new Set(PROJECTS.flatMap(p=>p.tags))];let cur='All';
function card(p,ind){const click=!ind||p.role;
 const mets=`<div class="mets">${p.mets.map(m=>`<div class="met"><b>${num(m)}</b><span>${m.l}</span></div>`).join('')}</div>`;
 return`<article id="p-${p.id}" class="card rv ${click?'':'static'}" ${click?`data-id="${p.id}" data-k="${ind?'i':'p'}" tabindex="0" role="button" aria-label="Open details: ${p.title}"`:''}>
 ${vis(p,'vis')}
 <div class="in"><div class="meta">${p.ctx} · ${p.year}</div><h3>${p.title}</h3>${p.status?`<div class="status">${p.status}</div>`:''}
 <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}${(p.specs||[]).map(t=>`<span class="tag sp">${t}</span>`).join('')}</div>
 <p>${p.summary}</p>${mets}</div></article>`}
function openIndustry(id){const d=$('#dlg'),p=INDUSTRY.find(x=>x.id==id);if(!p)return;
 const sec=(h,t)=>t?`<h4>${h}</h4><p>${t}</p>`:'';
 const mail=`mailto:${CONFIG.email}?subject=${encodeURIComponent('Details request: '+p.title)}&body=${encodeURIComponent('Hello Izn,\n\nI would like more details about '+p.title+'.\n')}`;
 d.innerHTML=`<div class="dh"><h3>${p.title}</h3><button class="x" aria-label="Close">&times;</button></div><div class="db dialog-content">${vis(p,'banner')}
 <p class="disc">${p.ctx} · ${p.year} · <b>${p.status}</b></p><p>${p.summary}</p>
 ${sec('My contribution',p.role)}${sec('Technology',p.stack)}
 <h4>Key numbers</h4><div class="mets">${p.mets.map(m=>`<div class="met"><b>${num(m)}</b><span>${m.l}</span></div>`).join('')}</div>
 <h4>Verification</h4><ul>${p.verify.map(v=>`<li>${v}</li>`).join('')}</ul>
 ${sec('Outcome',p.outcome)}<h4>Proof and access</h4><p>Supporting material is shared on request, subject to my employer's approval.</p>
 <a class="btn p" href="${mail}">Request details by email</a></div>`;
 d.showModal();counters(d);d.querySelector('.x').onclick=()=>d.close()}
function render(){
 $('#chips').innerHTML=cats.map(c=>`<button class="chip ${c==cur?'on':''}" data-c="${c}">${c}</button>`).join('');
 $('#grid').innerHTML=PROJECTS.filter(p=>cur=='All'||p.tags.includes(cur)).map(p=>card(p,false)).join('');
 $('#igrid').innerHTML=INDUSTRY.map(p=>card(p,true)).join('');
 observe();
}
$('#chips').onclick=e=>{if(e.target.dataset.c){cur=e.target.dataset.c;render()}};
function pick(e){const c=e.target.closest('.card[data-id]');if(!c)return;c.dataset.k==='i'?openIndustry(c.dataset.id):openProject(c.dataset.id)}
$('#grid').onclick=pick;$('#igrid').onclick=pick;
$('#grid').onkeydown=$('#igrid').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick(e)}};

function buildRobotWidget(){return `<div class="bc" id="build-coder">
 <div class="bch"><span>Build-IT Robot Lab</span><small>Block code · simulated movement</small></div>
 <div class="bcb">
  <div class="bc-side">
   <label for="bc-steps">Steps / quarter-turns per block</label>
   <select id="bc-steps"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>
   <div class="pal">
    <button data-add="forward">Forward</button><button data-add="reverse">Reverse</button>
    <button data-add="left">Turn left</button><button data-add="right">Turn right</button>
   </div>
   <p class="bc-hint">Add movement blocks to build a sequence. Forward and reverse move one grid cell per step. Each turn step rotates the robot by 90°.</p>
  </div>
  <div class="bc-stage">
   <canvas id="bc-canvas" width="500" height="300" aria-label="Robot moving on a grid"></canvas>
   <div class="bcbtn"><button id="bc-make">Make Code</button><button id="bc-run" class="run">Run Robot</button><button id="bc-clear" class="clear">Clear</button></div>
   <div class="bc-program" id="bc-program"><div class="bc-empty">No blocks yet. Add a movement block.</div></div>
   <div class="bc-status" id="bc-status" aria-live="polite">Ready to program.</div>
   <pre class="bc-source" id="bc-source" hidden></pre>
  </div>
 </div>
</div>`}
function openProject(id){const d=$('#dlg'),p=PROJECTS.find(x=>x.id==id);if(!p)return;
 const head=`<div class="dh"><h3>${p.title}</h3><button class="x" aria-label="Close">&times;</button></div>`;
 const hydro=p.id==='hydro';
 let body=`${vis(p,'banner')}
  <p class="disc">${p.ctx} · ${p.year}</p>
  <p class="disc"><b>Disciplines:</b> ${p.disciplines.join(', ')}</p>${proofHTML(p)}`;
 if(hydro){
  body+=`<p>${p.summary}</p><h4>My role</h4><p>${p.role}</p>
   <h4>Key numbers</h4><div class="mets">${p.mets.map(m=>`<div class="met"><b>${num(m)}</b><span>${m.l}</span></div>`).join('')}</div>
   ${hydroDiagram()}${flowMarkup(p)}
   <h4>How it works</h4><div class="steps">${p.steps.map((s,i)=>`<button class="step ${i?'':'on'}" data-i="${i}">${i+1}. ${s[0]}</button>`).join('')}</div><div class="sd">${p.steps[0][1]}</div>
   <div class="note">${p.notes.join('<br><br>')}</div>${projectLinks(p)}`;
 }else{
  body+=`<h4>Problem</h4><p>${p.problem}</p>
   <h4>My role</h4><p>${p.role}</p>
   <h4>Key numbers</h4><div class="mets">${p.mets.map(m=>`<div class="met"><b>${num(m)}</b><span>${m.l}</span></div>`).join('')}</div>
   ${p.video?`<h4>${p.videoLabel||'Demo'}</h4>${vid(p.video,p.videoLabel||p.title)}`:''}
   ${SHOW&&p.id==='buildit'&&!p.video?`<h4>Dashboard Interface</h4><div class="video-placeholder">Dashboard Interface video slot. Add its Google Drive or YouTube URL to the Build-IT <code>video</code> field in the PROJECTS section.</div>`:''}
   ${flowMarkup(p)}
   ${p.id==='buildit'?`<h4>Try block coding</h4>${buildRobotWidget()}`:''}
   ${p.widget=='arm'?`<h4>Try the geometry</h4><div class="pg"><canvas id="arm" width="380" height="240"></canvas><div>
    <label>Shoulder <span id="v1"></span></label><input id="s1" type="range" min="0" max="180" value="60">
    <label>Elbow <span id="v2"></span></label><input id="s2" type="range" min="0" max="180" value="110">
    <p id="ee" style="color:var(--a);font-size:15px"></p></div></div>`:''}
   ${pics(p.pics,p.title)}
   <h4>Highlights</h4><ul>${p.highlights.map(h=>`<li>${h}</li>`).join('')}</ul>
   <h4>How it works <span style="text-transform:none;letter-spacing:0;color:var(--muted)">(click a step)</span></h4>
   <div class="steps">${p.steps.map((s,i)=>`<button class="step ${i?'':'on'}" data-i="${i}">${i+1}. ${s[0]}</button>`).join('')}</div><div class="sd">${p.steps[0][1]}</div>
   ${p.bars?`<h4>${p.barsTitle}</h4><div class="bars">${p.bars.map(b=>`<div>${b[0]} <span style="float:right">${b[1]}%</span><div class="bar"><i data-w="${b[1]}"></i></div></div>`).join('')}</div>`:''}
   <h4>Good to know</h4><div class="note">${p.notes.join('<br><br>')}</div>
   ${projectLinks(p)}`;
 }
 d.innerHTML=head+`<div class="db dialog-content">${body}</div>`;
 d.showModal();counters(d);startFlowAnimation(d,p);
 setTimeout(()=>d.querySelectorAll('.bar i').forEach(i=>i.style.width=i.dataset.w+'%'),60);
 d.querySelector('.x').onclick=()=>d.close();
 const stepWrap=d.querySelector('.steps');if(stepWrap)stepWrap.onclick=e=>{const b=e.target.closest('.step');if(!b)return;
  d.querySelectorAll('.step').forEach(s=>s.classList.remove('on'));b.classList.add('on');d.querySelector('.sd').textContent=p.steps[+b.dataset.i][1]};
 if(p.widget=='arm')armWidget(d);
 if(p.id==='buildit')initBuildRobotWidget(d);
}
$('#dlg').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
$('#dlg').addEventListener('close',()=>{if($('#dlg')._flowTimer)clearInterval($('#dlg')._flowTimer);$('#dlg')._flowTimer=null;$('#dlg').innerHTML=''});

function initBuildRobotWidget(d){
 const canvas=d.querySelector('#bc-canvas'),ctx=canvas.getContext('2d'),palette=d.querySelector('.pal'),steps=d.querySelector('#bc-steps');
 const programEl=d.querySelector('#bc-program'),status=d.querySelector('#bc-status'),source=d.querySelector('#bc-source');
 const make=d.querySelector('#bc-make'),run=d.querySelector('#bc-run'),clear=d.querySelector('#bc-clear');
 const labels={forward:'Move forward',reverse:'Move reverse',left:'Turn left',right:'Turn right'};
 let program=[],running=false,robot={x:4,y:3,angle:-Math.PI/2};
 const cols=10,rows=6,cell=50;
 function draw(state){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#0b1330';ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle='#25335f';ctx.lineWidth=1;for(let x=0;x<=cols;x++){ctx.beginPath();ctx.moveTo(x*cell,0);ctx.lineTo(x*cell,canvas.height);ctx.stroke()}for(let y=0;y<=rows;y++){ctx.beginPath();ctx.moveTo(0,y*cell);ctx.lineTo(canvas.width,y*cell);ctx.stroke()}
  const cx=(state.x+.5)*cell,cy=(state.y+.5)*cell;ctx.save();ctx.translate(cx,cy);ctx.rotate(state.angle);
  ctx.fillStyle='#f2c94c';ctx.strokeStyle='#fff1b8';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,-17);ctx.lineTo(13,14);ctx.lineTo(0,8);ctx.lineTo(-13,14);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='#0b1330';ctx.beginPath();ctx.arc(0,2,3,0,Math.PI*2);ctx.fill();ctx.restore();
 }
 function blockLabel(b){return `${labels[b.action]} · ${b.steps}${b.action==='left'||b.action==='right'?' × 90°':' grid step'+(b.steps===1?'':'s')}`}
 function renderProgram(){programEl.innerHTML=program.length?program.map((b,i)=>`<div class="bc-item"><span>${i+1}. ${blockLabel(b)}</span><button type="button" data-remove="${i}" aria-label="Remove block ${i+1}">×</button></div>`).join(''):'<div class="bc-empty">No blocks yet. Add a movement block.</div>';
  programEl.querySelectorAll('[data-remove]').forEach(btn=>btn.onclick=()=>{if(running)return;program.splice(+btn.dataset.remove,1);renderProgram();source.hidden=true});
 }
 function setBusy(v){running=v;[...palette.querySelectorAll('button'),make,run,clear,steps].forEach(el=>el.disabled=v)}
 function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms))}
 function animate(from,to,duration=220){return new Promise(resolve=>{const t0=performance.now();function frame(now){const k=Math.min(1,(now-t0)/duration),ease=1-Math.pow(1-k,3);draw({x:from.x+(to.x-from.x)*ease,y:from.y+(to.y-from.y)*ease,angle:from.angle+(to.angle-from.angle)*ease});if(k<1)requestAnimationFrame(frame);else resolve()}requestAnimationFrame(frame)})}
 function sourceCode(){return program.map(b=>{const fn={forward:'moveForward',reverse:'moveReverse',left:'turnLeft',right:'turnRight'}[b.action];return `${fn}(${b.steps});`}).join('\n')}
 palette.onclick=e=>{const b=e.target.closest('[data-add]');if(!b||running)return;program.push({action:b.dataset.add,steps:Math.max(1,Math.min(5,+steps.value||1))});renderProgram();source.hidden=true;status.textContent=`Added ${blockLabel(program[program.length-1])}.`};
 make.onclick=()=>{if(running)return;if(!program.length){status.textContent='Add at least one block before making code.';return}source.textContent=sourceCode();source.hidden=false;status.textContent='Program generated from the blocks.'};
 clear.onclick=()=>{if(running)return;program=[];robot={x:4,y:3,angle:-Math.PI/2};draw(robot);renderProgram();source.hidden=true;status.textContent='Program cleared. Robot reset.'};
 run.onclick=async()=>{if(running||!program.length){if(!program.length)status.textContent='Add movement blocks before running.';return}setBusy(true);status.textContent='Running program…';robot={x:4,y:3,angle:-Math.PI/2};draw(robot);
  try{for(let bi=0;bi<program.length;bi++){const b=program[bi];status.textContent=`Block ${bi+1}/${program.length}: ${blockLabel(b)}`;
   for(let n=0;n<b.steps;n++){if(!d.open)throw new Error('boundary');
    let target={...robot};
    if(b.action==='forward'||b.action==='reverse'){const sign=b.action==='forward'?1:-1;target.x+=Math.round(Math.cos(robot.angle))*sign;target.y+=Math.round(Math.sin(robot.angle))*sign;
     if(target.x<0||target.x>=cols||target.y<0||target.y>=rows){status.textContent='Boundary reached. Program stopped safely.';throw new Error('boundary')}
    }else{target.angle+=b.action==='left'?-Math.PI/2:Math.PI/2}
    await animate(robot,target,230);robot=target;await sleep(70);
   }
  }
  status.textContent='Program complete.';
  }catch(err){if(err.message!=='boundary')status.textContent='Animation stopped due to an error.'}
  finally{setBusy(false)}
 };
 draw(robot);renderProgram();
}

function armWidget(d){const c=d.querySelector('#arm'),x=c.getContext('2d'),s1=d.querySelector('#s1'),s2=d.querySelector('#s2'),S=12,ox=70,oy=210,L1=5,L2=9;
 function draw(){const a=+s1.value,b=+s2.value;d.querySelector('#v1').textContent=a+'°';d.querySelector('#v2').textContent=b+'°';
  const r=a*Math.PI/180,r2=(a+b-90)*Math.PI/180,x1=L1*Math.cos(r),y1=L1*Math.sin(r),x2=x1+L2*Math.cos(r2),y2=y1+L2*Math.sin(r2);
  x.clearRect(0,0,380,240);x.strokeStyle='#25335f';x.setLineDash([4,4]);x.beginPath();x.arc(ox,oy,(L1+L2)*S,Math.PI,2*Math.PI);x.stroke();x.setLineDash([]);
  x.beginPath();x.moveTo(10,oy);x.lineTo(370,oy);x.stroke();
  const P=(u,v)=>[ox+u*S,oy-v*S];x.lineCap='round';x.lineWidth=8;x.strokeStyle='#f2c94c';x.beginPath();x.moveTo(ox,oy);x.lineTo(...P(x1,y1));x.stroke();
  x.strokeStyle='#7fa8f0';x.beginPath();x.moveTo(...P(x1,y1));x.lineTo(...P(x2,y2));x.stroke();
  [[0,0],[x1,y1],[x2,y2]].forEach(q=>{x.fillStyle='#eef1fa';x.beginPath();x.arc(...P(...q),5,0,7);x.fill()});
  d.querySelector('#ee').textContent=`End point: ${x2.toFixed(1)} cm out, ${y2.toFixed(1)} cm up (max reach ${L1+L2} cm)`}
 s1.oninput=s2.oninput=draw;draw()}


render();
/* links from the Experience page (projects.html#p-olts etc.) scroll to the card and open it */
(function(){
 function go(){const id=location.hash.replace('#','').replace(/^p-/,'');if(!id)return;
  if(cur!=='All'){cur='All';render()}
  const el=document.getElementById('p-'+id);if(!el)return;
  el.classList.add('in');el.scrollIntoView({block:'center'});el.classList.add('flash');
  setTimeout(()=>{(el.dataset.k==='i'?openIndustry:openProject)(id)},500)}
 addEventListener('hashchange',go);go()})();
