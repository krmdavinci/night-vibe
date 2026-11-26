(function(){
'use strict';
const $=s=>document.querySelector(s);
const T=window.NV_STR;
const X={
en:{photos:'Photos',photosNear:'Photos taken near this spot (Wikimedia Commons). They might not show the venue itself.',photosOwn:'Photos of this place (Wikimedia Commons)',photoNone:'No free photos found for this place. Most small venues have none in open sources.',photoMaps:'See photos on Google Maps',photoBy:'by',close:'Close',showOnMap:'Show on map',loadingPh:'Looking for photos...'},
ar:{photos:'صور',photosNear:'صور مأخوذة قرب المكان ده (ويكيميديا كومنز). ممكن متكونش للمكان نفسه.',photosOwn:'صور للمكان ده (ويكيميديا كومنز)',photoNone:'مفيش صور مجانية للمكان ده. أغلب الأماكن الصغيرة معندهاش في المصادر المفتوحة.',photoMaps:'شوف الصور على خرائط جوجل',photoBy:'تصوير',close:'إغلاق',showOnMap:'على الخريطة',loadingPh:'بدور على صور...'},
tr:{photos:'Fotoğraflar',photosNear:'Bu noktanın yakınında çekilmiş fotoğraflar (Wikimedia Commons). Mekanın kendisi olmayabilir.',photosOwn:'Bu mekanın fotoğrafları (Wikimedia Commons)',photoNone:'Bu mekan için ücretsiz fotoğraf bulunamadı. Küçük mekanların çoğunun açık kaynaklarda fotoğrafı yok.',photoMaps:"Google Haritalar'da fotoğrafları gör",photoBy:'fotoğraf:',close:'Kapat',showOnMap:'Haritada göster',loadingPh:'Fotoğraflar aranıyor...'},
ru:{photos:'Фото',photosNear:'Фото, снятые рядом с этим местом (Wikimedia Commons). Может быть не само заведение.',photosOwn:'Фото этого места (Wikimedia Commons)',photoNone:'Свободных фото этого места не найдено. У большинства небольших заведений их нет в открытых источниках.',photoMaps:'Смотреть фото в Google Картах',photoBy:'автор:',close:'Закрыть',showOnMap:'Показать на карте',loadingPh:'Ищем фото...'}};
for(const k in X)Object.assign(T[k],X[k]);

const X2={
en:{hh:"HOTELS",hn:"Crashing after the party? Pick dates and open an official hotel search for this city. Booking and payment happen on their site, not ours.",hi:"Check-in",ho:"Check-out",cc:"LIVE CONCERTS",cn:"Concert dates and tickets need an official ticketing source. Without one, here are the official sites to check:",ct:"Tickets",ce:"No concerts found nearby in Ticketmaster.",cs:"Searching concerts...",cy:"CYBER CAFES",jy:["Ping: 999. Snacks: overpriced. Vibes: 2009.", "Come for the games, leave with a sore wrist.", "Someone nearby is screaming at a headset."],fancy:'FANCY FOOD',cafe:'CAFES',t_fancy:'Fancy restaurant',t_cafe:'Cafe',
 jf:['Reservation required. So is a second mortgage.','Portions: tiny. Prices: not tiny.','The waiter will explain the bread. Nod politely.','Dress code: look like you do not check your bank balance.'],jc:['Come for the coffee, stay for the Wi-Fi and the existential dread.','Oat milk costs extra. So does your dignity.','Laptop open, productivity closed.','Yes, you will order "just a coffee" and a cake.'],
 ticker:['FIND THE PARTY','SLEEP IS OVERRATED','NO MORE "I DON\'T KNOW, WHAT DO YOU WANT TO DO?"','YOUR COUCH WILL SURVIVE','"ONE DRINK" IS A LIE','FUTURE YOU WILL BLAME PAST YOU. WORTH IT.','CLUBS','BARS','LOUNGES','STATISTICALLY, YOU WILL DANCE TERRIBLY','NOBODY LOOKS GOOD IN CLUB LIGHTING. EVERYONE LOOKS HAPPY.','DRINK WATER, BE A LEGEND','YOUR PHONE BATTERY IS A SUGGESTION','SHISHA','LIVE MUSIC','THE KEBAB AT 3 AM IS PART OF THE PLAN','BE A LEGEND, NOT A GROUP CHAT SCREENSHOT','TEXT YOUR EX? NO.','FANCY RESTAURANTS FOR WHEN YOU HAVE MONEY','CAFES FOR WHEN YOU HAVE NONE','WORTH IT']},
ar:{hh:"فنادق",hn:"هتنام فين بعد الحفلة؟ اختار التواريخ وافتح بحث فنادق رسمي للمدينة دي. الحجز والدفع على موقعهم مش عندنا.",hi:"دخول",ho:"خروج",cc:"حفلات موسيقية",cn:"مواعيد الحفلات والتذاكر محتاجة مصدر تذاكر رسمي. لحد ما يتوصل، دي المواقع الرسمية:",ct:"تذاكر",ce:"مفيش حفلات قريبة في Ticketmaster.",cs:"بدور على حفلات...",cy:"سيبر",jy:["البنج ٩٩٩. الأكل غالي. الجو ٢٠٠٩.", "جاي تلعب، راجع بإيد وجعاك.", "فيه حد جنبك بيزعق في الهيدسيت."],fancy:'مطاعم فخمة',cafe:'كافيهات',t_fancy:'مطعم فخم',t_cafe:'كافيه',
 jf:['لازم حجز. ولازم قرض تاني.','الأطباق صغيرة. الحساب مش صغير.','الجرسون هيشرحلك العيش. اهز راسك بأدب.','الدريس كود: اتصرف كأنك مش بتبص على رصيدك.'],jc:['جاي للقهوة، قاعد للواي فاي والقلق الوجودي.','حليب الشوفان بزيادة. وكرامتك كمان.','اللابتوب مفتوح والإنتاجية مقفولة.','أيوه هتطلب "قهوة بس" وكيكة.'],
 ticker:['لاقي الحفلة','النوم مبالغ فيه','خلاص "مش عارف، انت عايز تعمل إيه؟"','الكنبة هتعيش من غيرك','"كوباية بس" كدبة','نسختك الجاية هتشتمك. هتستاهل.','نوادي','بارات','لاونج','إحصائيا هترقص وحش','محدش حلو في إضاءة النادي. كله مبسوط.','اشرب مية وكن أسطورة','بطارية تليفونك مجرد اقتراح','شيشة','موسيقى حية','كبدة الساعة ٣ الفجر جزء من الخطة','كن أسطورة مش سكرين شوت في الجروب','تبعت للإكس؟ لأ.','مطاعم فخمة لما يبقى معاك فلوس','كافيهات لما مفيش','هتستاهل']},
tr:{hh:"OTELLER",hn:"Partiden sonra nerede uyuyacaksın? Tarihleri seç, bu şehir için resmi otel aramasını aç. Rezervasyon ve ödeme onların sitesinde, bizde değil.",hi:"Giriş",ho:"Çıkış",cc:"CANLI KONSERLER",cn:"Konser tarihleri ve biletler resmi bir bilet kaynağı ister. O bağlanana kadar bakacağın resmi siteler:",ct:"Bilet",ce:"Ticketmaster'da yakında konser bulunamadı.",cs:"Konserler aranıyor...",cy:"SİBER",jy:["Ping: 999. Atıştırmalık pahalı. Hava: 2009.", "Oyun için gel, bileğin ağrıyla çık.", "Yakınlarda biri kulaklığa bağırıyor."],fancy:'LÜKS YEMEK',cafe:'KAFELER',t_fancy:'Şık restoran',t_cafe:'Kafe',
 jf:['Rezervasyon şart. İkinci bir kredi de.','Porsiyonlar küçük. Hesap küçük değil.','Garson ekmeği anlatacak. Kibarca başını salla.','Dress code: banka bakiyene bakmıyormuş gibi görün.'],jc:['Kahve için gel, Wi-Fi ve varoluşsal sıkıntı için kal.','Yulaf sütü ekstra. Onurun da.','Laptop açık, verimlilik kapalı.','Evet, "sadece kahve" diyip pasta da alacaksın.'],
 ticker:['PARTİYİ BUL','UYKU ABARTILIYOR','"NE YAPALIM?" "BİLMİYORUM, SEN NE İSTERSİN?" DİZİSİ BİTTİ','KANEPE SENSİZ DE YAŞAR','"TEK İÇKİ" BÜYÜK BİR YALAN','YARINKİ SEN DÜNKÜ SENİ SUÇLAYACAK. DEĞER.','KULÜPLER','BARLAR','LOUNGE','İSTATİSTİKSEL OLARAK KÖTÜ DANS EDECEKSİN','KULÜP IŞIĞINDA KİMSE İYİ GÖRÜNMEZ. HERKES MUTLU GÖRÜNÜR.','SU İÇ, EFSANE OL','TELEFON ŞARJI SADECE BİR ÖNERİ','NARGİLE','CANLI MÜZİK','SABAH 3 DÖNERİ PLANIN PARÇASI','EFSANE OL, GRUP SS’İ DEĞİL','ESKİ SEVGİLİYE YAZMAK? HAYIR.','PARAN VARSA ŞIK RESTORAN','PARAN YOKSA KAFE','DEĞER']},
ru:{hh:"ОТЕЛИ",hn:"Где спать после тусовки? Выбери даты и открой официальный поиск отелей по городу. Бронь и оплата на их сайте, не у нас.",hi:"Заезд",ho:"Выезд",cc:"КОНЦЕРТЫ",cn:"Для дат и билетов нужен официальный источник билетов. Пока его нет, вот официальные сайты:",ct:"Билеты",ce:"Рядом концертов в Ticketmaster не найдено.",cs:"Ищем концерты...",cy:"КИБЕРЫ",jy:["Пинг 999. Снеки дорогие. Атмосфера 2009.", "Приходи играть, уходи с больной кистью.", "Кто-то рядом орёт в гарнитуру."],fancy:'РЕСТОРАНЫ',cafe:'КАФЕ',t_fancy:'Дорогой ресторан',t_cafe:'Кафе',
 jf:['Нужна бронь. И ещё один кредит.','Порции маленькие. Счёт нет.','Официант объяснит про хлеб. Вежливо кивай.','Дресс-код: выгляди так, будто не смотришь на баланс.'],jc:['Приходи за кофе, оставайся за вайфаем и экзистенциальной тоской.','Овсяное молоко за доплату. Как и твоё достоинство.','Ноутбук открыт, продуктивность закрыта.','Да, ты закажешь "просто кофе" и ещё пирожное.'],
 ticker:['НАЙДИ ТУСОВКУ','СОН ПЕРЕОЦЕНЁН','ХВАТИТ "НЕ ЗНАЮ, ЧТО ХОЧЕШЬ ТЫ?"','ДИВАН ПЕРЕЖИВЁТ','"ТОЛЬКО ОДНУ" — ЛОЖЬ','ЗАВТРАШНИЙ ТЫ ПРОКЛЯНЁТ ВЧЕРАШНЕГО. ЭТО СТОИТ ТОГО.','КЛУБЫ','БАРЫ','ЛАУНЖИ','СТАТИСТИЧЕСКИ ТЫ БУДЕШЬ ПЛОХО ТАНЦЕВАТЬ','В КЛУБНОМ СВЕТЕ НИКТО НЕ КРАСИВ. ВСЕ СЧАСТЛИВЫ.','ПЕЙ ВОДУ, БУДЬ ЛЕГЕНДОЙ','ЗАРЯД ТЕЛЕФОНА — ЭТО ПРОСТО СОВЕТ','КАЛЬЯН','ЖИВАЯ МУЗЫКА','ШАУРМА В 3 УТРА — ЧАСТЬ ПЛАНА','БУДЬ ЛЕГЕНДОЙ, А НЕ СКРИНОМ В ЧАТЕ','НАПИСАТЬ БЫВШЕЙ? НЕТ.','РЕСТОРАНЫ — КОГДА ЕСТЬ ДЕНЬГИ','КАФЕ — КОГДА НЕТ','ЭТО СТОИТ ТОГО']}};
for(const k in X2){const o=X2[k];T[k].fancy=o.fancy;T[k].cafe=o.cafe;T[k].t_fancy=o.t_fancy;T[k].t_cafe=o.t_cafe;T[k].cc=o.cc;T[k].hh=o.hh;T[k].hn=o.hn;T[k].hi=o.hi;T[k].ho=o.ho;T[k].cn=o.cn;T[k].ct=o.ct;T[k].ce=o.ce;T[k].cs=o.cs;T[k].cyber=o.cy;T[k].t_cyber=o.cy;T[k].jokes.cyber=o.jy;T[k].jokes.fancy=o.jf;T[k].jokes.cafe=o.jc;T[k].ticker=o.ticker}
if(window.NV_APPLY2)NV_APPLY2();
const NEWT=['cinema','theatre','museum','art','karaoke','games','billiards','bowling','attract','park','sport','market','casino'];
const COLORS={cinema:'#ff6b6b',theatre:'#d97bff',museum:'#ffd166',art:'#9be7ff',karaoke:'#ff7ad9',games:'#7affc8',billiards:'#4dffa6',bowling:'#ffa14d',attract:'#ff5dac',park:'#6bff6b',sport:'#5db4ff',market:'#ffb88a',casino:'#ff4d4d',club:'#ff2e93',bar:'#16f2ff',pub:'#ffe14d',live:'#b36bff',shisha:'#3dff8a',garden:'#ff8a3d',fancy:'#ffffff',cafe:'#ff9a8a',cyber:'#7dff3d'};
const TYPES=['club','bar','pub','live','shisha','garden',...NEWT,'fancy','cafe','cyber'];
const DAYTYPES=['fancy','cafe','cyber'];
const CITIES=[
 {n:'Istanbul',tr:'İstanbul',ru:'Стамбул',a:'\u0625\u0633\u0637\u0646\u0628\u0648\u0644',lat:41.0370,lon:28.9850,tz:'Europe/Istanbul'},
 {n:'Cairo',tr:'Kahire',ru:'Каир',a:'\u0627\u0644\u0642\u0627\u0647\u0631\u0629',lat:30.0444,lon:31.2357,tz:'Africa/Cairo'},
 {n:'Trabzon',tr:'Trabzon',ru:'Трабзон',a:'\u062A\u0631\u0627\u0628\u0632\u0648\u0646',lat:41.0027,lon:39.7168,tz:'Europe/Istanbul'},
 {n:'Dubai',tr:'Dubai',ru:'Дубай',a:'\u062F\u0628\u064A',lat:25.2048,lon:55.2708,tz:'Asia/Dubai'},
 {n:'Moscow',tr:'Moskova',ru:'Москва',a:'\u0645\u0648\u0633\u0643\u0648',lat:55.7558,lon:37.6173,tz:'Europe/Moscow'},
 {n:'Berlin',tr:'Berlin',ru:'Берлин',a:'\u0628\u0631\u0644\u064A\u0646',lat:52.5200,lon:13.4050,tz:'Europe/Berlin'},
 {n:'London',tr:'Londra',ru:'Лондон',a:'\u0644\u0646\u062F\u0646',lat:51.5072,lon:-0.1276,tz:'Europe/London'},
 {n:'Barcelona',tr:'Barselona',ru:'Барселона',a:'\u0628\u0631\u0634\u0644\u0648\u0646\u0629',lat:41.3874,lon:2.1686,tz:'Europe/Madrid'},
 {n:'New York',tr:'New York',ru:'Нью-Йорк',a:'\u0646\u064A\u0648\u064A\u0648\u0631\u0643',lat:40.7128,lon:-74.0060,tz:'America/New_York'}
];
const MIRRORS=['https://overpass-api.de/api/interpreter','https://overpass.kumi.systems/api/interpreter','https://overpass.private.coffee/api/interpreter','https://maps.mail.ru/osm/tools/overpass/api/interpreter'];

let lang=localStorage.getItem('nv_lang')||({ar:'ar',tr:'tr',ru:'ru'}[(navigator.language||'en').slice(0,2)])||'en';
let state={center:null,tz:null,spots:[],filter:'all',markers:{},selected:null,runId:0};
let plan=[];try{plan=JSON.parse(localStorage.getItem('nv_plan')||'[]')}catch(e){}
const t=k=>T[lang][k];

/* ---------- i18n ---------- */
function applyLang(){
  document.documentElement.lang=lang;document.body.dir=T[lang].bdir;$('#langSel').value=lang;
  document.querySelectorAll('[data-t]').forEach(e=>{const k=e.dataset.t;if(k==='musicOn')return;const v=T[lang][k];if(typeof v==='string')e.textContent=v});
  document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));
  renderFilters();renderCities();renderTicker();renderMuteLabel();render();renderPlan();
}
let quipI=0,quipT=null;
function startQuips(){const q=T[lang].quips;quipI=Math.floor(Math.random()*q.length);const el=$('#quip');el.textContent=q[quipI];clearInterval(quipT);quipT=setInterval(()=>{quipI=(quipI+1)%T[lang].quips.length;el.textContent=T[lang].quips[quipI]},5000)}
function renderTicker(){const s=t('ticker').join('  \u2605  ');$('#ticker').textContent=(s+'  \u2605  ').repeat(3)}
function renderCities(){const c=$('#cities');c.innerHTML='';CITIES.forEach(ci=>{const b=document.createElement('button');b.className='chip';b.textContent=(lang==='ar'?ci.a:(ci[lang]||ci.n));b.onclick=()=>{$('#q').value=ci.n;loadCenter({lat:ci.lat,lon:ci.lon,tz:ci.tz,label:ci.n})};c.appendChild(b)})}
function renderFilters(){const f=$('#typeFilters');f.innerHTML='';['all',...TYPES].forEach(k=>{const b=document.createElement('button');b.className='chip'+(state.filter===k?' on':'');b.textContent=t(k);b.onclick=()=>{state.filter=k;renderFilters();render()};f.appendChild(b)})}

