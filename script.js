(function(){
"use strict";
var root=document.documentElement; root.classList.add("js");
var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- i18n ---------- */
var AR={
skip:"تخطَّ إلى المحتوى",brandName:"أوسان",brandSub:"النهمي",
navAbout:"نبذة",navExp:"الخبرة",navProjects:"المشاريع",navCerts:"الشهادات",navEdu:"التعليم",navSkills:"المهارات",navContact:"تواصل",
available:"متاح لفرص عمل جديدة",hello:"مرحباً، أنا",firstName:"أوسان",lastName:"النهمي",fullName:"أوسان حميد أحمد النهمي",
heroLead:"إداري محترف بخبرة عملية تتجاوز 6 سنوات، وطالب علوم حاسوب، وصانع يحوّل أدوات الذكاء الاصطناعي إلى إنتاجية حقيقية.",
ctaWork:"استعرض أعمالي",ctaTalk:"لنتحدث",location:"صنعاء، اليمن",quickUni:"الجامعة اللبنانية اليمنية",
orbAI:"إنتاجية",orbWeb:"تطوير ويب",orbYears:"سنوات خبرة",
statYears:"سنوات من الخبرة",statCerts:"شهادات معتمدة",statProjects:"مشاريع منجزة",statLangs:"لغتان",
k01:"01 — نبذة",aboutTitle:'الملخص <span class="grad">المهني</span>',
summary1:"طالب علوم حاسوب بخبرة إدارية تزيد على ست سنوات بدوام جزئي في مكتب محاماة. شغوف بإنتاجية الذكاء الاصطناعي وتنظيم الأعمال والتقنية، وأتعامل مع كل مهمة بانضباط واهتمام بأدق التفاصيل.",
summary2:"تشمل خبرتي الأعمال الإدارية المكتبية، والتواصل مع العملاء، وإدارة الوثائق، إلى جانب تطوير مشاريع أكاديمية بلغة HTML وإعداد دراسات جدوى للمشاريع. أتطلع إلى فرصة أساهم فيها وأتطور وأقدّم قيمة حقيقية في بيئة عمل احترافية.",
signature:"أوسان النهمي",
h1t:"أكثر من 6 سنوات من الخبرة الإدارية (دوام جزئي)",h1d:"عمل إداري بدوام جزئي في مكتب محاماة.",
h2t:"طالب علوم حاسوب",h2d:"بكالوريوس علوم الحاسوب وتقنية المعلومات، التخرج المتوقع 2028.",
h3t:"أدوات إنتاجية الذكاء الاصطناعي وهندسة الأوامر",h3d:"أدوات الذكاء الاصطناعي وهندسة الأوامر في العمل الفعلي.",
h4t:"تطوير مواقع الويب بلغة HTML",h4d:"مواقع بلغة HTML، من المشاريع الدراسية حتى لعبة كاملة.",
h5t:"دراسات الجدوى للمشاريع التجارية",h5d:"تحليل السوق والخطط المالية وتقييم المشاريع.",
h6t:"سريع التعلّم وعالي الحماس",h6d:"ست شهادات في الذكاء الاصطناعي والأعمال والحاسوب.",
k02:"02 — الخبرة",expTitle:'الخبرة <span class="grad">العملية</span>',
jobTitle:'مساعد إداري <small>(دوام جزئي)</small>',jobOrg:"مكتب محاماة",jobDate:"2020 – حتى الآن",
j1:"إدارة وتنظيم الوثائق القانونية والملفات وسجلات المكتب.",
j2:"إعداد المراسلات الرسمية والتقارير والمستندات باستخدام Microsoft Office.",
j3:"تنسيق المواعيد والجداول والعمليات اليومية للمكتب.",
j4:"استقبال العملاء والرد على استفساراتهم وتقديم خدمة عملاء متميزة.",
j5:"الحفاظ على سرية المعلومات والوثائق القانونية الحساسة.",
j6:"دعم الأعمال الإدارية والمساهمة في انسيابية سير العمل.",
t1:"إدارة الوثائق",t2:"Microsoft Office",t3:"خدمة العملاء",t4:"السرية",t5:"تنظيم المواعيد",
k03:"03 — المشاريع",projTitle:'مشاريع <span class="grad">مميزة</span>',projSub:"أعمال حقيقية صممتها وبنيتها بنفسي — افتح أياً منها مباشرة.",
pGame:"لعبة ويب",tGameDesign:"تصميم ألعاب",
p1d:"لعبة أكشن سريعة على المتصفح بنيتها من الصفر: تحرّك، صوّب، أطلق، وتفادَ موجات الأعداء، مع لوحة لأعلى النتائج وواجهة ثنائية اللغة عربي/إنجليزي.",
viewProject:"عرض المشروع",
pBiz:"أعمال · 2024",p2t:"موقع دراسة جدوى لمشروع تجاري",
p2d:"دراسة جدوى متكاملة لمشروع استيراد وبيع البروش وإكسسوارات الشارة في اليمن، معروضة كموقع إلكتروني: تحليل السوق والمنافسين، والخطة المالية، والمخاطر، وتحليل SWOT، وخطة إطلاق لـ 90 يوماً.",
tMarket:"تحليل السوق",tFin:"التخطيط المالي",
pUni:"مشروع جامعي · 2024",p3t:"موقع منصة تعليمية",
p3d:"منصة تعليمية متجاوبة موجّهة للأطفال اللاجئين، صُممت كمشروع جامعي مع التركيز على تجربة المستخدم وتنظيم المحتوى بوضوح والتصميم النظيف.",
tUX:"تجربة المستخدم",
k04:"04 — الشهادات",certTitle:'الرخص <span class="grad">والشهادات</span>',certSub:"شهادات موثّقة — اضغط على أي بطاقة لعرض النسخة الأصلية.",
c1t:"الذكاء الاصطناعي لمحترفي الأعمال",c1d:"صدرت في 31 يوليو 2026",
c2t:"التفكير النقدي في عصر الذكاء الاصطناعي",c2d:"صدرت في 31 يوليو 2026",
c3i:"مؤسسة دبي للمستقبل",c3t:"مليون كاتب أوامر — <bdi>1 Million Prompters</bdi>",c3d:"شهادة إتمام",
c4i:"AlqadasiBiz · حلول الأعمال والتسويق",c4t:"التسويق بالذكاء الاصطناعي",c4d:"صدرت في 1 يوليو 2026",
c5i:"Alhababi Business",c5t:"استراتيجيات العمل الحر عبر الإنترنت والذكاء الاصطناعي",c5d:"صدرت في 25 أغسطس 2026",
c6t:"الرخصة الدولية لقيادة الحاسوب <bdi>ICDL</bdi>",c6d:"شهادة في المهارات الرقمية",
viewCert:"عرض الشهادة",certSoon:"ملف الشهادة قريباً",
k05:"05 — التعليم",eduTitle:'المسيرة <span class="grad">الأكاديمية</span>',
degree:"بكالوريوس علوم الحاسوب وتقنية المعلومات",uni:"الجامعة اللبنانية اليمنية",expected:"التخرج المتوقع · 2028",eduDate:"2024 – حتى الآن",
k06:"06 — المهارات",skillsTitle:'المهارات <span class="grad">واللغات</span>',
techSkills:"المهارات التقنية",softSkills:"المهارات الشخصية",
sAI:"أدوات إنتاجية الذكاء الاصطناعي",sPrompt:"هندسة الأوامر",sDocs:"توثيق الأعمال",sWeb:"تطوير المواقع (أساسي)",sHTML:"HTML (أساسي)",
ss1:"الإدارة المكتبية",ss2:"إدارة الوقت",ss3:"مهارات التواصل",ss4:"حل المشكلات",ss5:"خدمة العملاء",ss6:"العمل الجماعي",ss7:"الاهتمام بالتفاصيل",ss8:"المهارات التنظيمية",ss9:"سرعة التكيّف",
languages:"اللغات",arabic:"العربية",native:"اللغة الأم",english:"الإنجليزية",b1:"B1 – متوسط",
k07:"07 — تواصل",contactTitle:'لنعمل <span class="grad">معاً</span>',contactSub:"لديك فرصة عمل أو مشروع أو استفسار؟ يسعدني تواصلك.",
waChat:"راسلني على واتساب",phone:"الهاتف",email:"البريد الإلكتروني",locLabel:"الموقع",cvPdf:"السيرة الذاتية · PDF",dlCv:"تحميل السيرة الذاتية",
footerName:"أوسان النهمي",rights:"جميع الحقوق محفوظة."
};
var ROLES={
en:["Administrative Assistant","AI Productivity Specialist","Computer Science Student","Prompt Engineering Enthusiast","Web Builder"],
ar:["مساعد إداري","متخصص في إنتاجية الذكاء الاصطناعي","طالب علوم حاسوب","شغوف بهندسة الأوامر","مطوّر مواقع"]
};
var META={
en:{title:document.title},
ar:{title:"أوسان النهمي — مساعد إداري · إنتاجية الذكاء الاصطناعي · طالب علوم حاسوب"}
};
var nodes=[].slice.call(document.querySelectorAll("[data-i18n]"));
nodes.forEach(function(n){n.setAttribute("data-en",n.innerHTML);});
var lang="en";
function setLang(l,animate){
  lang=(l==="ar")?"ar":"en";
  if(animate&&!reduce){document.body.classList.remove("lang-fade");void document.body.offsetWidth;document.body.classList.add("lang-fade");}
  root.lang=lang; root.dir=(lang==="ar")?"rtl":"ltr";
  nodes.forEach(function(n){var k=n.getAttribute("data-i18n");n.innerHTML=(lang==="ar"&&AR[k]!=null)?AR[k]:n.getAttribute("data-en");});
  document.title=META[lang].title;
  try{localStorage.setItem("awssan-lang",lang);}catch(e){}
  restartTyping();
}
var saved=null; try{saved=localStorage.getItem("awssan-lang");}catch(e){}
if(!saved){var q=new URLSearchParams(location.search).get("lang"); if(q) saved=q;}
document.getElementById("langToggle").addEventListener("click",function(){setLang(lang==="ar"?"en":"ar",true);});

/* ---------- typing ---------- */
var typedEl=document.getElementById("typed"),tTimer=null,ri=0,ci=0,del=false;
function tick(){
  var list=ROLES[lang],word=list[ri%list.length];
  if(!del){ci++; typedEl.textContent=word.slice(0,ci); if(ci>=word.length){del=true;tTimer=setTimeout(tick,1700);return;} tTimer=setTimeout(tick,lang==="ar"?70:60);}
  else{ci--; typedEl.textContent=word.slice(0,ci); if(ci<=0){del=false;ri++;tTimer=setTimeout(tick,350);return;} tTimer=setTimeout(tick,32);}
}
function restartTyping(){clearTimeout(tTimer);ri=0;ci=0;del=false;
  if(reduce){typedEl.textContent=ROLES[lang].slice(0,3).join(" · ");return;}
  tTimer=setTimeout(tick,400);}
setLang(saved||"en",false);

/* ---------- nav ---------- */
var nav=document.getElementById("nav"),links=document.getElementById("links"),burger=document.getElementById("burger"),bar=document.getElementById("progressBar"),toTop=document.getElementById("toTop");
function onScroll(){
  var y=window.scrollY||0,h=document.documentElement.scrollHeight-innerHeight;
  nav.classList.toggle("scrolled",y>20);
  bar.style.transform="scaleX("+(h>0?Math.min(1,y/h):0)+")";
  toTop.classList.toggle("show",y>innerHeight*.9);
}
addEventListener("scroll",onScroll,{passive:true}); onScroll();
burger.addEventListener("click",function(){var o=links.classList.toggle("open");burger.setAttribute("aria-expanded",o?"true":"false");});
links.addEventListener("click",function(e){if(e.target.closest("a")){links.classList.remove("open");burger.setAttribute("aria-expanded","false");}});
document.addEventListener("click",function(e){if(links.classList.contains("open")&&!e.target.closest("#links")&&!e.target.closest("#burger")){links.classList.remove("open");burger.setAttribute("aria-expanded","false");}});
var navMap={}; [].forEach.call(links.querySelectorAll("a"),function(a){navMap[a.getAttribute("href").slice(1)]=a;});
if("IntersectionObserver" in window){
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){for(var k in navMap)navMap[k].classList.remove("active"); if(navMap[e.target.id])navMap[e.target.id].classList.add("active");}});},{rootMargin:"-45% 0px -50% 0px"});
  document.querySelectorAll("section[id]").forEach(function(s){so.observe(s);});
}

