const cfg=window.IMPCO_CONFIG||{};
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const yt=cfg.youtubeChannel||'';
document.querySelectorAll('[data-email]').forEach(a=>{if(cfg.email){a.href=`mailto:${cfg.email}`;a.textContent=cfg.email}else a.style.display='none'});
document.querySelectorAll('[data-youtube]').forEach(a=>{if(yt)a.href=yt;else a.style.display='none'});
document.querySelectorAll('[data-social]').forEach(a=>{const u=cfg.social?.[a.dataset.social];if(u)a.href=u;else a.style.display='none'});
const key=document.body.dataset.portfolio;
if(key&&window.IMPCO_PROJECTS?.[key]){
 const grid=document.querySelector('[data-project-grid]');
 if(grid){
  const list=window.IMPCO_PROJECTS[key];
  grid.innerHTML=list.map((p,i)=>{
   const destination=p.video?(p.youtube||yt||p.link):p.link;
   const label=p.video&& (p.youtube||yt)?'Watch on YouTube →':(p.video?'Open Video Project →':'View Project →');
   return `<article class="work"><a class="workMedia" href="${esc(destination)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(p.image)}" alt="${esc(p.title)}"><span class="workArrow">↗</span></a><div class="info"><h3>${esc(p.title)}</h3><a href="${esc(destination)}" target="_blank" rel="noopener">${label}</a></div></article>`;
  }).join('');
 }
}
