
/* MEYSA Reviews V10 - GitHub Pages / Ticimax */
(function(){
'use strict';
if(window.MeysaReviewsV10)return;
window.MeysaReviewsV10=true;

var BASE='https://dpu-ai.github.io/meysa-reviews/';
var FILES={
'/limited-kase-kaban-aci-kahve1':'data/limited-kase-kaban-aci-kahve.json'
};

var path=decodeURIComponent(location.pathname)
.replace(/\/+$/,'').toLocaleLowerCase('tr-TR');

if(!Object.prototype.hasOwnProperty.call(FILES,path))return;

var reviews=[],scheduled=false;

var css=`
#meysa-reviews-v8{font-family:inherit;color:#191919;background:#fff;padding:20px 0;box-sizing:border-box}
#meysa-reviews-v8 *{box-sizing:border-box}
#meysa-reviews-v8 h2{font-size:21px;font-weight:700;margin:0 0 15px}
#meysa-reviews-v8 .mr8-insight{border:1px solid #e8e8e8;border-radius:12px;padding:19px;margin-bottom:23px;background:#fafafa}
#meysa-reviews-v8 .mr8-insight h3{margin:0 0 12px;font-size:17px}
#meysa-reviews-v8 .mr8-insight p{margin:0 0 11px;color:#444;font-size:13px;line-height:1.8}
#meysa-reviews-v8 .mr8-insight p:last-child{margin-bottom:0}
#meysa-reviews-v8 .mr8-summary{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
#meysa-reviews-v8 .mr8-avg{font-size:31px;font-weight:700}
#meysa-reviews-v8 .mr8-stars{position:relative;display:inline-block;color:#ddd;font-size:21px;letter-spacing:2px;line-height:1;white-space:nowrap}
#meysa-reviews-v8 .mr8-stars-on{position:absolute;left:0;top:0;color:#f5a400;white-space:nowrap;overflow:hidden}
#meysa-reviews-v8 .mr8-sub{font-size:12px;color:#777;margin:10px 0 18px}
#meysa-reviews-v8 .mr8-bars{max-width:490px;margin-bottom:24px}
#meysa-reviews-v8 .mr8-bar{width:100%;display:flex;align-items:center;gap:10px;margin:5px 0;padding:7px 6px;border:1px solid transparent;border-radius:7px;background:transparent;color:inherit;font:inherit;font-size:12px;text-align:left;cursor:pointer;transition:background .15s,border-color .15s}
#meysa-reviews-v8 .mr8-bar:hover{background:#f8f8f8}
#meysa-reviews-v8 .mr8-bar:focus-visible{outline:2px solid #7f0107;outline-offset:2px}
#meysa-reviews-v8 .mr8-bar[aria-pressed=true]{background:#fff5f5;border-color:#7f0107}
#meysa-reviews-v8 .mr8-label{width:32px;flex-shrink:0}
#meysa-reviews-v8 .mr8-track{height:8px;flex:1;background:#eee;border-radius:20px;overflow:hidden}
#meysa-reviews-v8 .mr8-fill{display:block;height:100%;background:#f5a400}
#meysa-reviews-v8 .mr8-count{width:30px;text-align:right}
#meysa-reviews-v8 .mr8-clear{border:0;background:none;color:#7f0107;text-decoration:underline;cursor:pointer;font:inherit;font-size:12px;padding:6px 0 0}
#meysa-reviews-v8 .mr8-clear[hidden]{display:none!important}
#meysa-reviews-v8 h3{font-size:17px;font-weight:700;margin:22px 0 14px}
#meysa-reviews-v8 .mr8-controls{display:flex;gap:10px;margin-bottom:12px}
#meysa-reviews-v8 .mr8-search,#meysa-reviews-v8 .mr8-sort{height:44px!important;border:1px solid #ddd!important;border-radius:7px!important;background:#fff!important;color:#222!important;font:inherit!important;font-size:13px!important;padding:0 12px!important}
#meysa-reviews-v8 .mr8-search{flex:1;min-width:0}
#meysa-reviews-v8 .mr8-sort{width:185px}
#meysa-reviews-v8 .mr8-result{font-size:12px;color:#777;margin:0 0 8px}
#meysa-reviews-v8 .mr8-item{padding:16px 0!important;border-bottom:1px solid #eee;height:auto!important;overflow:visible!important;display:block!important}
#meysa-reviews-v8 .mr8-top{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:9px 0}
#meysa-reviews-v8 .mr8-name{font-size:13px;font-weight:700}
#meysa-reviews-v8 .mr8-source{font-size:11px;color:#777}
#meysa-reviews-v8 .mr8-date{font-size:11px;color:#888;margin-left:auto}
#meysa-reviews-v8 .mr8-text{display:block!important;font-size:13px!important;font-weight:400!important;line-height:1.8!important;color:#333!important;margin:7px 0 0!important;height:auto!important;max-height:none!important;visibility:visible!important;opacity:1!important;overflow:visible!important;white-space:normal!important}
#meysa-reviews-v8 .mr8-more{width:100%;margin:15px 0 0;padding:13px;border:1px solid #222;border-radius:6px;background:#fff;color:#222;font-size:13px;font-weight:600;cursor:pointer}
#meysa-reviews-v8 .mr8-native{border-top:1px solid #eee;margin-top:25px;padding-top:18px}
#meysa-reviews-v8 .mr8-native p{font-size:12px;color:#777;line-height:1.6}
@media(max-width:767px){
#meysa-reviews-v8{padding:16px 0}
#meysa-reviews-v8 h2{font-size:19px}
#meysa-reviews-v8 .mr8-controls{flex-direction:column}
#meysa-reviews-v8 .mr8-search,#meysa-reviews-v8 .mr8-sort{width:100%;flex:none}
}
`;

function el(tag,cls,txt){
var n=document.createElement(tag);
if(cls)n.className=cls;
if(txt!==undefined)n.textContent=txt;
return n;
}

function star(value){
var n=el('span','mr8-stars','★★★★★');
n.setAttribute('aria-label',Number(value).toFixed(2).replace('.',',')+' / 5');
var fill=el('span','mr8-stars-on','★★★★★');
fill.style.width=Math.max(0,Math.min(100,Number(value)*20))+'%';
n.appendChild(fill);
return n;
}

function parseDate(r){
if(!r.date||!/^(\d{4})-(\d{2})-(\d{2})$/.test(r.date))return null;
var d=new Date(r.date+'T12:00:00');
return Number.isNaN(d.getTime())?null:d.getTime();
}

function dateLabel(r){
var t=parseDate(r);
if(t===null)return '';
var now=new Date(),d=new Date(t);
var a=Date.UTC(now.getFullYear(),now.getMonth(),now.getDate());
var b=Date.UTC(d.getFullYear(),d.getMonth(),d.getDate());
var diff=Math.max(0,Math.round((a-b)/86400000));
if(diff===0)return 'Bugün';
if(diff===1)return 'Dün';
if(diff<7)return diff+' gün önce';
if(diff<14)return '1 hafta önce';
if(diff<30)return Math.floor(diff/7)+' hafta önce';
return d.toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'});
}

function stats(){
var counts={1:0,2:0,3:0,4:0,5:0},sum=0;
reviews.forEach(function(r){
counts[r.rating]++;
sum+=r.rating;
});
return {
counts:counts,
count:reviews.length,
average:reviews.length?sum/reviews.length:0
};
}

function countMatching(arr,re){
return arr.filter(function(r){return re.test(r.text);}).length;
}

function insights(){
var positive=reviews.filter(function(r){return r.rating>=4;});
var negative=reviews.filter(function(r){return r.rating<=3;});

var topics=[
{label:'kumaş ve doku kalitesi',re:/kumaş|doku|kaşe|astar/i},
{label:'kalıp, beden uyumu ve duruş',re:/kalıp|kesim|duruş|beden|omuz|boyu|uzunluk/i},
{label:'sıcak tutma ve kışlık kullanım',re:/sıcak|soğuk|rüzgar|kış|üşü/i},
{label:'renk ve kombin kolaylığı',re:/renk|kahve|kombin|şal|bot/i},
{label:'teslimat ve paketleme',re:/kargo|teslim|paket/i}
].map(function(t){
return {label:t.label,count:countMatching(positive,t.re)};
}).sort(function(a,b){return b.count-a.count;});

var p=[];

p.push(
'Müşterilerin değerlendirmelerinde en sık vurgulanan olumlu noktalar '+
topics.slice(0,3).map(function(t){return t.label;}).join(', ')+
'. Bu başlıklar, ürünü tercih eden müşterilerin deneyimlerinde tekrar eden konuları özetliyor.'
);

var fit=countMatching(positive,/beden|kalıp|omuz|boyu|uzunluk/i);
var warm=countMatching(positive,/sıcak|soğuk|rüzgar|kış|üşü/i);
var color=countMatching(positive,/renk|kahve|kombin|şal|bot/i);
var details=[];

if(fit)details.push('beden ve kalıp uyumu');
if(warm)details.push('soğuk havalarda kullanım');
if(color)details.push('renk ve kombin seçenekleri');

if(details.length){
p.push(
'Ürünü değerlendirirken müşterilerin ayrıca '+
details.join(', ')+
' hakkında paylaştığı deneyimler de dikkat çekiyor. Beden seçimi ve kullanım koşulları kişiden kişiye farklılık gösterebilir.'
);
}

var issues=[];
if(countMatching(negative,/kargo|teslim|gecik|paket/i))
issues.push('kargo gecikmesi veya paketleme');
if(countMatching(negative,/düğme|dikiş|astar|yaka/i))
issues.push('dikiş, düğme ve ürün detayları');
if(countMatching(negative,/iade|iptal|stok|müşteri hizmet/i))
issues.push('iade, stok veya iletişim süreçleri');
if(countMatching(negative,/renk|kalıp|kumaş|bekledi/i))
issues.push('ürünün beklentiyle uyumu');

if(issues.length){
p.push(
'Olumsuz değerlendirmelerde ise '+
issues.join(', ')+
' konularında sorun bildiren müşteriler bulunuyor. Bu geri bildirimler de genel değerlendirmenin bir parçası olarak korunuyor.'
);
}

p.push(
'Bu özet, aşağıda yer alan '+reviews.length+
' değerlendirmedeki ifadelerden otomatik olarak oluşturulmuştur; tüm müşteri deneyimlerinin aynı olduğu anlamına gelmez.'
);

return p;
}

function build(){
var root=el('section');
root.id='meysa-reviews-v8';
root.appendChild(el('h2','','Müşteri Yorumları'));

var insight=el('div','mr8-insight');
insight.appendChild(el('h3','','Müşteriler Ne Diyor?'));
insights().forEach(function(t){
insight.appendChild(el('p','',t));
});
root.appendChild(insight);

var s=stats();
var summary=el('div','mr8-summary');
summary.appendChild(el('strong','mr8-avg',s.average.toFixed(2).replace('.',',')));
summary.appendChild(star(s.average));
root.appendChild(summary);
root.appendChild(el('p','mr8-sub',s.count+' müşteri değerlendirmesi'));

var selectedRating=null,limit=5,barButtons=[];
var bars=el('div','mr8-bars');

[5,4,3,2,1].forEach(function(n){
var row=el('button','mr8-bar');
row.type='button';
row.setAttribute('aria-label',n+' yıldızlı '+s.counts[n]+' yorumu göster');
row.setAttribute('aria-pressed','false');
row.appendChild(el('span','mr8-label',n+' ★'));

var track=el('span','mr8-track');
var fill=el('span','mr8-fill');
fill.style.width=(s.count?s.counts[n]/s.count*100:0)+'%';
track.appendChild(fill);
row.appendChild(track);
row.appendChild(el('span','mr8-count',String(s.counts[n])));
bars.appendChild(row);
barButtons.push({rating:n,button:row});

row.addEventListener('click',function(){
selectedRating=selectedRating===n?null:n;
limit=5;
draw();
var heading=root.querySelector('.mr8-review-heading');
if(heading)heading.scrollIntoView({behavior:'smooth',block:'start'});
});
});

root.appendChild(bars);

var clear=el('button','mr8-clear','Filtreyi Temizle');
clear.type='button';
clear.hidden=true;
bars.appendChild(clear);
clear.addEventListener('click',function(){
selectedRating=null;
limit=5;
draw();
});

var heading=el('h3','mr8-review-heading','Müşteri Değerlendirmeleri');
root.appendChild(heading);

var controls=el('div','mr8-controls');
var input=el('input','mr8-search');
input.type='search';
input.placeholder='Yorumlarda ara';
input.setAttribute('aria-label','Yorumlarda ara');
controls.appendChild(input);

var sort=el('select','mr8-sort');
[
['new','En Yeni Yorumlar'],
['old','En Eski Yorumlar'],
['high','En Yüksek Puan'],
['low','En Düşük Puan']
].forEach(function(pair){
var option=el('option','',pair[1]);
option.value=pair[0];
sort.appendChild(option);
});

controls.appendChild(sort);
root.appendChild(controls);

var result=el('p','mr8-result');
root.appendChild(result);

var list=el('div','mr8-list');
root.appendChild(list);

var more=el('button','mr8-more','Daha fazla yorum göster');
more.type='button';
root.appendChild(more);

var native=el('div','mr8-native');
native.appendChild(el('h3','','Ticimax Müşteri Yorumları'));
native.appendChild(el('p','','Ticimax üzerinden gönderilen değerlendirmeler ve Yorum Yap alanı aşağıdadır.'));
root.appendChild(native);

function draw(){
barButtons.forEach(function(b){
b.button.setAttribute('aria-pressed',String(selectedRating===b.rating));
});
clear.hidden=selectedRating===null;

var q=input.value.trim().toLocaleLowerCase('tr-TR');

var filtered=reviews.filter(function(r){
return (selectedRating===null||r.rating===selectedRating)&&
(r.name+' '+r.text).toLocaleLowerCase('tr-TR').indexOf(q)!==-1;
}).slice();

filtered.sort(function(a,b){
if(sort.value==='high')return b.rating-a.rating||a._index-b._index;
if(sort.value==='low')return a.rating-b.rating||a._index-b._index;
var ad=parseDate(a),bd=parseDate(b);
if(ad===null&&bd===null)return a._index-b._index;
if(ad===null)return 1;
if(bd===null)return -1;
return (sort.value==='old'?ad-bd:bd-ad)||a._index-b._index;
});

result.textContent=
(selectedRating===null?'Tüm puanlar':selectedRating+' yıldızlı yorumlar')+
' · '+filtered.length+' değerlendirme';

list.replaceChildren();

filtered.slice(0,limit).forEach(function(r){
var item=el('article','mr8-item');
item.appendChild(star(r.rating));

var top=el('div','mr8-top');
top.appendChild(el('strong','mr8-name',r.name));
top.appendChild(el('span','mr8-source','Müşteri değerlendirmesi'));

var date=dateLabel(r);
if(date)top.appendChild(el('span','mr8-date',date));

item.appendChild(top);
item.appendChild(el('p','mr8-text',r.text));
list.appendChild(item);
});

if(!filtered.length){
list.appendChild(el('p','mr8-text','Eşleşen yorum bulunamadı.'));
}

more.style.display=filtered.length>limit?'block':'none';
more.textContent=
'Daha fazla yorum göster ('+
Math.max(0,filtered.length-limit)+' kaldı)';
}

input.addEventListener('input',function(){
limit=5;
draw();
});
sort.addEventListener('change',function(){
limit=5;
draw();
});
more.addEventListener('click',function(){
limit+=10;
draw();
});

draw();
return root;
}

function updateCounter(){
var counter=document.getElementById('divYorumSayisi');
if(!counter)return;

var original=counter.getAttribute('data-meysa-native-count');

if(original===null){
var m=(counter.textContent||'').match(/\d+/);
original=m?m[0]:'0';
counter.setAttribute('data-meysa-native-count',original);
}

var target='('+(Number(original)+reviews.length)+')';
if(counter.textContent!==target)counter.textContent=target;
}

function install(){
if(!reviews.length)return;
var panel=document.querySelector('#divTabYorumlar .tabYorumlar');
if(!panel)return;

var existing=document.getElementById('meysa-reviews-v8');
if(!existing||existing.parentNode!==panel){
if(existing)existing.remove();
panel.insertBefore(build(),panel.firstChild);
}
updateCounter();
}

function schedule(){
if(scheduled)return;
scheduled=true;
setTimeout(function(){
scheduled=false;
install();
},180);
}

function start(){
var style=document.getElementById('meysa-reviews-v9-css');
if(!style){
style=el('style');
style.id='meysa-reviews-v9-css';
document.head.appendChild(style);
}
style.textContent=css;

fetch(BASE+FILES[path],{cache:'no-cache'})
.then(function(res){
if(!res.ok)throw Error('HTTP '+res.status);
return res.json();
})
.then(function(data){
if(!Array.isArray(data))throw Error('Geçersiz yorum verisi');

var seen=new Set();

reviews=data.filter(function(r){
return r&&typeof r.text==='string'&&typeof r.name==='string'&&
Number.isInteger(Number(r.rating))&&
Number(r.rating)>=1&&Number(r.rating)<=5;
}).filter(function(r){
var key=r.name.trim().toLocaleLowerCase('tr-TR')+'|'+
r.text.trim().toLocaleLowerCase('tr-TR');
if(seen.has(key))return false;
seen.add(key);
return true;
}).map(function(r,i){
return {
name:r.name,
text:r.text,
rating:Number(r.rating),
date:r.date||null,
_index:i
};
});

install();

new MutationObserver(schedule).observe(document.body,{
childList:true,
subtree:true
});
})
.catch(function(e){
console.error('MEYSA Reviews V10:',e);
});
}

if(document.readyState==='loading'){
document.addEventListener('DOMContentLoaded',start,{once:true});
}else{
start();
}
})();
