/* Status proyek, legenda warna, warna grafik, daftar menu */
const STAT=['Persiapan','Survey ulang','Meeting','Belanja','Produksi','Jadwal QC 1','Instalasi','Sipil/Quadra','Selesai','Belum'];
const LG={T:[['1','Persiapan','linear-gradient(transparent 42%,rgba(239,68,68,.6) 42% 58%,transparent 58%),var(--ac2)','#991b1b','#fee2e2'],['2','Survey ulang','#facc15','#3b2f00'],['3','Meeting','#22c55e'],['4','Belanja','#3b82f6'],['5','Produksi','#ef4444'],['6','Jadwal QC 1','#a855f7'],['7','Instalasi','#f97316'],['8','Sipil/Quadra','#14532d'],['9','Selesai','#9ca3af','#1f2937']],A:[['1','Masuk','#1fa774'],['2','Tidak masuk','#e5484d'],['3','Cuti','#e0a100']]};
const PC=['#2f6bff','#e8590c','#12b886','#9c36b5','#e0a100','#e5484d'];
const MENU=[['Dashboard','DASHBOARD'],['---'],
['##','MANAJEMEN STOK'],['INPUT BARANG','INPUT BARANG',1],['OUTPUT BARANG','OUTPUT BARANG',1],['DATA STOK','DATA STOK',1],['---'],
['##','DATA PROJECT'],['ABSENSI TEAM HARIAN/SIPIL','ABSENSI HARIAN',1],['TIMELINE','TIMELINE',1],['DAFTAR PROJECT','DAFTAR PROJECT',1],['RAP AWAL','RAP AWAL',1],['RAP AKHIR','RAP FINAL',1],['BELANJA','BELANJA',1],['---'],
['##','DATA MASTER'],['MATERIAL','MATERIAL',1],['JASA','JASA',1],['OPRASIONAL','OPERASIONAL',1],['---'],
['##','DOKUMEN'],['SOP','SOP',1],['FORM QC','FORM QC',1],['FORM PERMINTAAN BARANG','FORM PERMINTAAN BARANG',1],['SURAT JALAN','SURAT JALAN',1],['---'],
['INVESTASI','INVESTASI']];
/* Judul halaman (kunci halaman -> teks yang tampil di menu dan di atas halaman) */
const TTL={};MENU.forEach(m=>{if(m[0]!=='---'&&m[0]!=='##')TTL[m[0]]=m[1]});