/* ---------- reveal, counters, bars ---------- */
function countUp(el){var to=+el.getAttribute("data-to"),t0=null,d=1600;
  if(reduce){el.textContent=to;return;}
  function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/d),e=1-Math.pow(1-p,4);el.textContent=Math.round(to*e);if(p<1)requestAnimationFrame(f);}
  requestAnimationFrame(f);}
var groups={};
document.querySelectorAll(".reveal").forEach(function(el){var p=el.parentElement;var i=groups[p]=(groups[p]||0);});
[].forEach.call(document.querySelectorAll(".stats,.highlights,.projects,.certs,.skills-grid,.hero-copy"),function(g){[].forEach.call(g.querySelectorAll(":scope > .reveal"),function(el,i){el.style.setProperty("--d",(i*0.08)+"s");});});
if("IntersectionObserver" in window){
  var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;el.classList.add("in");
    el.querySelectorAll(".count").forEach(countUp);
    el.querySelectorAll(".fill-bar").forEach(function(b){b.style.width=b.getAttribute("data-w")+"%";});
    ro.unobserve(el);});},{threshold:.12,rootMargin:"0px 0px -6% 0px"});
  document.querySelectorAll(".reveal").forEach(function(el){ro.observe(el);});
}else{document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("in");});document.querySelectorAll(".count").forEach(function(c){c.textContent=c.getAttribute("data-to");});document.querySelectorAll(".fill-bar").forEach(function(b){b.style.width=b.getAttribute("data-w")+"%";});}

