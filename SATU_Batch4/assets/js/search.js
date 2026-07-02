
fetch('data/pegawai.json')
.then(r=>r.json())
.then(d=>console.log('Pegawai:',d));
