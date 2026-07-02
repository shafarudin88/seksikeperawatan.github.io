export async function getPegawai(){
 const r=await fetch('assets/data/pegawai.json');
 if(!r.ok) throw new Error('pegawai.json tidak ditemukan');
 return await r.json();
}
