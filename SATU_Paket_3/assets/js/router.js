export function initRouter(){
 const render=()=>{
  const page=(location.hash||'#dashboard').substring(1);
  document.querySelectorAll('.page').forEach(p=>p.hidden=true);
  const el=document.getElementById(page+'-page');
  if(el) el.hidden=false;
 };
 window.addEventListener('hashchange',render);
 render();
}