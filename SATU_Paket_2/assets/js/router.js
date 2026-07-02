export function showPage(id){
 document.querySelectorAll('.page').forEach(p=>p.hidden=true);
 const el=document.getElementById(id+'-page');
 if(el) el.hidden=false;
}
export function initRouter(){
 function render(){
  const page=(location.hash||'#dashboard').replace('#','');
  showPage(page);
 }
 window.addEventListener('hashchange',render);
 render();
}
