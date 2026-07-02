import {initRouter} from './router.js';
import {getPegawai} from './api.js';

async function loadPegawai(){
 const data=await getPegawai();
 const body=document.getElementById('pegawai-body');
 const input=document.getElementById('search');
 const render=(q='')=>{
  body.innerHTML='';
  data.filter(x=>(x.nama+x.id).toLowerCase().includes(q.toLowerCase()))
      .forEach(p=>{
        body.insertAdjacentHTML('beforeend',
        `<tr><td>${p.id}</td><td>${p.nama}</td><td>${p.profesi}</td><td>${p.unit}</td></tr>`);
      });
 };
 render();
 input?.addEventListener('input',e=>render(e.target.value));
 document.getElementById('statistik').textContent='Total Pegawai: '+data.length;
}
document.addEventListener('DOMContentLoaded',()=>{initRouter();loadPegawai();});