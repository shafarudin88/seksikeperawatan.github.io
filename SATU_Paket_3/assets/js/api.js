export async function getPegawai(){
 const r=await fetch('assets/data/pegawai.json');
 return await r.json();
}