/* ---------- music (YouTube official embed) ---------- */
let player=null,musicOn=false,ytReady=false,wantSound=false,wantPause=false,watchdog=null,mutedWatch=null;
const START=(window.NV_SONG&&NV_SONG.start)||0;
function loadYT(){
  if(window.YT&&YT.Player){initPlayer();return}
  if(document.getElementById('ytapi'))return;
  const s=document.createElement('script');s.id='ytapi';s.src='https://www.youtube.com/iframe_api';document.head.appendChild(s);
  window.onYouTubeIframeAPIReady=initPlayer;
}
/* SONG NOTE (do not break): mobile browsers only allow MUTED autoplay. The video must start muted
   on page load (autoplay:1, mute:1) and the PRESS START tap only calls unMute(). v6-v7 changed this to
   autoplay:0 and called playVideo() after the tap, which phones block. Keep the iframe >=200x200 and
   inside the viewport (opacity .02, not display:none) or playback is blocked. Test on a phone after any edit. */
function initPlayer(){
  if(player)return;
  const el=document.createElement('div');el.id='ytp';$('#yt').appendChild(el);
  player=new YT.Player('ytp',{width:'200',height:'200',videoId:NV_SONG.id,playerVars:{autoplay:1,mute:1,controls:1,playsinline:1,start:START,rel:0,iv_load_policy:3,fs:0,origin:location.origin},events:{
    onReady:()=>{ytReady=true;try{player.mute();player.setVolume(NV_SONG.volume||70);player.playVideo()}catch(e){}applyWant();
      clearTimeout(mutedWatch);mutedWatch=setTimeout(()=>{let st=-1;try{st=player.getPlayerState()}catch(e){}if(st!==1&&wantSound)showTapFallback()},4000)},
    onStateChange:e=>{
      if(e.data===YT.PlayerState.ENDED){player.seekTo(START,true);player.playVideo()}
      if(e.data===YT.PlayerState.PLAYING){if(wantSound&&!wantPause){try{player.unMute();player.setVolume(NV_SONG.volume||70)}catch(x){}musicOn=true;hideTapFallback()}}
      renderMuteLabel()},
    onAutoplayBlocked:()=>{showTapFallback()},
    onError:()=>{musicOn=false;showTapFallback();renderMuteLabel()}}});
}
let retryOn=false,failN=0;
function retryTap(){ // runs inside a real user tap, the only place phones allow sound to start
  if(!player||!ytReady||wantPause)return;
  wantSound=true;try{player.unMute();player.setVolume(NV_SONG.volume||70);player.playVideo()}catch(e){}
  clearTimeout(watchdog);watchdog=setTimeout(()=>{let st=-1,mu=true;try{st=player.getPlayerState();mu=player.isMuted()}catch(e){}
    if(st===1&&!mu){musicOn=true;hideTapFallback();renderMuteLabel()}else{failN++;if(failN>=2)revealPlayer()}},1800)}
