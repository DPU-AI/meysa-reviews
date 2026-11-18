/* MEYSA Reviews V8 - GitHub Pages - Ticimax */
(function(){
'use strict';
if(window.MeysaReviewsV8)return;
window.MeysaReviewsV8=true;
var BASE='https://dpu-ai.github.io/meysa-reviews/';
var FILES={'/limited-kase-kaban-aci-kahve':'data/limited-kase-kaban-aci-kahve.json'};
var path=decodeURIComponent(location.pathname).replace(/\/+$/,'').toLocaleLowerCase('tr-TR');
if(!Object.prototype.hasOwnProperty.call(FILES,path))return;
var reviews=null,loading=false;
var css=`
#meysa-reviews-v8{font-family:inherit;color:#191919;background:#fff;padding:20px 0;box-sizing:border-box}
#meysa-reviews-v8 *{box-sizing:border-box}
#meysa-reviews-v8 h2{font-size:21px;font-weight:700;margin:0 0 15px}
#meysa-reviews-v8 .mr8-summary{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
#meysa-reviews-v8 .mr8-avg{font-size:31px;font-weight:700}
#meysa-reviews-v8 .mr8-stars{position:relative;display:inline-block;color:#ddd;font-size:21px;letter-spacing:2px;line-height:1;white-space:nowrap}
#meysa-reviews-v8 .mr8-stars-on{position:absolute;left:0;top:0;color:#f5a400;white-space:nowrap;overflow:hidden}
#meysa-reviews-v8 .mr8-sub{font-size:12px;color:#777;margin:10px 0 18px}
#meysa-reviews-v8 .mr8-bars{max-width:490px;margin-bottom:24px}
#meysa-reviews-v8 .mr8-bar{display:flex;align-items:center;gap:10px;margin:10px 0;font-size:12px}
#meysa-reviews-v8 .mr8-label{width:32px;flex-shrink:0}
#meysa-reviews-v8 .mr8-track{height:8px;flex:1;background:#eee;border-radius:20px;overflow:hidden}
#meysa-reviews-v8 .mr8-fill{display:block;height:100%;background:#f5a400}
#meysa-reviews-v8 .mr8-count{width:30px;text-align:right}
#meysa-reviews-v8 h3{font-size:17px;font-weight:700;margin:22px 0 14px}
#meysa-reviews-v8 .mr8-controls{display:flex;gap:10px;margin-bottom:12px}
#meysa-reviews-v8 .mr8-search,#meysa-reviews-v8 .mr8-sort{height:44px!important;border:1px solid #ddd!important;border-radius:7px!important;background:#fff!important;color:#222!important;font:inherit!important;font-size:13px!important;padding:0 12px!important}
#meysa-reviews-v8 .mr8-search{flex:1;min-width:0}
#meysa-reviews-v8 .mr8-sort{width:185px}
#meysa-reviews-v8 .mr8-item{padding:16px 0!important;border-bottom:1px solid #eee;height:auto!important;overflow:visible!important;display:block!important}
#meysa-reviews-v8 .mr8-top{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:9px 0}
#meysa-reviews-v8 .mr8-name{font-size:13px;font-weight:700}
#meysa-reviews-v8 .mr8-source{font-size:11px;color:#777}
#meysa-reviews-v8 .mr8-text{display:block!important;font-size:13px!important;font-weight:400!important;line-height:1.8!important;color:#333!important;margin:7px 0 0!important;height:auto!important;max-height:none!important;visibility:visible!important;opacity:1!important;overflow:visible!important;white-space:normal!important}
#meysa-reviews-v8 .mr8-more{width:100%;margin:15px 0 0;padding:13px;border:1px solid #222;border-radius:6px;background:#fff;color:#222;font-size:13px;font-weight:600;cursor:pointer}
#meysa-reviews-v8 .mr8-native{border-top:1px solid #eee;margin-top:25px;padding-top:18px}
#meysa-reviews-v8 .mr8-native p{font-size:12px;color:#777;line-height:1.6}
@media(max-width:767px){#meysa-reviews-v8{padding:16px 0}#meysa-reviews-v8 h2{font-size:19px}#meysa-reviews-v8 .mr8-controls{flex-direction:column}#meysa-reviews-v8 .mr8-search,#meysa-reviews-v8 .mr8-sort{width:100%;flex:none}}
`;
function el(tag,cls,txt){var n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n;}
function star(value){var n=el('span','mr8-stars','★★★★★');n.setAttribute('aria-label',Number(value).toFixed(2).replace('.',',')+' / 5');var fill=el('span','mr8-stars-on','★★★★★');fill.style.width=Math.max(0,Math.min(100,Number(value)*20))+'%';n.appendChild(fill);return n;}
function stats(){var counts={1:0,2:0,3:0,4:0,5:0},sum=0;reviews.forEach(function(r){var n=Number(r.rating);if(counts[n]!==undefined){counts[n]++;sum+=n;}});var count=Object.keys(counts).reduce(function(a,k){return a+counts[k];},0);return {counts:counts,count:count,average:count?sum/count:0};}
function build(){var root=el('section');root.id='meysa-reviews-v8';root.appendChild(el('h2','', 'Ürün Değerlendirmeleri'));var s=stats();var summary=el('div','mr8-summary');summary.appendChild(el('strong','mr8-avg',s.average.toFixed(2).replace('.',',')));summary.appendChild(star(s.average));root.appendChild(summary);root.appendChild(el('p','mr8-sub',s.count+' Instagram üzerinden iletilen müşteri değerlendirmesi'));
var bars=el('div','mr8-bars');[5,4,3,2,1].forEach(function(n){var row=el('div','mr8-bar');row.appendChild(el('span','mr8-label',n+' ★'));var track=el('span','mr8-track');var fill=el('span','mr8-fill');fill.style.width=(s.count?s.counts[n]/s.count*100:0)+'%';track.appendChild(fill);row.appendChild(track);row.appendChild(el('span','mr8-count',String(s.counts[n])));bars.appendChild(row);});root.appendChild(bars);
root.appendChild(el('h3','', 'Instagram Müşteri Yorumları'));
var controls=el('div','mr8-controls');var input=el('input','mr8-search');input.type='search';input.placeholder='Yorumlarda ara';input.setAttribute('aria-label','Yorumlarda ara');controls.appendChild(input);var sort=el('select','mr8-sort');[['original','Önerilen Sıralama'],['high','En Yüksek Puan'],['low','En Düşük Puan']].forEach(function(pair){var option=el('option','',pair[1]);option.value=pair[0];sort.appendChild(option);});controls.appendChild(sort);root.appendChild(controls);
var list=el('div','mr8-list');root.appendChild(list);var more=el('button','mr8-more','Daha fazla yorum göster');more.type='button';root.appendChild(more);var native=el('div','mr8-native');native.appendChild(el('h3','','Ticimax Müşteri Yorumları'));native.appendChild(el('p','','Ticimax üzerinden gönderilen değerlendirmeler ve Yorum Yap alanı aşağıdadır.'));root.appendChild(native);
var limit=5;function draw(){var q=input.value.trim().toLocaleLowerCase('tr-TR');var filtered=reviews.filter(function(r){return (r.name+' '+r.text).toLocaleLowerCase('tr-TR').indexOf(q)!==-1;}).slice();if(sort.value==='high')filtered.sort(function(a,b){return b.rating-a.rating;});if(sort.value==='low')filtered.sort(function(a,b){return a.rating-b.rating;});list.replaceChildren();filtered.slice(0,limit).forEach(function(r){var item=el('article','mr8-item');item.appendChild(star(Number(r.rating)));var top=el('div','mr8-top');top.appendChild(el('strong','mr8-name',String(r.name||'Anonim')));top.appendChild(el('span','mr8-source',String(r.source||'Instagram')+' üzerinden iletilen yorum'));item.appendChild(top);item.appendChild(el('p','mr8-text',String(r.text||'')));list.appendChild(item);});if(!filtered.length)list.appendChild(el('p','mr8-text','Eşleşen yorum bulunamadı.'));more.style.display=filtered.length>limit?'block':'none';more.textContent='Daha fazla yorum göster ('+Math.max(0,filtered.length-limit)+' kaldı)';}
input.addEventListener('input',function(){limit=5;draw();});sort.addEventListener('change',function(){limit=5;draw();});more.addEventListener('click',function(){limit+=10;draw();});draw();return root;}
function install(){if(!reviews)return false;var panels=document.querySelectorAll('#divTabYorumlar');for(var i=0;i<panels.length;i++){var area=panels[i].querySelector('.tabYorumlar');if(!area)continue;var existing=document.getElementById('meysa-reviews-v8');if(existing&&existing.parentNode===area)return true;if(existing)existing.remove();area.insertBefore(build(),area.firstChild);return true;}return false;}
function start(){if(loading)return;loading=true;var style=el('style');style.id='meysa-reviews-v8-css';style.textContent=css;document.head.appendChild(style);fetch(BASE+FILES[path],{cache:'no-cache'}).then(function(res){if(!res.ok)throw Error('HTTP '+res.status);return res.json();}).then(function(data){if(!Array.isArray(data))throw Error('Geçersiz yorum verisi');reviews=data.filter(function(r){return r&&typeof r.text==='string'&&typeof r.name==='string'&&Number(r.rating)>=1&&Number(r.rating)<=5;});install();var timer;new MutationObserver(function(){clearTimeout(timer);timer=setTimeout(install,180);}).observe(document.body,{childList:true,subtree:true});}).catch(function(e){console.error('MEYSA Reviews V8:',e);});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
