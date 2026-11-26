window.NV_APPLY2=function(){
const L={
en:{cinema:'CINEMA',theatre:'THEATRE',museum:'MUSEUMS',art:'ART',karaoke:'KARAOKE',games:'ARCADE/ESCAPE',billiards:'BILLIARDS',bowling:'BOWLING',attract:'ATTRACTIONS',park:'PARKS',sport:'SPORTS/GYM',market:'MARKETS',casino:'CASINO',
 photoMaps:'PHOTOS & LOOK OF THE PLACE (Google Maps)',wHead:'WEATHER TONIGHT',wErr:'Could not load the weather. The plan still stands.',wNote:'Forecast: Open-Meteo, free.',gEv:'Events this weekend (Google)',
 cc:"WHAT'S ON",cn:'Live dates and tickets need an official source. Until one is connected, these are the official event pages for this city:',
 wLine:(a,b)=>a+'\u00B0C around 9 PM, rain chance '+b+'%.'},
ar:{cinema:'سينما',theatre:'مسرح',museum:'متاحف',art:'جاليري',karaoke:'كاريوكي',games:'ألعاب/ايسكيب',billiards:'بلياردو',bowling:'بولينج',attract:'ملاهي ومعالم',park:'حدائق',sport:'رياضة/جيم',market:'أسواق',casino:'كازينو',
 photoMaps:'صور وشكل المكان (خرائط جوجل)',wHead:'الجو الليلة',wErr:'مش قادرين نجيب الجو. الخطة زي ما هي.',wNote:'التوقعات: Open-Meteo مجانية.',gEv:'فعاليات الويك إند (جوجل)',
 cc:'إيه اللي بيحصل',cn:'مواعيد الفعاليات والتذاكر محتاجة مصدر رسمي. لحد ما يتوصل، دي صفحات الفعاليات الرسمية للمدينة:',
 wLine:(a,b)=>a+'° الساعة ٩ بالليل تقريبا، احتمال المطر '+b+'%.'},
tr:{cinema:'SİNEMA',theatre:'TİYATRO',museum:'MÜZELER',art:'GALERİ',karaoke:'KARAOKE',games:'ARCADE/ESCAPE',billiards:'BİLARDO',bowling:'BOWLING',attract:'EĞLENCE',park:'PARKLAR',sport:'SPOR/GYM',market:'PAZARLAR',casino:'KUMARHANE',
 photoMaps:'MEKANIN FOTOĞRAFLARI VE GÖRÜNÜMÜ (Google Haritalar)',wHead:'BU GECE HAVA',wErr:'Hava durumu yüklenemedi. Plan geçerli.',wNote:'Tahmin: Open-Meteo, ücretsiz.',gEv:'Bu hafta sonu etkinlikler (Google)',
 cc:'ŞEHİRDE NELER VAR',cn:'Canlı tarihler ve biletler resmi bir kaynak ister. Bağlanana kadar bu şehrin resmi etkinlik sayfaları:',
 wLine:(a,b)=>'Saat 21 civarı '+a+'°C, yağmur ihtimali %'+b+'.'},
ru:{cinema:'КИНО',theatre:'ТЕАТР',museum:'МУЗЕИ',art:'ГАЛЕРЕИ',karaoke:'КАРАОКЕ',games:'АРКАДЫ/КВЕСТЫ',billiards:'БИЛЬЯРД',bowling:'БОУЛИНГ',attract:'РАЗВЛЕЧЕНИЯ',park:'ПАРКИ',sport:'СПОРТ/ЗАЛ',market:'РЫНКИ',casino:'КАЗИНО',
 photoMaps:'ФОТО И ВИД МЕСТА (Google Карты)',wHead:'ПОГОДА СЕГОДНЯ',wErr:'Погоду загрузить не удалось. План в силе.',wNote:'Прогноз: Open-Meteo, бесплатно.',gEv:'События на выходных (Google)',
 cc:'ЧТО ПРОИСХОДИТ',cn:'Для дат и билетов нужен официальный источник. Пока его нет, вот официальные страницы событий города:',
 wLine:(a,b)=>'Около 21:00 '+a+'°C, вероятность дождя '+b+'%.'}};
for(const k in L){const o=L[k];const T=NV_STR[k];for(const x in o)T[x]=o[x];
 for(const x of ['cinema','theatre','museum','art','karaoke','games','billiards','bowling','attract','park','sport','market','casino'])T['t_'+x]=o[x].charAt(0)+o[x].slice(1).toLowerCase()}
};
