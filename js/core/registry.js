/* Daftar halaman (PG) dan penggambar halaman (draw0) */
function kosong(t){return `<div class="sh"><h2>${t}</h2></div><p class="note">Halaman ini baru dibuat dan masih kosong. Kolom dan isinya akan diatur sesuai kebutuhan.</p>`}
const PG={Dashboard:dash,TIMELINE:tline,'ABSENSI TEAM HARIAN/SIPIL':absen,'RAP PROJECT':rab,'RAP AWAL':()=>fpage('RAPA','RAP AWAL',SRV),'RAP AKHIR':()=>fpage('RAKH','RAP AKHIR',[]),'BELANJA':()=>fpage('BELA','BELANJA',[]),'STOK GUDANG':stok,'INPUT BELANJA':()=>sbar()+tbl('BELANJA',BEL,'Input belanja material'),'DATA SUPLAYER':sup,'D.PIC':()=>tbl('PIC',JS('Item pekerjaan'),'Data PIC project'),'D.HSIPIL':()=>tbl('SIPIL',JS('Jenis kerjaan'),'Data kerjaan sipil / team harian'),'OPERASIONAL':oprpage,'INVESTASI':inv,'H.JASA':hj};
/* Halaman menu baru: memakai fitur yang sudah ada, dipecah per bagian */
const DOCF={'FORM QC':'qc','FORM PERMINTAAN BARANG':'pb','SURAT JALAN':'sj'};
Object.assign(PG,{'INPUT BARANG':()=>stok('in'),'OUTPUT BARANG':()=>stok('out'),'DATA STOK':()=>stok('saldo'),'DAFTAR PROJECT':dproj,'MATERIAL':sup,
'JASA':()=>sbar()+ssec('HMJ','INPUT JASA','Nama jasa','jasa','JASA'),'OPRASIONAL':()=>sbar()+ssec('JHS','INPUT SLIP GAJI','Kegiatan','keg','SLIP GAJI'),
'SOP':()=>{OPT.t='sop';const ed=SOPS.f||SOPS.o>=0&&D.SOP[SOPS.o];return (ed?'':sbar().replace('Cari...','Cari nama folder SOP...'))+sopview()},
'FORM QC':()=>{SOPS.f='qc';return sfview()},'FORM PERMINTAAN BARANG':()=>{SOPS.f='pb';return sfview()},'SURAT JALAN':()=>{SOPS.f='sj';return sfview()}});
function draw0(){menu();document.getElementById('ttl').textContent=TTL[cur]||cur;document.getElementById('dt').textContent=new Date().toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
document.getElementById('main').innerHTML=PG[cur]();curs();if(cur==='TIMELINE'){const t=document.querySelector('.tdh'),w=document.querySelector('.gt');if(t&&w)w.scrollLeft=t.getBoundingClientRect().left-w.getBoundingClientRect().left+w.scrollLeft-330}}