function showTapFallback(){
  musicOn=false;
  if(!document.getElementById('songTap')){const b=document.createElement('button');b.id='songTap';b.className='chip small';b.textContent='\u266A \u25B6';b.setAttribute('aria-label','play song');b.onclick=e=>{e.stopPropagation();retryTap()};document.body.appendChild(b)}
  if(!retryOn){retryOn=true;document.addEventListener('pointerdown',docTap,true)}
}
function docTap(e){if(e.target.closest&&e.target.closest('#songTap,#yt,#muteBtn'))return;retryTap()}
function revealPlayer(){const y=$('#yt');y.classList.add('show');if(!document.getElementById('ytX')){const x=document.createElement('button');x.id='ytX';x.textContent='\u2715';x.onclick=()=>{y.classList.remove('show');x.remove()};y.parentNode.appendChild(x)}}
function hideTapFallback(){
  const y=$('#yt');y.classList.remove('show');const x=document.getElementById('ytX');if(x)x.remove();
  const b=document.getElementById('songTap');if(b)b.remove();
  if(retryOn){retryOn=false;document.removeEventListener('pointerdown',docTap,true)}
  clearTimeout(watchdog);failN=0}
function applyWant(){
  if(!ytReady)return;
  if(wantPause){try{player.mute()}catch(e){}musicOn=false;hideTapFallback()}
  else if(wantSound){
    try{player.unMute();player.setVolume(NV_SONG.volume||70);if(player.getPlayerState()!==1)player.playVideo()}catch(e){}
    musicOn=true;
    clearTimeout(watchdog);watchdog=setTimeout(()=>{let st=-1,mu=true;try{st=player.getPlayerState();mu=player.isMuted()}catch(e){}if(st!==1||mu){musicOn=false;showTapFallback();renderMuteLabel()}},2500)}
  renderMuteLabel();
}
function setMusic(on){
  wantSound=on;wantPause=!on;musicOn=on;
  if(!player)loadYT();
  applyWant();
  if(on&&!ytReady){clearTimeout(watchdog);watchdog=setTimeout(()=>{if(!ytReady||(player&&player.getPlayerState&&player.getPlayerState()!==1)){musicOn=false;showTapFallback();renderMuteLabel()}},6000)}
}
function renderMuteLabel(){$('#muteTxt').textContent=musicOn?t('musicOn'):t('musicOff');$('#muteIcon').textContent=musicOn?'\u266B':'\u2715'}
loadYT();
$('#enterBtn').onclick=()=>{setMusic(true);closeGate()};
$('#enterMute').onclick=()=>{setMusic(false);closeGate()};
function closeGate(){document.body.classList.remove('lock');const g=$('#gate');g.classList.add('out');setTimeout(()=>g.remove(),700)}
$('#muteBtn').onclick=()=>setMusic(!musicOn);
$('#langSel').onchange=()=>{lang=$('#langSel').value;localStorage.setItem('nv_lang',lang);applyLang();startQuips()};

