// ===== 星空动画 =====
(function(){
  const canvas = document.getElementById('starCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars=[], shootingStars=[], W, H;
  function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
  function initStars(){
    stars=[];
    const count=Math.floor((W*H)/2200);
    for(let i=0;i<count;i++) stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+0.2,alpha:Math.random()*0.7+0.2,twinkle:Math.random()*Math.PI*2});
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    const g=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)/2);
    g.addColorStop(0,'rgba(10,20,60,0.25)'); g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    stars.forEach(s=>{ s.twinkle+=0.012; const a=s.alpha*(0.6+0.4*Math.sin(s.twinkle)); ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=`rgba(180,210,255,${a})`; ctx.fill(); });
    if(Math.random()<0.007) shootingStars.push({x:Math.random()*W,y:Math.random()*H*0.5,len:Math.random()*80+40,speed:Math.random()*6+4,alpha:1});
    shootingStars=shootingStars.filter(s=>s.alpha>0);
    shootingStars.forEach(s=>{ ctx.beginPath(); const g2=ctx.createLinearGradient(s.x,s.y,s.x+s.len,s.y+s.len*0.5); g2.addColorStop(0,`rgba(255,255,255,${s.alpha})`); g2.addColorStop(1,'rgba(255,255,255,0)'); ctx.strokeStyle=g2; ctx.lineWidth=1.5; ctx.moveTo(s.x,s.y); ctx.lineTo(s.x+s.len,s.y+s.len*0.5); ctx.stroke(); s.x+=s.speed; s.y+=s.speed*0.5; s.alpha-=0.025; });
    requestAnimationFrame(draw);
  }
  resize(); initStars(); requestAnimationFrame(draw);
  window.addEventListener('resize',()=>{resize();initStars();});
})();

// ===== 进度条 =====
(function(){
  const bar=document.getElementById('progressBar');
  if(!bar) return;
  window.addEventListener('scroll',()=>{
    const p=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
    bar.style.width=Math.min(p,100)+'%';
  });
})();

// ===== 移动菜单 =====
(function(){
  const btn=document.getElementById('menuBtn');
  const menu=document.getElementById('mobileMenu');
  if(!btn||!menu) return;
  btn.addEventListener('click',()=>{ btn.classList.toggle('active'); menu.classList.toggle('open'); });
  document.addEventListener('click',e=>{ if(!btn.contains(e.target)&&!menu.contains(e.target)){ btn.classList.remove('active'); menu.classList.remove('open'); } });
})();
window.closeMobileMenu=function(){ const btn=document.getElementById('menuBtn'); const menu=document.getElementById('mobileMenu'); if(btn) btn.classList.remove('active'); if(menu) menu.classList.remove('open'); };

// ===== 滚动淡入 =====
(function(){
  const obs=new IntersectionObserver(entries=>{ entries.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'),80*(e.target.dataset.delay||0)); obs.unobserve(e.target); } }); },{threshold:0.1});
  document.querySelectorAll('.reveal').forEach((el,i)=>{ el.dataset.delay=i%4; obs.observe(el); });
})();

// ===== 导航栏滚动 =====
(function(){
  const nav=document.getElementById('navbar');
  if(!nav) return;
  window.addEventListener('scroll',()=>{ nav.style.background=window.scrollY>50?'rgba(4,11,26,0.97)':'rgba(4,11,26,0.9)'; });
})();

// ===== Service Worker 注册 =====
(function(){
  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
      navigator.serviceWorker.register('/sw.js')
        .then(reg=>{ 
          console.log('Service Worker registered:', reg);
          setInterval(()=>reg.update(),60000);
        })
        .catch(err=>console.log('Service Worker registration failed:', err));
    });
  }
})();

// ===== PWA 安装提示 =====
(function(){
  let installPrompt;
  window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
    installPrompt=e;
    console.log('PWA is installable');
  });
  window.addEventListener('appinstalled',()=>{
    console.log('App installed');
    installPrompt=null;
  });
})();
