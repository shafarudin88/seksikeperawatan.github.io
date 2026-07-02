import {getPegawai} from './api.js';

export async function renderPegawai(){
 const data=await getPegawai();
 const tbody=document.getElementById('pegawai-body');
 if(!tbody) return;
 tbody.innerHTML='';
 data.forEach(p=>{
   const rkk=p["NAMA FILE RKK"]||"";
   const btn=rkk?`<a class="btn" target="_blank" href="assets/docs/RKK/${rkk}">Lihat RKK</a>`:"-";
   tbody.insertAdjacentHTML("beforeend",`
   <tr>
     <td>${p.ID??""}</td>
     <td>${p.NAMA??""}</td>
     <td>${p.PROFESI??""}</td>
     <td>${p["UNIT AKTIF"]??""}</td>
     <td>${btn}</td>
   </tr>`);
 });
}
