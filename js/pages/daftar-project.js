/* DAFTAR PROJECT: satu baris per customer/proyek (dari timeline, belanja, dan folder RAP AWAL) */
function dproj(){const m={};[...CL(),...(D.FOL.RAPA||[])].forEach(c=>{const k=nk(c);if(k&&!m[k])m[k]=String(c).toUpperCase()});
const L=Object.values(m).filter(c=>!q||c.toLowerCase().includes(q.trim())).sort((a,b)=>a.localeCompare(b));
const row=c=>{const t=D.TIMELINE.find(x=>nk(x.cust)===nk(c)&&x.pic!=='Sipil')||{},f=(D.FOL.RAPA||[]).find(x=>nk(x)===nk(c));let tot=0;try{tot=f?atot(f).s:0}catch(e){}
return `<tr><td class="c">${esc(c)}</td><td class="c">${esc(t.sales||'-')}</td><td class="c">${esc(t.pic||'-')}</td><td class="c">${D.BELANJA.filter(r=>nk(r.cust)===nk(c)).length}</td><td class="c">${f?fm(tot):'-'}</td></tr>`};
return sbar().replace('Cari...','Cari nama project...')+`<div class="sh"><h2>DAFTAR PROJECT (${L.length})</h2></div><div class="w"><table><thead><tr><th>Customer / Project</th><th>Sales</th><th>PIC</th><th>Item belanja</th><th>Total RAP awal</th></tr></thead><tbody>${L.map(row).join('')||'<tr><td class="c" colspan="5">Belum ada project. Project muncul otomatis dari Timeline, Belanja, dan RAP AWAL.</td></tr>'}</tbody></table></div>`}