/* ---------- pointer effects (desktop only) ---------- */
var fine=window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if(fine&&!reduce){
  document.querySelectorAll(".spot").forEach(function(el){el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect();el.style.setProperty("--mx",(e.clientX-r.left)+"px");el.style.setProperty("--my",(e.clientY-r.top)+"px");});});
  document.querySelectorAll(".tilt-card").forEach(function(el){
    el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform="perspective(900px) rotateX("+(-y*6)+"deg) rotateY("+(x*6)+"deg) translateY(-6px)";});
    el.addEventListener("pointerleave",function(){el.style.transform="";});});
  var orb=document.querySelector(".orb");
  if(orb){addEventListener("pointermove",function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;orb.style.transform="rotateY("+(x*14)+"deg) rotateX("+(-y*14)+"deg)";},{passive:true});}
  document.querySelectorAll(".magnetic").forEach(function(b){b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+((e.clientX-r.left-r.width/2)*.15)+"px,"+((e.clientY-r.top-r.height/2)*.25)+"px)";});b.addEventListener("pointerleave",function(){b.style.transform="";});});
}

/* ---------- particles ---------- */
var cv=document.getElementById("particles");
if(cv&&cv.getContext&&!reduce){
  var ctx=cv.getContext("2d"),W=0,H=0,DPR=Math.min(2,window.devicePixelRatio||1),pts=[],mouse={x:-9999,y:-9999},running=true;
  function size(){W=cv.clientWidth;H=cv.clientHeight;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);
    var n=Math.round(Math.min(90,Math.max(28,W*H/16000)));pts=[];
    for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:Math.random()*1.6+.4,h:Math.random()<.7?190:265});}
  size(); var rt; addEventListener("resize",function(){clearTimeout(rt);rt=setTimeout(size,200);});
  addEventListener("pointermove",function(e){mouse.x=e.clientX;mouse.y=e.clientY;},{passive:true});
  document.addEventListener("visibilitychange",function(){running=!document.hidden;if(running)requestAnimationFrame(draw);});
  var LINK=W<700?90:130;
  function draw(){
    if(!running)return; ctx.clearRect(0,0,W,H); LINK=W<700?90:130;
    for(var i=0;i<pts.length;i++){var p=pts[i];p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
      var dx=p.x-mouse.x,dy=p.y-mouse.y,dm=dx*dx+dy*dy; if(dm<14400){var f=(1-Math.sqrt(dm)/120)*.6;p.x+=dx/120*f;p.y+=dy/120*f;}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.fillStyle="hsla("+p.h+",95%,70%,.8)";ctx.fill();
      for(var j=i+1;j<pts.length;j++){var q=pts[j],ex=p.x-q.x,ey=p.y-q.y,d=ex*ex+ey*ey;
        if(d<LINK*LINK){ctx.strokeStyle="rgba(96,165,250,"+(.16*(1-Math.sqrt(d)/LINK))+")";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}}}
    requestAnimationFrame(draw);}
  requestAnimationFrame(draw);
}
})();