/* ---------- map ---------- */
const map=L.map('map',{zoomControl:true,attributionControl:true}).setView([41.037,28.985],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors',maxZoom:19,className:'darktiles'}).addTo(map);
const layer=L.layerGroup().addTo(map);let meMarker=null,circle=null;
function pinIcon(c,me){return L.divIcon({className:'',html:`<div class="pin${me?' me':''}" style="--c:${c}"></div>`,iconSize:[12,12],iconAnchor:[6,6]})}

/* ---------- data ---------- */
function status(msg,err){const s=$('#status');s.textContent=msg;s.className='status'+(err?' err':'')}
async function geocode(q){
  const r=await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=en&q='+encodeURIComponent(q));
  const j=await r.json();if(!j.length)throw new Error('city');
  return {lat:+j[0].lat,lon:+j[0].lon,label:j[0].display_name.split(',')[0],tz:null};
}
function overpassQuery(c,r){
  return `[out:json][timeout:25];(nwr["amenity"~"^(nightclub|bar|pub|biergarten|music_venue|hookah_lounge)$"](around:${r},${c.lat},${c.lon});nwr["live_music"="yes"](around:${r},${c.lat},${c.lon});nwr["amenity"="internet_cafe"](around:${r},${c.lat},${c.lon});nwr["amenity"="restaurant"]["cuisine"~"fine_dining"](around:${r},${c.lat},${c.lon});nwr["amenity"="restaurant"][~"^(michelin.*|stars)$"~"."](around:${r},${c.lat},${c.lon});nwr["amenity"="restaurant"]["dress_code"~"smart|formal|semi"](around:${r},${c.lat},${c.lon});nwr["amenity"="restaurant"]["reservation"="required"](around:${r},${c.lat},${c.lon});nwr["amenity"="cafe"]["name"](around:${Math.min(r,3500)},${c.lat},${c.lon}););out center tags 900;`;
}
function extraQuery(c,r){const A=`(around:${r},${c.lat},${c.lon})`;
  return `[out:json][timeout:30];(nwr["amenity"~"^(cinema|theatre|arts_centre|events_venue|karaoke_box|casino|amusement_arcade|marketplace)$"]${A};nwr["tourism"~"^(museum|gallery|theme_park|zoo|aquarium|attraction)$"]["name"]${A};nwr["leisure"~"^(bowling_alley|amusement_arcade|escape_game|adult_gaming_centre|trampoline_park|miniature_golf|water_park|ice_rink|sports_centre|fitness_centre|stadium)$"]${A};nwr["sport"~"billiards|pool|snooker"]["name"]${A};nwr["leisure"="park"]["name"]${Math.min(r,5000)>0?`(around:${Math.min(r,4000)},${c.lat},${c.lon})`:''};);out center tags 1500;`}
async function fetchOverpass(q){
  const ctrls=[];
  const tries=MIRRORS.map((u,i)=>new Promise((res,rej)=>{
    setTimeout(async()=>{
      const ac=new AbortController();ctrls.push(ac);const to=setTimeout(()=>ac.abort(),28000);
      try{const r=await fetch(u,{method:'POST',body:'data='+encodeURIComponent(q),headers:{'Content-Type':'application/x-www-form-urlencoded'},signal:ac.signal});
        if(!r.ok)throw new Error(r.status);const j=await r.json();if(!j.elements)throw new Error('bad');res(j)}catch(e){rej(e)}finally{clearTimeout(to)}
    },i*1200);
  }));
  const j=await Promise.any(tries);ctrls.forEach(a=>{try{a.abort()}catch(e){}});return j;
}
function classify(tg){
  const a=tg.amenity,l=tg.leisure,tr=tg.tourism;
  if(a==='cinema')return 'cinema';
  if(a==='theatre'||a==='arts_centre'||a==='events_venue')return 'theatre';
  if(tr==='museum')return 'museum';
  if(tr==='gallery')return 'art';
  if(a==='karaoke_box')return 'karaoke';
  if(a==='casino')return 'casino';
  if(l==='bowling_alley')return 'bowling';
  if(a==='amusement_arcade'||l==='amusement_arcade'||l==='escape_game'||l==='adult_gaming_centre'||l==='trampoline_park')return 'games';
  if(/billiards|pool|snooker/.test(tg.sport||'')&&!['bar','pub','nightclub'].includes(a))return 'billiards';
  if(['theme_park','zoo','aquarium','attraction'].includes(tr)||['water_park','miniature_golf','ice_rink'].includes(l))return 'attract';
  if(l==='park')return 'park';
  if(['sports_centre','fitness_centre','stadium'].includes(l))return 'sport';
  if(a==='marketplace')return 'market';
  if(a==='restaurant')return 'fancy';
  if(a==='cafe')return 'cafe';
  if(a==='internet_cafe')return 'cyber';
  if(a==='nightclub')return 'club';
  if(a==='hookah_lounge'||tg.shisha==='yes'||tg.cuisine==='shisha')return 'shisha';
  if(a==='music_venue'||(tg.live_music==='yes'&&a!=='nightclub'))return a==='bar'||a==='pub'?(a==='pub'?'pub':'bar'):'live';
  if(a==='pub')return 'pub';
  if(a==='biergarten')return 'garden';
  if(a==='bar')return 'bar';
  return 'live';
}
function dist(lat1,lon1,lat2,lon2){const R=6371000,p=Math.PI/180;const a=Math.sin((lat2-lat1)*p/2)**2+Math.cos(lat1*p)*Math.cos(lat2*p)*Math.sin((lon2-lon1)*p/2)**2;return 2*R*Math.asin(Math.sqrt(a))}
function normalize(j,c){
  const out=[];const seen=new Set();
  for(const e of j.elements){
    const tg=e.tags||{};const lat=e.lat??e.center?.lat,lon=e.lon??e.center?.lon;if(lat==null||lon==null)continue;
    const key=e.type+e.id;if(seen.has(key))continue;seen.add(key);
    const type=classify(tg);
    const addr=[[tg['addr:street'],tg['addr:housenumber']].filter(Boolean).join(' '),tg['addr:suburb']||tg['addr:district']||'',tg['addr:city']||''].filter(Boolean).join(', ')||tg['addr:full']||'';
    const name=tg['name:'+lang]||tg.name||tg['name:en']||'';
    const web=tg.website||tg['contact:website']||tg.url||'';
    const phone=(tg.phone||tg['contact:phone']||tg.mobile||tg['contact:mobile']||'').split(';')[0].trim();
    const info=[name,addr,tg.opening_hours,web,phone,tg['contact:instagram']].filter(Boolean).length;
    out.push({id:key,name,type,lat,lon,addr,hours:tg.opening_hours||'',web:/^https?:\/\//.test(web)?web:(web?'https://'+web:''),phone,insta:tg['contact:instagram']||tg.instagram||'',fb:tg['contact:facebook']||tg.facebook||'',cuisine:(tg.cuisine||'').split(';').slice(0,3).join(', ').replace(/_/g,' '),wc:tg.wheelchair||'',dist:dist(c.lat,c.lon,lat,lon),info,live:tg.live_music==='yes',tags:tg});
  }
  return out;
}
async function loadCenter(c){
  const run=++state.runId;state.center=c;state.tz=c.tz;
  status(t('searching'));
  map.setView([c.lat,c.lon],map.getZoom()<12?13:map.getZoom());
  if(meMarker)map.removeLayer(meMarker);meMarker=L.marker([c.lat,c.lon],{icon:pinIcon('#ffe14d',true)}).addTo(map);
  const r=+$('#radius').value*1000;
  if(circle)map.removeLayer(circle);circle=L.circle([c.lat,c.lon],{radius:r,color:'#ff2e93',weight:1,fillOpacity:.04}).addTo(map);
  map.fitBounds(circle.getBounds());
  const slug=snapSlug(c);
  const cacheKey='nv_'+c.lat.toFixed(3)+'_'+c.lon.toFixed(3)+'_'+r;
  try{
    let j,src='live';
    if(slug){try{const sn=await loadSnap(slug);j={elements:sn.els.map(e=>({type:e.t,id:e.i,lat:e.la,lon:e.lo,tags:e.g}))};src='snap:'+sn.ts;state.hasExtra=!!sn.hasExtra}catch(e){j=null}}
    if(!j){
      const cached=sessionStorage.getItem(cacheKey);
      if(cached)j=JSON.parse(cached);
      else{
        try{j=await fetchOverpass(overpassQuery(c,r));try{sessionStorage.setItem(cacheKey,JSON.stringify(j))}catch(e){}}
        catch(e){
          const near=CITIES.find(ci=>dist(c.lat,c.lon,ci.lat,ci.lon)<=15000);
          if(!near)throw e;
          const sn=await loadSnap(near.n.toLowerCase().replace(' ','-'));j={elements:sn.els.map(e=>({type:e.t,id:e.i,lat:e.la,lon:e.lo,tags:e.g}))};src='snap:'+sn.ts}
      }
    }
    if(run!==state.runId)return;
    state.src=src;
    state.spots=normalize(j,c).filter(s=>s.dist<=r);
    render();
    (async()=>{if(state.hasExtra&&src.startsWith('snap'))return;try{const ck=cacheKey+'_x';let j2;const cc=sessionStorage.getItem(ck);if(cc)j2=JSON.parse(cc);else{j2=await fetchOverpass(extraQuery(c,r));try{sessionStorage.setItem(ck,JSON.stringify(j2))}catch(e){}}
      if(run!==state.runId)return;const have=new Set(state.spots.map(s=>s.id));
      state.spots=state.spots.concat(normalize(j2,c).filter(s=>s.dist<=r&&!have.has(s.id)));render()}catch(e){}})();
  }catch(e){if(run!==state.runId)return;state.spots=[];state.src='';render();status(t('err'),true)}
}
function snapSlug(c){const ci=CITIES.find(ci=>dist(c.lat,c.lon,ci.lat,ci.lon)<1500);return ci?ci.n.toLowerCase().replace(' ','-'):null}
async function loadSnap(slug){const r=await fetch('data/'+slug+'.json');if(!r.ok)throw new Error('snap');const j=await r.json();for(const sfx of ['-food','-cyber','-extra']){try{const f=await fetch('data/'+slug+sfx+'.json');if(f.ok){const fj=await f.json();if(fj&&fj.els){j.els=j.els.concat(fj.els);if(sfx==='-extra')j.hasExtra=1}}}catch(e){}}return j}
function nearMe(){
  if(!navigator.geolocation){status(t('geoErr'),true);return}
  status(t('searching'));
  navigator.geolocation.getCurrentPosition(p=>loadCenter({lat:p.coords.latitude,lon:p.coords.longitude,tz:Intl.DateTimeFormat().resolvedOptions().timeZone,label:'me'}),()=>status(t('geoErr'),true),{timeout:12000,maximumAge:60000});
}

/* ---------- opening hours (basic parser) ---------- */
const DAYS=['Su','Mo','Tu','We','Th','Fr','Sa'];
function nowIn(tz){
  try{const f=new Intl.DateTimeFormat('en-US',{timeZone:tz,weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());
    const g=k=>f.find(p=>p.type===k).value;const wd=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday'));return {d:wd,m:(+g('hour')%24)*60+(+g('minute'))}}catch(e){return null}
}
function dayIdx(s){return DAYS.indexOf(s)}
function parseDays(s){
  const set=new Set();
  for(const part of s.split(',')){const p=part.trim();const m=p.match(/^([A-Z][a-z])(?:-([A-Z][a-z]))?$/);if(!m)return null;const a=dayIdx(m[1]),b=m[2]?dayIdx(m[2]):a;if(a<0||b<0)return null;let i=a;for(let n=0;n<8;n++){set.add(i);if(i===b)break;i=(i+1)%7}}
  return set;
}
function isOpen(h,tz){
  if(!h||!tz)return null;const now=nowIn(tz);if(!now)return null;
  if(h.trim()==='24/7')return true;
  let res=null;let any=false;
  for(const rule of h.split(';')){
    const r=rule.trim();if(!r)continue;
    const m=r.match(/^(?:([A-Za-z,\- ]+?)\s+)?((?:\d{1,2}:\d{2}-\d{1,2}:\d{2}(?:\s*,\s*)?)+|off|closed)$/i);
    if(!m)return null;
    let days;if(m[1]){days=parseDays(m[1].replace(/\s/g,''));if(!days)return null}else days=new Set([0,1,2,3,4,5,6]);
    any=true;
    if(/off|closed/i.test(m[2])){if(days.has(now.d))res=false;continue}
    for(const rg of m[2].split(',')){
      const x=rg.trim().match(/(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})/);if(!x)return null;
      const s=+x[1]*60+ +x[2],e=+x[3]*60+ +x[4];
      if(e>s){if(days.has(now.d)&&now.m>=s&&now.m<e)res=true;else if(res===null&&days.has(now.d))res=false}
      else{ // overnight
        if(days.has(now.d)&&now.m>=s)res=true;
        else if(days.has((now.d+6)%7)&&now.m<e)res=true;
        else if(res===null&&(days.has(now.d)||days.has((now.d+6)%7)))res=false}
    }
  }
  return any?res:null;
}

/* ---------- render ---------- */
function visible(){
  let a=state.spots.filter(s=>s.name||true);
  const f=state.filter;if(f==='all')a=a.filter(s=>!DAYTYPES.includes(s.type));else a=a.filter(s=>s.type===f||(f==='live'&&s.live));
  const q=$('#nameQ').value.trim().toLowerCase();if(q)a=a.filter(s=>s.name.toLowerCase().includes(q));
  a.forEach(s=>s.open=isOpen(s.hours,state.tz));
  if($('#openOnly').checked)a=a.filter(s=>s.open===true);
  const so=$('#sort').value;
  a=a.slice().sort((x,y)=>{
    if(so==='name')return (x.name||'~').localeCompare(y.name||'~');
    if(so==='info')return y.info-x.info||x.dist-y.dist;
    return x.dist-y.dist});
  return a;
}
function fmtDist(m){return m<1000?Math.round(m/10)*10+' m':(m/1000).toFixed(1)+' km'}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function render(){
  const list=visible();layer.clearLayers();state.markers={};
  const el=$('#list');el.innerHTML='';
  if(state.center){const er=$('#status').classList.contains('err');if(list.length)status(t('found')(list.length)+(state.src&&state.src.startsWith('snap')?' \u2022 '+t('snapNote')(state.src.slice(5)):''));else if(!er)status(t('none'))}
  if(!list.length&&state.center&&!$('#status').classList.contains('err')){el.innerHTML=`<div class="empty">${t('none')}</div>`}
  list.slice(0,300).forEach(s=>{
    const col=COLORS[s.type];const nm=s.name||t('unnamed');
    const mk=L.marker([s.lat,s.lon],{icon:pinIcon(col)}).addTo(layer);
    mk.on('click',()=>{highlight(s.id,true);openDetail(s)});state.markers[s.id]=mk;
    const c=document.createElement('div');c.className='card';c.id='c_'+s.id;c.style.setProperty('--c',col);
    const fav=plan.some(p=>p.id===s.id);
    c.innerHTML=`<h3><span>${esc(nm)}</span><button class="heart${fav?' on':''}" aria-label="save">${fav?'\u2665':'\u2661'}</button></h3>
     <div class="joke">${esc(joke(s))}</div><div><span class="badge">${t('t_'+s.type)}</span>${s.open===true?`<span class="badge open">${t('open')}</span>`:''}${s.open===false?`<span class="badge closed">${t('closed')}</span>`:''}<span class="meta">${fmtDist(s.dist)} ${t('away')}</span></div>
     ${hasPh(s)?`<div class="cph" data-sid="${esc(s.id)}"></div>`:''}${detailsHtml(s)}
     <div class="acts"><a target="_blank" rel="noopener" href="${dirUrl(s)}">${t('dir')}</a>${linksHtml(s)}<a class="big" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((s.name||'')+' '+s.lat+','+s.lon)}">${t('photoMaps')}</a></div>`;
    c.onclick=ev=>{if(ev.target.closest('a'))return;if(ev.target.closest('.heart')){toggleFav(s);return}highlight(s.id,false);map.setView([s.lat,s.lon],16);openDetail(s)};
    el.appendChild(c);const ph=c.querySelector('.cph');if(ph)phObs.observe(ph);
  });
}
function hasPh(s){const g=s.tags||{};return !!(g.wikimedia_commons||(g.image&&/commons\.wikimedia\.org/i.test(g.image))||/^Q\d+$/.test(g.wikidata||''))}
const phObs=new IntersectionObserver(es=>{es.forEach(async en=>{if(!en.isIntersecting)return;const d=en.target;phObs.unobserve(d);const s=(state.spots||[]).find(x=>String(x.id)===d.dataset.sid);if(!s){d.remove();return}let ph;try{ph=await getPhotos(s)}catch(e){d.remove();return}const p=ph.list&&ph.list[0];if(!p){d.remove();return}d.innerHTML=`<a href="${esc(p.page)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(p.src)}" alt=""></a><div class="cap">\u{1F4F7} ${p.author?esc(p.author)+', ':''}${esc(p.lic||'Wikimedia Commons')}</div>`})},{rootMargin:'200px'});
function socUrl(v,base){if(!v)return '';v=String(v).trim();if(/^https?:\/\//.test(v))return v;if(/^[\w.\-]+$/.test(v))return base+v.replace(/^@/,'');return ''}
function detailsHtml(s){
  const r=[];
  if(s.addr)r.push('<div class="meta">\u{1F4CD} '+esc(s.addr)+'</div>');
  if(s.phone){const p=s.phone.replace(/[^+\d]/g,'');r.push('<div class="meta">\u{1F4DE} <a class="tel" href="tel:'+esc(p)+'">'+esc(s.phone)+'</a></div>')}
  if(s.hours)r.push('<div class="meta">\u{1F552} '+esc(s.hours)+'</div>');
  if(s.cuisine)r.push('<div class="meta">\u{1F374} '+esc(s.cuisine)+'</div>');
  if(s.wc==='yes')r.push('<div class="meta">\u267F \u2713</div>');
  return r.join('');
}
function linksHtml(s){
  const ig=socUrl(s.insta,'https://instagram.com/'),fb=socUrl(s.fb,'https://facebook.com/');
  return (s.web?`<a target="_blank" rel="noopener" href="${esc(s.web)}">${t('web')}</a>`:'')+(s.phone?`<a href="tel:${esc(s.phone.replace(/[^+\d]/g,''))}">${t('call')}</a>`:'')+(ig?`<a target="_blank" rel="noopener" href="${esc(ig)}">Instagram</a>`:'')+(fb?`<a target="_blank" rel="noopener" href="${esc(fb)}">Facebook</a>`:'');
}
function dirUrl(s){return `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}`}
function highlight(id,scroll){document.querySelectorAll('.card.act').forEach(e=>e.classList.remove('act'));const c=document.getElementById('c_'+id);if(c){c.classList.add('act');if(scroll)c.scrollIntoView({behavior:'smooth',block:'nearest'})}}
function toggleFav(s){
  const i=plan.findIndex(p=>p.id===s.id);
  if(i>=0)plan.splice(i,1);else plan.push({id:s.id,name:s.name||t('unnamed'),type:s.type,lat:s.lat,lon:s.lon,addr:s.addr});
  localStorage.setItem('nv_plan',JSON.stringify(plan));render();renderPlan();
}
function planText(){return t('planHead')+'\n'+plan.map((p,i)=>`${i+1}. ${p.name} (${t('t_'+p.type)}) https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lon}`).join('\n')}
function renderPlan(){
  const ol=$('#planList');ol.innerHTML='';
  if(!plan.length){ol.innerHTML=`<li class="muted" style="list-style:none">${t('emptyPlan')}</li>`;return}
  plan.forEach((p,i)=>{const li=document.createElement('li');li.innerHTML=`<b>${esc(p.name)}</b> <span class="muted">(${t('t_'+p.type)}${p.addr?', '+esc(p.addr):''})</span>`;const b=document.createElement('button');b.textContent='\u2715';b.onclick=()=>{plan.splice(i,1);localStorage.setItem('nv_plan',JSON.stringify(plan));render();renderPlan()};li.appendChild(b);ol.appendChild(li)});
}
$('#shareWa').onclick=()=>{if(plan.length)window.open('https://wa.me/?text='+encodeURIComponent(planText()),'_blank')};
$('#copyPlan').onclick=async()=>{if(!plan.length)return;try{await navigator.clipboard.writeText(planText());$('#copyPlan').textContent=t('saved');setTimeout(()=>$('#copyPlan').textContent=t('copyPlan'),1500)}catch(e){}};
$('#clearPlan').onclick=()=>{plan=[];localStorage.setItem('nv_plan','[]');render();renderPlan()};


/* ---------- joke + detail modal with photos ---------- */
function hash(str){let h=0;for(let i=0;i<str.length;i++)h=(h*31+str.charCodeAt(i))>>>0;return h}
function joke(s){const a=T[lang].jokes[s.type];return a?a[hash(s.id)%a.length]:''}
const photoCache={};
async function cj(url){const r=await fetch(url);if(!r.ok)throw new Error(r.status);return r.json()}
const COMMONS='https://commons.wikimedia.org/w/api.php?format=json&origin=*&';
function stripHtml(h){const d=document.createElement('div');d.innerHTML=h||'';return d.textContent.trim()}
async function infoFor(titles){
  if(!titles.length)return [];
  const j=await cj(COMMONS+'action=query&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=720&titles='+encodeURIComponent(titles.join('|')));
  return Object.values(j.query?.pages||{}).filter(p=>p.imageinfo&&/^image\/(jpeg|png|webp)/.test(p.imageinfo[0].mime||'')).map(p=>{const i=p.imageinfo[0],m=i.extmetadata||{};
    return {src:i.thumburl||i.url,page:i.descriptionurl,author:stripHtml(m.Artist&&m.Artist.value).slice(0,60),lic:(m.LicenseShortName&&m.LicenseShortName.value)||'',licUrl:(m.LicenseUrl&&m.LicenseUrl.value)||''}});
}
async function getPhotos(s){
  if(photoCache[s.id])return photoCache[s.id];
  const tg=s.tags||{};let kind='own',titles=[];
  try{
    const wc=tg.wikimedia_commons,im=tg.image||'';
    if(wc&&/^File:/i.test(wc))titles.push(wc);
    else if(wc&&/^Category:/i.test(wc)){const j=await cj(COMMONS+'action=query&list=categorymembers&cmtype=file&cmlimit=6&cmtitle='+encodeURIComponent(wc));titles=(j.query?.categorymembers||[]).map(x=>x.title)}
    const m=im.match(/commons\.wikimedia\.org\/wiki\/(File:[^?#]+)/i);if(m)titles.push(decodeURIComponent(m[1]).replace(/_/g,' '));
    if(!titles.length&&tg.wikidata&&/^Q\d+$/.test(tg.wikidata)){
      const j=await cj('https://www.wikidata.org/w/api.php?format=json&origin=*&action=wbgetclaims&property=P18&entity='+tg.wikidata);
      (j.claims?.P18||[]).slice(0,4).forEach(c=>{const v=c.mainsnak?.datavalue?.value;if(v)titles.push('File:'+v)})}
  }catch(e){}
  let list=[];try{list=await infoFor(titles.slice(0,6))}catch(e){}
  return photoCache[s.id]={kind,list};
}
let detailFor=null;
async function openDetail(s){
  detailFor=s.id;const el=$('#detail');const nm=s.name||t('unnamed');
  $('#dTitle').textContent=nm;
  $('#dMeta').innerHTML=`<span class="badge" style="--c:${COLORS[s.type]}">${t('t_'+s.type)}</span>${s.open===true?`<span class="badge open">${t('open')}</span>`:''}${s.open===false?`<span class="badge closed">${t('closed')}</span>`:''} <span class="meta">${fmtDist(s.dist)} ${t('away')}</span>
   <div class="joke">${esc(joke(s))}</div>${detailsHtml(s)}`;
  const q=encodeURIComponent((s.name||'')+' '+s.lat+','+s.lon);
  $('#dActs').innerHTML=`<a target="_blank" rel="noopener" href="${dirUrl(s)}">${t('dir')}</a>${linksHtml(s)}<a class="big" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${q}">${t('photoMaps')}</a>`;
  $('#dPhotos').innerHTML=`<div class="muted">${t('loadingPh')}</div>`;
  el.classList.add('show');document.body.classList.add('lock');
  const ph=await getPhotos(s);if(detailFor!==s.id)return;
  if(!ph.list.length){$('#dPhotos').innerHTML=`<div class="muted">${t('photoNone')}</div>`;return}
  $('#dPhotos').innerHTML=`<div class="muted small">${ph.kind==='own'?t('photosOwn'):t('photosNear')}</div><div class="strip">`+ph.list.map(p=>`<figure><a href="${esc(p.page)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(p.src)}" alt=""></a><figcaption>${p.author?t('photoBy')+' '+esc(p.author)+', ':''}${p.licUrl?`<a href="${esc(p.licUrl)}" target="_blank" rel="noopener">${esc(p.lic)}</a>`:esc(p.lic)}</figcaption></figure>`).join('')+'</div>';
}
function closeDetail(){$('#detail').classList.remove('show');detailFor=null;if(!$('#gate'))document.body.classList.remove('lock')}
$('#dClose').onclick=closeDetail;$('#detail').onclick=e=>{if(e.target.id==='detail')closeDetail()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetail()});

/* ---------- events ---------- */
$('#searchForm').onsubmit=async e=>{e.preventDefault();const q=$('#q').value.trim();if(!q){if(state.center)loadCenter(state.center);return}
  const known=CITIES.find(c=>c.n.toLowerCase()===q.toLowerCase()||c.a===q);
  if(known)return loadCenter({lat:known.lat,lon:known.lon,tz:known.tz,label:known.n});
  status(t('searching'));try{loadCenter(await geocode(q))}catch(err){status(t('cityErr'),true)}};
$('#nearBtn').onclick=nearMe;
$('#radius').oninput=()=>{$('#radVal').textContent=$('#radius').value+' km'};
$('#radius').onchange=()=>{if(state.center)loadCenter(state.center)};
['sort','openOnly'].forEach(i=>$('#'+i).onchange=render);$('#nameQ').oninput=render;
$('#surpriseBtn').onclick=()=>{const l=visible().filter(s=>s.name);if(!l.length){const c=CITIES[Math.floor(Math.random()*CITIES.length)];$('#q').value=c.n;return loadCenter({lat:c.lat,lon:c.lon,tz:c.tz,label:c.n})}
  const s=l[Math.floor(Math.random()*Math.min(l.length,40))];highlight(s.id,true);map.setView([s.lat,s.lon],16);status(t('lucky')+s.name);openDetail(s)};

document.body.classList.add('lock');applyLang();startQuips();
const p=new URLSearchParams(location.search);
if(p.get('skip')){$('#gate').remove();document.body.classList.remove('lock')}
const startCity=CITIES.find(c=>c.n.toLowerCase()===(p.get('city')||'').toLowerCase())||CITIES[0];
$('#q').value=startCity.n;
loadCenter({lat:startCity.lat,lon:startCity.lon,tz:startCity.tz,label:startCity.n});
window.__nv={state,get vid(){try{return player.getVideoData()}catch(e){return null}},get pos(){try{return player.getCurrentTime()}catch(e){return null}},get playerState(){try{return player&&player.getPlayerState()}catch(e){return null}}};

/* concerts */
{
const box=document.createElement('section');box.id='concerts';box.className='concerts';
const st=document.getElementById('status');st.parentNode.insertBefore(box,st);
const esc2=x=>String(x==null?'':x).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function links(c){
  const q=encodeURIComponent(c.label||c.name||($('#q')&&$('#q').value)||'');const L=[['Ticketmaster','https://www.ticketmaster.com/search?q=concerts'],['Songkick','https://www.songkick.com/search?query='+q]];
  const n=(c.label||c.name||($('#q')&&$('#q').value)||'').toLowerCase();
  if(/istanbul|trabzon|i\u0307stanbul/.test(n)||c.tz==='Europe/Istanbul')L.unshift(['Passo','https://www.passo.com.tr'],['Biletix','https://www.biletix.com']);
  if(/moscow|\u043c\u043e\u0441\u043a\u0432\u0430/.test(n))L.unshift(['Kassir','https://msk.kassir.ru'],['Yandex Afisha','https://afisha.yandex.ru']);
  L.push([t('gEv'),'https://www.google.com/search?q='+encodeURIComponent('events in '+(c.label||c.name||'')+' this weekend')]);
  return L}
async function render(){
  const c=state.center;if(!c)return;const run=state.runId;
  let h='<h2 class="neon-s">'+esc2(t('cc'))+'</h2>';
  const key=window.NV_TM_KEY;
  if(key){
    box.innerHTML=h+'<div class="muted small">'+esc2(t('cs'))+'</div>';
    try{
      const u='https://app.ticketmaster.com/discovery/v2/events.json?apikey='+key+'&classificationName=music&sort=date,asc&size=12&radius=40&unit=km&latlong='+c.lat+','+c.lon;
      const j=await (await fetch(u)).json();const ev=(j._embedded&&j._embedded.events)||[];
      if(run!==state.runId)return;
      if(!ev.length)h+='<div class="muted">'+esc2(t('ce'))+'</div>';
      else h+='<ul class="cl">'+ev.map(e=>{const v=e._embedded&&e._embedded.venues&&e._embedded.venues[0];const d=e.dates&&e.dates.start;return '<li><b>'+esc2(e.name)+'</b><span>'+esc2(d&&(d.localDate+(d.localTime?' '+d.localTime.slice(0,5):'')))+(v?' · '+esc2(v.name):'')+'</span><a target="_blank" rel="noopener" href="'+esc2(e.url)+'">'+esc2(t('ct'))+'</a></li>'}).join('')+'</ul><div class="muted small">Ticketmaster</div>';
    }catch(e){h+='<div class="muted">'+esc2(t('ce'))+'</div>'}
  }else{
    let snap=null;try{snap=await (await fetch('data/concerts.json')).json()}catch(e){}
    const slug=(function(){const ci=CITIES.find(ci=>dist(c.lat,c.lon,ci.lat,ci.lon)<15000);return ci?ci.n.toLowerCase().replace(' ','-'):null})();
    const today=new Date().toISOString().slice(0,10);
    const ev=(snap&&slug&&snap.cities[slug]||[]).filter(e=>e.d>=today).sort((a,b)=>(a.d+a.t).localeCompare(b.d+b.t));
    const SN={en:['Snapshot from ','Official page','No checked listings for this city yet. Official pages:'],ar:['لقطة بتاريخ ','الصفحة الرسمية','مفيش حفلات متأكد منها للمدينة دي لسه. الصفحات الرسمية:'],tr:['Anlık görüntü: ','Resmi sayfa','Bu şehir için doğrulanmış liste henüz yok. Resmi sayfalar:'],ru:['Снимок от ','Официальная страница','Для этого города проверенного списка пока нет. Официальные страницы:']}[lang];
    if(ev.length)h+='<div class="muted small">'+esc2(SN[0]+snap.asof+'. ')+'</div><ul class="cl">'+ev.map(e=>'<li><b>'+(e.k==='m'?'⚽ ':'🎤 ')+esc2(e.a)+'</b><span>'+esc2(e.d+(e.t?' '+e.t:''))+' · '+esc2(e.v)+'</span><a target="_blank" rel="noopener" href="'+esc2(e.u)+'">'+esc2(SN[1])+'</a></li>').join('')+'</ul><div class="muted small">'+esc2(t('cn'))+'</div>';
    else h+='<div class="muted small">'+esc2(SN[2])+'</div>';
  }
  h+='<div class="cl-links">'+links(c).map(x=>'<a target="_blank" rel="noopener" href="'+x[1]+'">'+esc2(x[0])+'</a>').join('')+'</div>';
  box.innerHTML=h;
}

const hb=document.createElement('section');hb.id='hotels';hb.className='concerts';box.parentNode.insertBefore(hb,box.nextSibling);
const dstr=n=>{const d=new Date(Date.now()+n*864e5);return d.toISOString().slice(0,10)};
let hin=dstr(1),hout=dstr(2);
function hrender(){
  const c=state.center;if(!c)return;const q=encodeURIComponent(c.label||c.name||($('#q')&&$('#q').value)||'');
  const L=[['Booking.com','https://www.booking.com/searchresults.html?ss='+q+'&checkin='+hin+'&checkout='+hout+'&group_adults=2&no_rooms=1']];
  hb.innerHTML='<h2 class="neon-s">'+esc2(t('hh'))+'</h2><div class="muted small">'+esc2(t('hn'))+'</div><div class="cl-links"><label>'+esc2(t('hi'))+' <input type="date" id="hIn" value="'+hin+'" min="'+dstr(0)+'"></label><label>'+esc2(t('ho'))+' <input type="date" id="hOut" value="'+hout+'" min="'+hin+'"></label></div><div class="cl-links">'+L.map(x=>'<a target="_blank" rel="noopener" href="'+esc2(x[1])+'">'+esc2(x[0])+'</a>').join('')+'</div>';
  hb.querySelector('#hIn').onchange=e=>{hin=e.target.value||hin;if(hout<=hin){const d=new Date(hin);d.setDate(d.getDate()+1);hout=d.toISOString().slice(0,10)}hrender()};
  hb.querySelector('#hOut').onchange=e=>{if(e.target.value>hin)hout=e.target.value;hrender()};
}
const _r0=render;render=async function(){await _r0();hrender()};
const orig=1;
const _lc=loadCenter;loadCenter=async function(c){const r=await _lc(c);render();return r};
const _al=applyLang;applyLang=function(){_al();render()};
setTimeout(render,1500);
const wb=document.createElement('section');wb.id='weather';wb.className='concerts';hb.parentNode.insertBefore(wb,hb.nextSibling);
let wrun=0;async function wrender(){const c=state.center;if(!c)return;const me=++wrun;
  let h='<h2 class="neon-s">'+esc2(t('wHead'))+'</h2>';
  try{const j=await (await fetch('https://api.open-meteo.com/v1/forecast?latitude='+c.lat+'&longitude='+c.lon+'&hourly=temperature_2m,precipitation_probability&timezone=auto&forecast_days=2')).json();
    const hrs=j.hourly.time;let i=hrs.findIndex(x=>x.endsWith('T21:00')&&x>=j.hourly.time[0]);const nowS=new Date().toLocaleString('sv',{timeZone:j.timezone}).replace(' ','T').slice(0,13);if(hrs[i]<nowS.slice(0,13)+':00'){const k=hrs.findIndex((x,ix)=>ix>i&&x.endsWith('T21:00'));if(k>0)i=k}
    h+='<div>'+esc2(t('wLine')(Math.round(j.hourly.temperature_2m[i]),j.hourly.precipitation_probability[i]))+'</div><div class="muted small">'+esc2(t('wNote'))+'</div>'}
  catch(e){h+='<div class="muted">'+esc2(t('wErr'))+'</div>'}
  if(me===wrun)wb.innerHTML=h}
const _r1=render;render=async function(){await _r1();wrender()};
}

/* Night Vibe: plan my night, mood filter, share card */
(function(){try{
const S={
en:{planBtn:'\u2605 PLAN MY NIGHT',moodH:'MOOD',m_chill:'CHILL',m_wild:'WILD',m_cheap:'CHEAP',m_friends:'WITH FRIENDS',moodCheap:'Cheap is a guess from the place type (parks, cafes, pubs, free spots). OpenStreetMap has no real prices.',
 pTitle:'YOUR NIGHT',pFood:'EAT',pHang:'HANG OUT',pClub:'GO WILD',pNone:'Not enough places nearby for a full plan. Pick a bigger radius or another city. Showing what I found.',pNeed:'Choose a city or tap NEAR ME first.',pFrom:'from you',pLeg:'from the previous stop',pSaved:'Saved to MY NIGHT below.',
 cardBtn:'SHARE IMAGE',cardTitle:'SHARE CARD',cardShare:'SHARE',cardSave:'SAVE IMAGE',cardWa:'SEND LINK (WhatsApp)',cardNote:'On phones that support it, SHARE sends the image straight to WhatsApp. Otherwise save the image and attach it.',cardHead:'MY NIGHT',cardFoot:'night-vibe-6cy.pages.dev',close:'CLOSE',cardEmpty:'Build a plan first.'},
ar:{planBtn:'\u2605 خطط ليلتي',moodH:'المود',m_chill:'هادي',m_wild:'مجنون',m_cheap:'رخيص',m_friends:'مع الشلة',moodCheap:'رخيص ده تخمين من نوع المكان (حدائق، كافيهات، بابات، أماكن ببلاش). الخريطة المفتوحة مفيهاش أسعار حقيقية.',
 pTitle:'ليلتك',pFood:'أكل',pHang:'قعدة',pClub:'جنان',pNone:'مفيش أماكن كفاية قريبة لخطة كاملة. كبّر المسافة أو غيّر المدينة. دي اللي لقيتها.',pNeed:'اختار مدينة أو دوس قريب مني الأول.',pFrom:'منك',pLeg:'من المحطة اللي قبلها',pSaved:'اتحفظت في ليلتي تحت.',
 cardBtn:'شارك صورة',cardTitle:'كارت المشاركة',cardShare:'شارك',cardSave:'احفظ الصورة',cardWa:'ابعت لينك (واتساب)',cardNote:'على التليفونات اللي بتدعم ده، زرار شارك بيبعت الصورة لواتساب علطول. غير كده احفظ الصورة وارفقها.',cardHead:'ليلتي',cardFoot:'night-vibe-6cy.pages.dev',close:'اقفل',cardEmpty:'اعمل خطة الأول.'},
tr:{planBtn:'\u2605 GECEMİ PLANLA',moodH:'MOD',m_chill:'SAKİN',m_wild:'ÇILGIN',m_cheap:'UCUZ',m_friends:'ARKADAŞLARLA',moodCheap:'Ucuz, mekan türüne göre bir tahmin (park, kafe, pub, ücretsiz yerler). OpenStreetMap\'te gerçek fiyat yok.',
 pTitle:'GECEN',pFood:'YEMEK',pHang:'OTUR',pClub:'ÇILGINLIK',pNone:'Tam plan için yakında yeterli mekan yok. Yarıçapı büyüt veya başka şehir seç. Bulduklarımı gösteriyorum.',pNeed:'Önce bir şehir seç ya da YAKINIMDA\'ya bas.',pFrom:'senden',pLeg:'önceki duraktan',pSaved:'Aşağıdaki GECEM\'e kaydedildi.',
 cardBtn:'GÖRSEL PAYLAŞ',cardTitle:'PAYLAŞIM KARTI',cardShare:'PAYLAŞ',cardSave:'GÖRSELİ KAYDET',cardWa:'LİNK GÖNDER (WhatsApp)',cardNote:'Destekleyen telefonlarda PAYLAŞ görseli doğrudan WhatsApp\'a gönderir. Yoksa görseli kaydedip ekle.',cardHead:'GECEM',cardFoot:'night-vibe-6cy.pages.dev',close:'KAPAT',cardEmpty:'Önce bir plan yap.'},
ru:{planBtn:'\u2605 СПЛАНИРУЙ ВЕЧЕР',moodH:'НАСТРОЕНИЕ',m_chill:'СПОКОЙНО',m_wild:'ОТРЫВ',m_cheap:'ДЁШЕВО',m_friends:'С ДРУЗЬЯМИ',moodCheap:'«Дёшево» это догадка по типу места (парки, кафе, пабы, бесплатные места). Реальных цен в OpenStreetMap нет.',
 pTitle:'ТВОЙ ВЕЧЕР',pFood:'ЕДА',pHang:'ПОСИДЕТЬ',pClub:'ОТРЫВ',pNone:'Рядом мало мест для полного плана. Увеличь радиус или выбери другой город. Показываю, что нашлось.',pNeed:'Сначала выбери город или нажми РЯДОМ.',pFrom:'от тебя',pLeg:'от прошлой точки',pSaved:'Сохранено в МОЙ ВЕЧЕР ниже.',
 cardBtn:'ПОДЕЛИТЬСЯ КАРТИНКОЙ',cardTitle:'КАРТОЧКА',cardShare:'ПОДЕЛИТЬСЯ',cardSave:'СОХРАНИТЬ КАРТИНКУ',cardWa:'ОТПРАВИТЬ ССЫЛКУ (WhatsApp)',cardNote:'На телефонах с поддержкой кнопка ПОДЕЛИТЬСЯ отправляет картинку сразу в WhatsApp. Иначе сохрани картинку и прикрепи.',cardHead:'МОЙ ВЕЧЕР',cardFoot:'night-vibe-6cy.pages.dev',close:'ЗАКРЫТЬ',cardEmpty:'Сначала составь план.'}};
for(const k in S)for(const x in S[k])NV_STR[k][x]=S[k][x];
const $=s=>document.querySelector(s);
const MOODS={
 chill:s=>['cafe','garden','park','shisha','pub','museum','art','cinema','theatre','billiards'].includes(s.type),
 wild:s=>['club','live','karaoke','casino','bar','games','bowling'].includes(s.type)||s.live,
 cheap:s=>['park','market','cafe','pub','shisha','cyber','garden'].includes(s.type)||/^(no|free)$/.test((s.tags&&s.tags.fee)||'')||(s.tags&&s.tags.charge==='free'),
 friends:s=>['bowling','billiards','karaoke','games','pub','bar','garden','shisha','live','attract','sport'].includes(s.type)};
let mood=null;
// inject UI
const sb=$('#surpriseBtn');
const pb=document.createElement('button');pb.id='planBtn';pb.className='chip hot';pb.dataset.t='planBtn';pb.textContent=S.en.planBtn;sb.parentNode.appendChild(pb);
const mr=document.createElement('div');mr.id='moods';mr.className='moods';
mr.innerHTML='<span class="muted small" data-t="moodH"></span>'+Object.keys(MOODS).map(k=>`<button class="chip small" data-mood="${k}" data-t="m_${k}"></button>`).join('')+'<div id="moodNote" class="muted small"></div><div id="planMsg" class="muted small"></div>';
$('#typeFilters').parentNode.insertBefore(mr,$('#typeFilters'));
mr.querySelectorAll('[data-mood]').forEach(b=>b.onclick=()=>{mood=mood===b.dataset.mood?null:b.dataset.mood;mr.querySelectorAll('[data-mood]').forEach(x=>x.classList.toggle('on',x.dataset.mood===mood));$('#moodNote').textContent=mood==='cheap'?NV_STR[lang].moodCheap:'';$('#planMsg').textContent='';render()});
const _vis=visible;visible=function(){let a=_vis();return mood?a.filter(MOODS[mood]):a};
// plan
function pick(list,types,from,used){
  const c=list.filter(s=>s.name&&types.includes(s.type)&&s.open!==false&&!used.has(s.id));
  c.sort((x,y)=>dist(from.lat,from.lon,x.lat,x.lon)-dist(from.lat,from.lon,y.lat,y.lon));return c[0]||null}
function buildPlan(){
  const c=state.center;const msg=$('#planMsg');
  if(!c||!state.spots.length){msg.textContent=NV_STR[lang].pNeed;return}
  state.spots.forEach(s=>s.open=isOpen(s.hours,state.tz));
  let pool=state.spots;if(mood)pool=pool.filter(MOODS[mood]);
  const used=new Set(),out=[];
  const stages=[['pFood',[['fancy'],['cafe']]],['pHang',[['pub','bar','shisha','garden','billiards','bowling','karaoke','games'],['live','cafe']]],['pClub',[['club'],['live','bar','karaoke']]]];
  let from=c;
  for(const [k,tiers] of stages){let s=null;for(const types of tiers){s=pick(pool,types,from,used);if(s)break}if(!s)for(const types of tiers){s=pick(state.spots,types,from,used);if(s)break}if(s){used.add(s.id);out.push({k,s});from=s}}
  if(out.length<3)msg.textContent=NV_STR[lang].pNone;else msg.textContent=NV_STR[lang].pSaved;
  if(!out.length)return;
  window.NV_LAST=out;
  plan=out.map(o=>({id:o.s.id,name:o.s.name,type:o.s.type,lat:o.s.lat,lon:o.s.lon,addr:o.s.addr,k:o.k}));
  localStorage.setItem('nv_plan',JSON.stringify(plan));render();renderPlan();
  $('#plan').scrollIntoView({behavior:'smooth',block:'start'});
}
pb.onclick=buildPlan;
// show stage labels in plan list
const _rp=renderPlan;renderPlan=function(){_rp();document.querySelectorAll('#planList li').forEach((li,i)=>{const p=plan[i];if(!p)return;const sp=state.spots.find(s=>s.id===p.id);const prev=i?plan[i-1]:null;let d='';
  if(state.center&&p.lat!=null){const dm=dist(state.center.lat,state.center.lon,p.lat,p.lon);d=' \u2022 '+fmtDist(dm)+' '+NV_STR[lang].pFrom;if(prev&&prev.lat!=null)d+=', '+fmtDist(dist(prev.lat,prev.lon,p.lat,p.lon))+' '+NV_STR[lang].pLeg}
  const tag=p.k?'<span class="badge" style="margin-inline-end:6px">'+(i+1)+'. '+NV_STR[lang][p.k]+'</span>':'';
  li.insertAdjacentHTML('afterbegin',tag);if(d)li.insertAdjacentHTML('beforeend','<div class="muted small">'+d.slice(3)+'</div>')})};
// share card
const row=$('#shareWa').parentNode;const cb=document.createElement('button');cb.id='cardBtn';cb.className='chip hot';cb.dataset.t='cardBtn';cb.textContent=S.en.cardBtn;row.insertBefore(cb,$('#copyPlan'));
const ov=document.createElement('div');ov.id='cardOv';ov.className='detail';ov.innerHTML='<div class="dbox"><button id="cardClose" class="chip small dclose" aria-label="Close">\u2715</button><h2 class="neon-s" data-t="cardTitle"></h2><img id="cardImg" alt="" style="width:100%;border-radius:10px;border:2px solid var(--pink)"><div class="acts" style="margin-top:10px"><button id="cardShare" class="chip hot" data-t="cardShare"></button><a id="cardSave" class="chip" data-t="cardSave" download="night-vibe-plan.png"></a><button id="cardWa" class="chip" data-t="cardWa"></button></div><p class="muted small" data-t="cardNote"></p></div>';
document.body.appendChild(ov);
$('#cardClose').onclick=()=>{ov.classList.remove('show');document.body.classList.remove('lock')};
function wrap(ctx,text,maxW){const w=text.split(/\s+/),lines=[];let l='';for(const x of w){const tt=l?l+' '+x:x;if(ctx.measureText(tt).width>maxW&&l){lines.push(l);l=x}else l=tt}if(l)lines.push(l);return lines}
async function drawCard(){
  const W=1080,H=1350,cv=document.createElement('canvas');cv.width=W;cv.height=H;const x=cv.getContext('2d');
  const rtl=T[lang].bdir==='rtl';
  try{await Promise.all(['64px Monoton','800 40px Cairo','30px "Press Start 2P"','700 34px Righteous','700 30px "Space Mono"'].map(f=>document.fonts.load(f,'Aa \u0627')))}catch(e){}
  const g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#12002b');g.addColorStop(.6,'#2a0752');g.addColorStop(1,'#12002b');x.fillStyle=g;x.fillRect(0,0,W,H);
  // sun
  const sg=x.createLinearGradient(0,295,0,645);sg.addColorStop(0,'#ffe14d');sg.addColorStop(.6,'#ff2e93');sg.addColorStop(1,'#8a2be2');x.save();x.beginPath();x.arc(W/2,470,175,0,7);x.clip();x.fillStyle=sg;x.fillRect(0,295,W,360);x.fillStyle='#12002b';for(let y=470;y<650;y+=24){x.fillRect(0,y,W,7+(y-470)/14)}x.restore();
  // grid floor
  x.strokeStyle='rgba(255,46,147,.35)';x.lineWidth=2;for(let i=-10;i<=10;i++){x.beginPath();x.moveTo(W/2+i*40,H-380);x.lineTo(W/2+i*160,H);x.stroke()}for(let i=0;i<8;i++){const y=H-380+Math.pow(i/7,2)*380;x.beginPath();x.moveTo(0,y);x.lineTo(W,y);x.stroke()}
  x.direction=rtl?'rtl':'ltr';x.textAlign='center';
  x.shadowColor='#ff2e93';x.shadowBlur=30;x.fillStyle='#fff';
  x.font=rtl?'800 110px Cairo':'92px Monoton';x.fillText(T[lang].cardHead,W/2,200);x.shadowBlur=0;
  const city=(state.center&&(state.center.label&&state.center.label!=='me'?state.center.label:''))||'';
  x.fillStyle='#16f2ff';x.font=rtl?'800 38px Cairo':'30px "Press Start 2P"';if(city)x.fillText(city.toUpperCase(),W/2,265);
  let y=690;const items=plan.slice(0,4);
  items.forEach((p,i)=>{
    const col=COLORS[p.type]||'#ff2e93';
    x.fillStyle='rgba(34,10,74,.92)';x.strokeStyle=col;x.lineWidth=4;const bx=70,bw=W-140,bh=130;
    x.beginPath();x.roundRect?x.roundRect(bx,y,bw,bh,22):x.rect(bx,y,bw,bh);x.fill();x.stroke();
    x.textAlign=rtl?'right':'left';const tx=rtl?bx+bw-40:bx+40;
    x.fillStyle=col;x.font=rtl?'800 28px Cairo':'22px "Press Start 2P"';x.fillText((i+1)+'. '+(p.k?T[lang][p.k]:T[lang]['t_'+p.type]),tx,y+42);
    x.fillStyle='#fff';x.font=rtl?'800 44px Cairo':'700 44px Righteous';
    let nm=p.name||T[lang].unnamed;while(x.measureText(nm).width>bw-80&&nm.length>6)nm=nm.slice(0,-2);if(nm!==(p.name||T[lang].unnamed))nm+='\u2026';x.fillText(nm,tx,y+88);
    x.fillStyle='#b9a3d9';x.font=rtl?'600 26px Cairo':'26px "Space Mono"';let sub=T[lang]['t_'+p.type]+(p.addr?' \u2022 '+p.addr:'');while(x.measureText(sub).width>bw-80&&sub.length>6)sub=sub.slice(0,-2);x.fillText(sub,tx,y+120);
    y+=bh+16});
  x.textAlign='center';x.fillStyle='#ffe14d';x.font='28px "Space Mono"';x.fillText(T[lang].cardFoot,W/2,H-50);
  return cv;
}
async function openCard(){
  if(!plan.length){const m=$('#planMsg');m.textContent=NV_STR[lang].cardEmpty;return}
  const cv=await drawCard();const url=cv.toDataURL('image/png');$('#cardImg').src=url;$('#cardSave').href=url;
  const blob=await new Promise(r=>cv.toBlob(r,'image/png'));window.NV_CARD_BLOB=blob;
  ov.classList.add('show');document.body.classList.add('lock');
}
cb.onclick=openCard;
$('#cardShare').onclick=async()=>{const f=new File([window.NV_CARD_BLOB],'night-vibe-plan.png',{type:'image/png'});
  if(navigator.canShare&&navigator.canShare({files:[f]})){try{await navigator.share({files:[f],text:planText()});return}catch(e){if(e.name==='AbortError')return}}
  $('#cardSave').click()};
$('#cardWa').onclick=()=>window.open('https://wa.me/?text='+encodeURIComponent(planText()),'_blank');
// language hook
const _al=applyLang;applyLang=function(){_al();document.querySelectorAll('#moods [data-t],#cardOv [data-t],#planBtn,#cardBtn').forEach(e=>{const v=NV_STR[lang][e.dataset.t];if(typeof v==='string')e.textContent=v});$('#moodNote').textContent=mood==='cheap'?NV_STR[lang].moodCheap:'';$('#planMsg').textContent='';if(ov.classList.contains('show'))openCard()};
applyLang();
}catch(e){window.NV_ERR=String(e.stack)}
})();


/* ---------- compact events + scroll to results ---------- */
{
const SH={en:{all:n=>'SHOW ALL ('+n+')',less:'SHOW LESS'},ar:{all:n=>'اعرض الكل ('+n+')',less:'اعرض أقل'},tr:{all:n=>'HEPSİNİ GÖSTER ('+n+')',less:'DAHA AZ GÖSTER'},ru:{all:n=>'ПОКАЗАТЬ ВСЕ ('+n+')',less:'СВЕРНУТЬ'}};
for(const k in SH)NV_STR[k].evAll=SH[k].all,NV_STR[k].evLess=SH[k].less;
const FEW=3;
function compact(){
  const box=document.getElementById('concerts');if(!box)return;
  box.querySelectorAll('ul.cl').forEach(ul=>{
    if(ul.dataset.c)return;ul.dataset.c='1';
    const li=[...ul.children];if(li.length<=FEW+1)return;
    const hide=on=>{li.forEach((x,i)=>{x.style.display=(on&&i>=FEW)?'none':''})};
    hide(true);let open=false;
    const b=document.createElement('button');b.className='chip small evtoggle';b.textContent=NV_STR[lang].evAll(li.length);
    b.onclick=()=>{open=!open;hide(!open);b.textContent=open?NV_STR[lang].evLess:NV_STR[lang].evAll(li.length)};
    ul.parentNode.insertBefore(b,ul.nextSibling);
  });
}
new MutationObserver(compact).observe(document.getElementById('concerts'),{childList:true,subtree:true});compact();
// events, hotels and weather go below the venue list so places come first
const sp=document.querySelector('.split');
['weather','hotels','concerts'].forEach(id=>{const n=document.getElementById(id);if(n&&sp)sp.parentNode.insertBefore(n,sp.nextSibling)});
// scroll to results after a user search
let goScroll=false;
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('#cities button,#nearBtn,#surpriseBtn,#searchForm button'))goScroll=true},true);
document.addEventListener('submit',e=>{if(e.target.id==='searchForm')goScroll=true},true);
const _lc2=loadCenter;loadCenter=function(c){
  if(goScroll){goScroll=false;setTimeout(()=>{const t=document.getElementById('status');if(t)t.scrollIntoView({behavior:'smooth',block:'start'})},60)}
  return _lc2(c)};
}


/* ---------- tabs: PLACES / EVENTS / HOTELS / WEATHER ---------- */
{
const TB={en:{tPlaces:'PLACES',tEvents:'EVENTS',tHotels:'HOTELS',tWeather:'WEATHER'},ar:{tPlaces:'أماكن',tEvents:'فعاليات',tHotels:'فنادق',tWeather:'الجو'},tr:{tPlaces:'MEKANLAR',tEvents:'ETKİNLİKLER',tHotels:'OTELLER',tWeather:'HAVA'},ru:{tPlaces:'МЕСТА',tEvents:'СОБЫТИЯ',tHotels:'ОТЕЛИ',tWeather:'ПОГОДА'}};
for(const k in TB)Object.assign(NV_STR[k],TB[k]);
const TABS=[['places','tPlaces','.split'],['events','tEvents','#concerts'],['hotels','tHotels','#hotels'],['weather','tWeather','#weather']];
const bar=document.createElement('div');bar.id='tabs';bar.className='tabs';bar.setAttribute('role','tablist');
bar.innerHTML=TABS.map(x=>`<button class="chip small" role="tab" data-tab="${x[0]}" data-t="${x[1]}">${TB.en[x[1]]}</button>`).join('');
const st=document.getElementById('status');st.parentNode.insertBefore(bar,st.nextSibling);
let cur='places';
function showTab(k,scroll){
  cur=k;
  TABS.forEach(x=>{const n=document.querySelector(x[2]);if(n)n.style.display=(x[0]===k)?'':'none'});
  bar.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===k));
  if(k==='places'){try{map.invalidateSize()}catch(e){}}
  if(scroll){const t=document.getElementById('tabs');t.scrollIntoView({behavior:'smooth',block:'start'})}
}
bar.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>showTab(b.dataset.tab,true));
const _al3=applyLang;applyLang=function(){_al3();bar.querySelectorAll('[data-t]').forEach(e=>{const v=NV_STR[lang][e.dataset.t];if(typeof v==='string')e.textContent=v})};
showTab('places',false);applyLang();
// searches always go back to PLACES
const _lc3=loadCenter;loadCenter=function(c){if(cur!=='places')showTab('places',false);return _lc3(c)};
}

})();
