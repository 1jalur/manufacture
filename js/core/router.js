/* Menu samping dan perpindahan halaman */
function menu(){document.getElementById('menu').innerHTML=MENU.map(([k,l,s])=>k==='---'?'<div class="msep"></div>':k==='##'?`<div class="mgrp">${l}</div>`:`<button class="${k===cur?'on':''}${s?' sub':''}" onclick="go('${k}')">${l}</button>`).join('');
}
function go(k){cur=k;q='';br='';FO[k]='';if(k==='RAP AWAL')FO.RAPA='';if(k==='BELANJA')FO.BELA='';if(k==='RAP AKHIR')FO.RAKH='';if(k==='SOP'){OPT.t='sop';SOPS.o=-1;SOPS.f=''}if(k==='OPERASIONAL'){FO.OPR='';OPT.t='sop';SOPS.o=-1;SOPS.f=''}SGT.t='in';draw();scrollTo(0,0)}
const pv=(v,t)=>t==='rpc'?fm(v):t==='calc'?(typeof v==='number'?rp(v):v):t==='num'?rp(v):v;
