import { b as createAstro, c as createComponent, d as addAttribute, e as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent, w as renderSlot, x as renderHead, v as unescapeHTML, F as Fragment } from './astro/server_2XIcTBoS.mjs';
import 'piccolore';
/* empty css                              */
import 'clsx';

const $$Astro$4 = createAstro("https://mimesarestoran.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Serkan/MiMesa/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Serkan/MiMesa/node_modules/astro/components/ClientRouter.astro", void 0);

const meta$2 = {"title":"Mi Mesa Restoran — Bodrum | Benim masam, benim sofram","description":"Mezopotamya köy mutfağının modern yorumu. Mi Mesa'da hikaye, miras ve sofra bir araya gelir.","ogAlt":"Mi Mesa fine dining restoran"};
const nav$2 = {"manifesto":"Manifesto","heritage":"Miras","menu":"Menü","order":"Sipariş Ver","chef":"Şef","reservation":"Rezervasyon","contact":"İletişim","open":"Menüyü aç","close":"Menüyü kapat"};
const hero$2 = {"eyebrow":"MI MESA","tagline":"Benim masam,","tagline2":"benim sofram.","subtitle":"Mezopotamya'nın tozlu yollarından, ateşin etrafındaki sessiz akşamlardan damağınıza taşınan bir miras.","cta":"Rezervasyon","scroll":"Keşfet"};
const manifesto$2 = {"eyebrow":"Sınırların Kalktığı Sofra","title":"Bir sofranın hatırası,","titleEm":"coğrafyaların vaadi.","body":"Mi Mesa; Mezopotamya'nın kadim baharat yollarından, Akdeniz'in ferahlığına uzanan sınırsız bir lezzet haritasıdır. Bir yanda Arap ve Anadolu mutfağının geleneğiyle harlanan kebap ateşimiz, diğer yanda hamuru sabırla işleyen fırınımızın bereketi… Bizim soframızda lezzet, tek bir coğrafyaya sığmaz.","body2":"Biz yemeği bir gösteri değil; farklı kültürlerin, dillerin ve ateşlerin aynı masada konuştuğu evrensel bir davet olarak görüyoruz. \"Benim masam, benim sofram\" derken; sizi sadece bir konuk olarak değil, Doğu'nun mistik ruhuyla Batı'nın zarafetinin birleştiği bu sonsuz şölenin bir parçası olmaya çağırıyoruz."};
const heritage$2 = {"eyebrow":"Miras & Toprak","title":"Toprağın hafızası,","titleEm":"tabağın sadakati.","body":"Tahıllarımız küçük üreticilerin elinden, yeşilliklerimiz mevsimin gerçek takviminden, etlerimiz dağ köylerinin geleneksel yetiştiricilerinden geliyor. Her malzemenin bir adı, bir adresi, bir hikayesi var.","captions":{"one":"Köy fırını / saatler süren sessizlik","two":"Bakır tencere / bir kuşaktan ötekine","three":"Mevsim otları / sabah hasadı","four":"Aile sofrası / paylaşılmış bir akşam"}};
const menu$2 = {"eyebrow":"Dijital Menü","title":"Lezzet Haritasını","titleEm":"keşfedin.","body":"Toprağın bereketine, mevsimin ritmine ve Şef Hakan Akkaya'nın o güne özel ilhamına göre şekillenen menümüzü keşfedin. Bu akşamın gastronomi yolculuğuna tek bir dokunuşla adım atın.","cta":"Dijital menüye göz atın"};
const chef$2 = {"eyebrow":"Şef","title":"","titleLead":"Lezzetin","titleEm":"Mucidi","name":"Şef Hakan Akkaya","quote":"\"Köklerim Mezopotamya'nın kadim topraklarında filizlendi, ruhum ise dünyanın dört bir yanındaki mutfakların ateşinde demlendi. Şimdi her tabakta, sınırları aşan onca yıllık bir serüveni baştan yazıyorum.\"","body":"Hakan Akkaya; hikayesine İskenderun'un bereketli sofralarında, Anadolu ve Mezopotamya'nın zengin baharat kokuları arasında başladı. Bu kadim tatlarla yoğrulan tutkusu, onu sınırların ötesine taşıdı. Lübnan, Kuveyt, Dubai, Libya ve Irak'ta geçen tam on yıllık bir serüvenle, Arap mutfağının en ince sırlarına vakıf olup gerçek bir usta haline geldi.","body2":"Uzun yolculuğu onu Ege'nin zeytin kokulu kıyılarına ve premium otellerin seçkin mutfaklarına getirdiğinde; Ege'nin tazeliğini İtalyan, Fransız, İspanyol ve Meksika mutfaklarının zarif dokunuşlarıyla harmanladı.","body3":"Kıtaları aşan bu eşsiz birikimini ve ustalığını artık tamamen özgürce sergilemek isteyen Şef Akkaya; yeni bir vizyonla, Mi Mesa'yı bir dünya markası haline getirme tutkusuyla kurucu şefimiz oldu. Mi Mesa sofralarındaki her dokunuş, onun kıtaları aşan serüveninden anlattığı lezzetli bir hikayeye dönüşüyor."};
const reservation$2 = {"eyebrow":"Rezervasyon","title":"Masanız","titleEm":"sizi bekliyor.","body":"Mutfağımız 7 gün 24 saat hizmetinizde. Lütfen tercih ettiğiniz zamanı ve özel notlarınızı paylaşın; biz size dönelim.","form":{"name":"Adınız","email":"E-posta","phone":"Telefon","date":"Tarih","time":"Saat","guests":"Kişi sayısı","note":"Özel not","notePlaceholder":"Alerji, özel kutlama, hassasiyet…","submit":"Masamızı hazırlayın","thanks":"Teşekkürler — en kısa sürede size dönüyoruz."}};
const contact$2 = {"eyebrow":"İletişim","address":"Mi Mesa Restoran","addressLines":["Meşelik Mah., Muğla–Bodrum Yolu","48670 Milas / Muğla"],"phoneTitle":"Telefon","phone":"0530 821 96 85","phoneIntl":"+905308219685","hoursTitle":"Servis saatleri","hours":["7 gün 24 saat açık"],"social":"Bizi takip edin"};
const footer$2 = {"tagline":"Benim masam, benim sofram.","rights":"Tüm hakları saklıdır."};
const orderPage$2 = {"meta":{"title":"Sipariş Ver — Mi Mesa","description":"Mi Mesa'dan paket / eve servis sipariş verin. Ekibimiz 5 dakika içinde arar.","ogAlt":"Mi Mesa siparişi"},"splash":{"welcome":"Buyrun, sipariş alalım","tagline":"Benim masam, benim sofram.","enterButton":"Menüye git","backHome":"Anasayfa"},"index":{"eyebrow":"Sipariş","title":"Sofrayı,","titleEm":"evinize taşıyalım.","subtitle":"Sepete ekleyin, telefonunuza onay düşsün. Ekibimiz 5 dakika içinde arayarak teyit eder.","itemsLabel":"tabak","categoryMetaTitle":"{name} — Mi Mesa Sipariş","footnote":"Fiyatlar Türk Lirası cinsindendir. Sipariş alındıktan sonra ekibimiz telefonunuzu arayarak teyit eder. Ödeme kapıda nakit veya kart ile yapılır."},"category":{"backToOrder":"Kategoriler","backToSplash":"Sipariş","itemsLabel":"tabak","askChef":"Şefe sorunuz"},"card":{"addToCart":"+ Sepete Ekle","added":"Eklendi"},"cart":{"title":"Sepetiniz","empty":"Sepetiniz henüz boş.","browseMenu":"Menüye dön","qty":"Adet","remove":"Kaldır","subtotal":"Ara toplam","total":"Toplam","checkout":"Siparişi Tamamla","fabAria":"Sepeti aç","close":"Kapat"},"checkout":{"title":"Siparişi tamamlayın","subtitle":"Ekibimiz adresinize 5 dakika içinde arayarak teyit eder.","summaryTitle":"Sepetiniz","summaryEmpty":"Sepetiniz boş. Önce menüden ürün ekleyin.","backToOrder":"Menüye dön","form":{"name":"Adınız","phone":"Telefon","email":"E-posta (opsiyonel)","address":"Adres","addressPlaceholder":"Mahalle, sokak, bina no, daire","addressNote":"Adres tarifi (opsiyonel)","addressNotePlaceholder":"Kapı zili, kat, dış görüntü…","note":"Sipariş notu (opsiyonel)","notePlaceholder":"Alerji, hassasiyet, özel istek…","paymentTitle":"Ödeme yöntemi","paymentCash":"Kapıda nakit","paymentCard":"Kapıda kart","kvkk":"Bilgilerimin sipariş teyidi için kullanılmasını kabul ediyorum.","submit":"Siparişi Gönder","submitting":"Gönderiliyor…","errorGeneric":"Bir hata oluştu, lütfen tekrar deneyin.","errorMissing":"Lütfen ad, telefon ve adres alanlarını doldurun.","errorEmpty":"Sepetiniz boş.","errorRate":"Çok fazla istek, lütfen bir dakika bekleyin."}},"thanks":{"title":"Siparişiniz alındı","orderNoLabel":"Sipariş no","subtitle":"Ekibimiz 5 dakika içinde sizi arayarak teyit edecek.","back":"Anasayfa","reorder":"Yeni sipariş"}};
const menuPage$2 = {"meta":{"title":"Menü — Mi Mesa","description":"Mi Mesa menüsü: salatalar, et yemekleri, Anadolu mutfağı, tatlılar ve içecekler. Mevsime göre yenilenen, hikayesi olan tabaklar.","ogAlt":"Mi Mesa menüsü"},"splash":{"welcome":"Hoşgeldiniz","tagline":"Benim masam, benim sofram.","enterButton":"Menüye Git","backHome":"Anasayfa"},"index":{"eyebrow":"Carte","title":"Sofrayı,","titleEm":"birlikte açalım.","subtitle":"Mevsime, hasada ve şefin o akşamki ilhamına göre yenilenen menümüz. Her başlık bir kapı; arkasında bir hikâye, bir tabak.","itemsLabel":"tabak","enterLabel":"Keşfet","categoryMetaTitle":"{name} — Mi Mesa Menüsü","footnote":"Fiyatlar Türk Lirası cinsindendir. Menümüz mevsime, ürünün gününe ve şefin ilhamına göre değişiklik gösterebilir. Alerji ve özel diyet tercihleriniz için lütfen ekibimize bilgi veriniz."},"category":{"backToMenu":"Kategoriler","backToSplash":"Menü","itemsLabel":"tabak","askChef":"Şefe sorunuz"},"topbar":{"back":"Geri"}};
const tr = {
  meta: meta$2,
  nav: nav$2,
  hero: hero$2,
  manifesto: manifesto$2,
  heritage: heritage$2,
  menu: menu$2,
  chef: chef$2,
  reservation: reservation$2,
  contact: contact$2,
  footer: footer$2,
  orderPage: orderPage$2,
  menuPage: menuPage$2,
};

const meta$1 = {"title":"Mi Mesa Restaurant — Bodrum | My table, my feast","description":"A modern reading of Mesopotamian village cuisine. At Mi Mesa, story, heritage, and the table become one.","ogAlt":"Mi Mesa fine dining restaurant"};
const nav$1 = {"manifesto":"Manifesto","heritage":"Heritage","menu":"Menu","order":"Order","chef":"Chef","reservation":"Reservation","contact":"Contact","open":"Open menu","close":"Close menu"};
const hero$1 = {"eyebrow":"MI MESA","tagline":"My table,","tagline2":"my feast.","subtitle":"A heritage carried from the dusty roads of Mesopotamia, from quiet evenings around the fire, to your senses.","cta":"Reserve","scroll":"Discover"};
const manifesto$1 = {"eyebrow":"A Table Where Borders Fall","title":"The memory of a feast,","titleEm":"the promise of horizons.","body":"Mi Mesa is a borderless map of flavor, reaching from the ancient spice roads of Mesopotamia to the clear breeze of the Mediterranean. On one side, our kebab fire kindled with the traditions of Arab and Anatolian cuisine; on the other, the abundance of our oven that patiently shapes the dough… At our table, flavor refuses to be confined to a single geography.","body2":"We see dining not as performance, but as a universal invitation where different cultures, languages, and fires speak around the same table. When we say \"my table, my feast\", we are calling you not merely as a guest but as part of this endless celebration, where the mystic soul of the East meets the elegance of the West."};
const heritage$1 = {"eyebrow":"Heritage & Land","title":"The memory of the soil,","titleEm":"the loyalty of the plate.","body":"Our grains come from small producers, our greens follow the season's true calendar, our meats from traditional growers in the mountain villages. Every ingredient has a name, an address, a story.","captions":{"one":"Village oven / hours of silence","two":"Copper pot / from one generation to the next","three":"Seasonal herbs / morning harvest","four":"Family table / a shared evening"}};
const menu$1 = {"eyebrow":"Digital Menu","title":"Discover the","titleEm":"map of flavor.","body":"Discover a menu shaped by the abundance of the land, the rhythm of the season, and Chef Hakan Akkaya's inspiration on the day. Step into tonight's gastronomic journey with a single touch.","cta":"Browse the digital menu"};
const chef$1 = {"eyebrow":"Chef","title":"","titleLead":"Flavor's","titleEm":"Inventor","name":"Chef Hakan Akkaya","quote":"\"My roots took shape in the ancient lands of Mesopotamia; my soul was tempered in the fires of kitchens around the world. Now, in every plate, I am rewriting an adventure of decades that crosses borders.\"","body":"Hakan Akkaya's story began at the abundant tables of İskenderun, among the rich spice scents of Anatolia and Mesopotamia. The passion kneaded by these ancient flavors carried him beyond borders. Through a full decade of journeys across Lebanon, Kuwait, Dubai, Libya, and Iraq, he mastered the deepest secrets of Arab cuisine and became a true master of his craft.","body2":"When that long journey brought him to the olive-scented shores of the Aegean and into the distinguished kitchens of premium hotels, he wove the freshness of the Aegean together with the elegant touches of Italian, French, Spanish, and Mexican cuisines.","body3":"Now seeking to express this unique, continent-spanning craft entirely on his own terms, Chef Akkaya became our founding chef with a new vision — to carry Mi Mesa onto the world stage. Every touch at the Mi Mesa table becomes a delicious chapter of the story he tells from his journey across continents."};
const reservation$1 = {"eyebrow":"Reservation","title":"Your table","titleEm":"is waiting.","body":"Our kitchen is open 24/7. Please share your preferred time and any notes; we will get back to you.","form":{"name":"Your name","email":"Email","phone":"Phone","date":"Date","time":"Time","guests":"Guests","note":"Note","notePlaceholder":"Allergies, celebration, sensitivities…","submit":"Prepare our table","thanks":"Thank you — we will be in touch shortly."}};
const contact$1 = {"eyebrow":"Contact","address":"Mi Mesa Restaurant","addressLines":["Meşelik Dist., Muğla–Bodrum Road","48670 Milas / Muğla"],"phoneTitle":"Phone","phone":"+90 530 821 96 85","phoneIntl":"+905308219685","hoursTitle":"Service hours","hours":["Open 24/7"],"social":"Follow us"};
const footer$1 = {"tagline":"My table, my feast.","rights":"All rights reserved."};
const orderPage$1 = {"meta":{"title":"Order — Mi Mesa","description":"Order Mi Mesa delivery. Our team will call to confirm within 5 minutes.","ogAlt":"Mi Mesa order"},"splash":{"welcome":"Welcome, let us take your order","tagline":"My table, my feast.","enterButton":"Browse the menu","backHome":"Home"},"index":{"eyebrow":"Order","title":"Let us bring,","titleEm":"the table to you.","subtitle":"Add to your basket; we'll call to confirm within 5 minutes.","itemsLabel":"plates","categoryMetaTitle":"{name} — Mi Mesa Order","footnote":"Prices are in Turkish Liras. After we receive your order, our team will call to confirm. Payment is taken at the door — cash or card."},"category":{"backToOrder":"Categories","backToSplash":"Order","itemsLabel":"plates","askChef":"Ask the chef"},"card":{"addToCart":"+ Add to basket","added":"Added"},"cart":{"title":"Your basket","empty":"Your basket is empty.","browseMenu":"Back to menu","qty":"Quantity","remove":"Remove","subtotal":"Subtotal","total":"Total","checkout":"Complete order","fabAria":"Open basket","close":"Close"},"checkout":{"title":"Complete your order","subtitle":"We'll call your number within 5 minutes to confirm.","summaryTitle":"Your basket","summaryEmpty":"Your basket is empty. Pick something from the menu first.","backToOrder":"Back to menu","form":{"name":"Your name","phone":"Phone","email":"Email (optional)","address":"Address","addressPlaceholder":"Neighbourhood, street, building no., flat","addressNote":"Directions (optional)","addressNotePlaceholder":"Doorbell, floor, landmark…","note":"Order note (optional)","notePlaceholder":"Allergies, sensitivities, special requests…","paymentTitle":"Payment method","paymentCash":"Cash at door","paymentCard":"Card at door","kvkk":"I agree my contact details will be used to confirm this order.","submit":"Place order","submitting":"Sending…","errorGeneric":"Something went wrong — please try again.","errorMissing":"Please fill in name, phone and address.","errorEmpty":"Your basket is empty.","errorRate":"Too many requests, please wait a minute."}},"thanks":{"title":"Order received","orderNoLabel":"Order no.","subtitle":"Our team will call to confirm within 5 minutes.","back":"Home","reorder":"New order"}};
const menuPage$1 = {"meta":{"title":"Menu — Mi Mesa","description":"Mi Mesa menu: salads, fire-cooked meats, Anatolian kitchen, sweets and sips. Plates with a story, renewed by the season.","ogAlt":"Mi Mesa menu"},"splash":{"welcome":"Welcome","tagline":"My table, my feast.","enterButton":"Browse the menu","backHome":"Home"},"index":{"eyebrow":"Carte","title":"Let us open,","titleEm":"the table together.","subtitle":"A menu that changes with the season, the harvest, and the chef's nightly inspiration. Each title is a door; behind it, a story and a plate.","itemsLabel":"plates","enterLabel":"Enter","categoryMetaTitle":"{name} — Mi Mesa Menu","footnote":"Prices are in Turkish Liras. Our menu shifts with the season, the day's harvest, and the chef's mood. Please share any allergies or dietary preferences with our team."},"category":{"backToMenu":"Categories","backToSplash":"Menu","itemsLabel":"plates","askChef":"Ask the chef"},"topbar":{"back":"Back"}};
const en = {
  meta: meta$1,
  nav: nav$1,
  hero: hero$1,
  manifesto: manifesto$1,
  heritage: heritage$1,
  menu: menu$1,
  chef: chef$1,
  reservation: reservation$1,
  contact: contact$1,
  footer: footer$1,
  orderPage: orderPage$1,
  menuPage: menuPage$1,
};

const meta = {"title":"مطعم مي ميسا — بودروم | مائدتي، وليمتي","description":"قراءة حديثة لمطبخ القرية الرافديني. في مي ميسا تلتقي الحكاية والإرث والمائدة في لحظة واحدة.","ogAlt":"مي ميسا — مطعم الذواقة"};
const nav = {"manifesto":"البيان","heritage":"الإرث","menu":"القائمة","order":"اطلب الآن","chef":"الشيف","reservation":"الحجز","contact":"اتصل بنا","open":"فتح القائمة","close":"إغلاق القائمة"};
const hero = {"eyebrow":"مي ميسا","tagline":"مائدتي،","tagline2":"وليمتي.","subtitle":"إرثٌ محمولٌ من دروب بلاد الرافدين الترابية، ومن أمسيات النار الصامتة، إلى حواسّكم.","cta":"احجز طاولتك","scroll":"اكتشف"};
const manifesto = {"eyebrow":"مائدةٌ تتلاشى عندها الحدود","title":"ذاكرةُ وليمة،","titleEm":"ووعدُ الآفاق.","body":"مي ميسا خريطةٌ بلا حدود للنكهة، تمتدّ من دروب التوابل العريقة في بلاد الرافدين إلى نقاء البحر الأبيض المتوسط. في جانب، نار الكباب تتقد بتقاليد المطبخ العربي والأناضولي؛ وفي الجانب الآخر، بركة فرننا الذي يعجن العجين بصبرٍ… على مائدتنا، لا تتسع النكهة لجغرافيا واحدة.","body2":"نحن لا نرى الطعام عرضاً، بل دعوةً كونيّةً تلتقي حولها ثقافاتٌ ولغاتٌ ونيران مختلفة على المائدة نفسها. حين نقول \"مائدتي، وليمتي\"، فإنّنا ندعوكم لا ضيوفاً فحسب، بل شركاءَ في هذه الوليمة اللانهائية، حيث تلتقي روحُ الشرق الصوفية بأناقة الغرب."};
const heritage = {"eyebrow":"إرث وأرض","title":"ذاكرةُ التراب،","titleEm":"وفاءُ الطبق.","body":"حبوبنا من المزارعين الصغار، وخضرواتنا تتبع تقويم الفصول الحقيقي، ولحومنا من المربّين التقليديين في قرى الجبال. لكل عنصر اسم وعنوان وحكاية.","captions":{"one":"فرن القرية / ساعاتٌ من الصمت","two":"إناءٌ نحاسي / من جيلٍ إلى جيل","three":"أعشاب الموسم / حصاد الفجر","four":"مائدة العائلة / مساءٌ مشترك"}};
const menu = {"eyebrow":"القائمة الرقمية","title":"اكتشفوا","titleEm":"خريطة النكهات.","body":"اكتشفوا قائمتنا التي تتشكّل من خيرات الأرض، وإيقاع الموسم، وإلهام الشيف هاكان أكّايا في كل يوم. ادخلوا رحلة الذوق في هذا المساء بلمسةٍ واحدة.","cta":"تصفّح القائمة الرقمية"};
const chef = {"eyebrow":"الشيف","title":"","titleLead":"مبتكر","titleEm":"النكهة","name":"الشيف هاكان أكّايا","quote":"\"تجذّرت جذوري في أراضي بلاد الرافدين العريقة، وتشكّلت روحي في نيران مطابخ العالم. واليوم، في كل طبق، أعيد كتابة رحلةٍ تمتدّ لعقودٍ وتعبر الحدود.\"","body":"بدأت حكاية هاكان أكّايا على موائد إسكندرون الكريمة، بين روائح بهارات الأناضول وبلاد الرافدين الغنية. وحملَه شغفه المعجون بهذه النكهات العريقة إلى ما وراء الحدود. وعلى مدى عقدٍ كاملٍ من الترحال بين لبنان والكويت ودبي وليبيا والعراق، أتقن أدقّ أسرار المطبخ العربي وصار سيّداً حقيقياً في فنّه.","body2":"وحين قادته رحلته الطويلة إلى شواطئ بحر إيجة العبقة برائحة الزيتون، وإلى مطابخ الفنادق الراقية، مزج طزاجة بحر إيجة بلمساتٍ أنيقةٍ من المطابخ الإيطالية والفرنسية والإسبانية والمكسيكية.","body3":"ورغبةً منه في أن يعرض هذا المخزون النادر العابر للقارات بكل حريّة، صار الشيف أكّايا شيفنا المؤسس برؤيةٍ جديدة، وبشغفٍ يحوّل مي ميسا إلى علامةٍ عالمية. كل لمسةٍ على موائد مي ميسا تصير فصلاً شهيّاً من حكايته العابرة للقارات."};
const reservation = {"eyebrow":"الحجز","title":"طاولتكم","titleEm":"بانتظاركم.","body":"مطبخنا مفتوح على مدار الساعة طوال أيام الأسبوع. يرجى مشاركة الوقت المفضّل وأي ملاحظات، وسنتواصل معكم.","form":{"name":"الاسم","email":"البريد الإلكتروني","phone":"الهاتف","date":"التاريخ","time":"الساعة","guests":"عدد الأشخاص","note":"ملاحظة","notePlaceholder":"حساسيات، احتفال خاص، تفضيلات…","submit":"هيّئوا طاولتنا","thanks":"شكراً لكم — سنعود إليكم قريباً."}};
const contact = {"eyebrow":"اتصل بنا","address":"مطعم مي ميسا","addressLines":["حي مشليك، طريق موغلا – بودروم","48670 ميلاس / موغلا"],"phoneTitle":"الهاتف","phone":"+90 530 821 96 85","phoneIntl":"+905308219685","hoursTitle":"ساعات الخدمة","hours":["مفتوح ٢٤ / ٧"],"social":"تابعونا"};
const footer = {"tagline":"مائدتي، وليمتي.","rights":"جميع الحقوق محفوظة."};
const orderPage = {"meta":{"title":"اطلب — مي ميسا","description":"اطلب توصيلاً من مي ميسا. سيتصل بكم فريقنا خلال 5 دقائق للتأكيد.","ogAlt":"طلب من مي ميسا"},"splash":{"welcome":"أهلاً، دعونا نأخذ طلبكم","tagline":"مائدتي، وليمتي.","enterButton":"تصفّح القائمة","backHome":"الرئيسية"},"index":{"eyebrow":"طلب","title":"لنحمل المائدة،","titleEm":"إلى بيتكم.","subtitle":"أضف إلى سلتك، وسنتصل خلال 5 دقائق للتأكيد.","itemsLabel":"أطباق","categoryMetaTitle":"{name} — طلب مي ميسا","footnote":"الأسعار بالليرة التركية. بعد استلام طلبكم، سيتصل بكم فريقنا للتأكيد. الدفع عند الباب نقداً أو بالبطاقة."},"category":{"backToOrder":"الفئات","backToSplash":"الطلب","itemsLabel":"أطباق","askChef":"اسأل الشيف"},"card":{"addToCart":"+ أضف إلى السلة","added":"تمت الإضافة"},"cart":{"title":"سلّتك","empty":"سلّتك فارغة.","browseMenu":"العودة إلى القائمة","qty":"الكمية","remove":"إزالة","subtotal":"المجموع الفرعي","total":"المجموع","checkout":"أكمل الطلب","fabAria":"فتح السلة","close":"إغلاق"},"checkout":{"title":"أكمل طلبك","subtitle":"سنتصل بك خلال 5 دقائق للتأكيد.","summaryTitle":"سلّتك","summaryEmpty":"سلّتك فارغة. اختر شيئاً من القائمة أولاً.","backToOrder":"العودة إلى القائمة","form":{"name":"الاسم","phone":"الهاتف","email":"البريد الإلكتروني (اختياري)","address":"العنوان","addressPlaceholder":"الحي، الشارع، رقم المبنى، الشقة","addressNote":"ملاحظة العنوان (اختياري)","addressNotePlaceholder":"الجرس، الطابق، علامة مميزة…","note":"ملاحظة الطلب (اختياري)","notePlaceholder":"حساسيات، طلبات خاصة…","paymentTitle":"طريقة الدفع","paymentCash":"نقداً عند الباب","paymentCard":"ببطاقة عند الباب","kvkk":"أوافق على استخدام بياناتي للتأكيد على هذا الطلب.","submit":"إرسال الطلب","submitting":"جارٍ الإرسال…","errorGeneric":"حدث خطأ، حاول مرة أخرى.","errorMissing":"يرجى تعبئة الاسم والهاتف والعنوان.","errorEmpty":"سلّتك فارغة.","errorRate":"طلبات كثيرة، يرجى الانتظار دقيقة."}},"thanks":{"title":"تم استلام طلبك","orderNoLabel":"رقم الطلب","subtitle":"سيتصل بكم فريقنا خلال 5 دقائق للتأكيد.","back":"الرئيسية","reorder":"طلب جديد"}};
const menuPage = {"meta":{"title":"القائمة — مي ميسا","description":"قائمة مي ميسا: السلطات، اللحوم على النار، مطبخ الأناضول، الحلويات والمشروبات. أطباقٌ بحكاية، تتجدّد مع الموسم.","ogAlt":"قائمة مي ميسا"},"splash":{"welcome":"أهلاً وسهلاً","tagline":"مائدتي، وليمتي.","enterButton":"تصفّح القائمة","backHome":"الرئيسية"},"index":{"eyebrow":"القائمة","title":"لنفتحْ المائدة،","titleEm":"معاً.","subtitle":"قائمةٌ تتجدّد مع الموسم، ومع الحصاد، ومع إلهام الشيف في تلك الليلة. كل عنوان بابٌ؛ خلفه حكايةٌ وطبق.","itemsLabel":"أطباق","enterLabel":"ادخل","categoryMetaTitle":"{name} — قائمة مي ميسا","footnote":"الأسعار بالليرة التركية. تتغيّر القائمة بحسب الموسم، وحصاد اليوم، وإلهام الشيف. نرجو إخبار فريقنا بأي حساسيّاتٍ أو تفضيلاتٍ غذائية."},"category":{"backToMenu":"الفئات","backToSplash":"القائمة","itemsLabel":"أطباق","askChef":"اسأل الشيف"},"topbar":{"back":"رجوع"}};
const ar = {
  meta,
  nav,
  hero,
  manifesto,
  heritage,
  menu,
  chef,
  reservation,
  contact,
  footer,
  orderPage,
  menuPage,
};

const locales = ["tr", "en", "ar"];
const defaultLocale = "tr";
const localeLabels = {
  tr: "TR",
  en: "EN",
  ar: "AR"
};
const localeHtml = {
  tr: "tr-TR",
  en: "en-US",
  ar: "ar"
};
const dictionaries = { tr, en, ar };
function getDict(lang) {
  return dictionaries[lang];
}
function getDir(lang) {
  return lang === "ar" ? "rtl" : "ltr";
}
function localizedPath(lang, path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  return `/${lang}${clean === "/" ? "" : clean}`;
}
const localePrefixRe = new RegExp(`^/(${locales.filter((l) => l !== defaultLocale).join("|")})(?=/|$)`);
function stripLocalePrefix(pathname) {
  const stripped = pathname.replace(localePrefixRe, "");
  return stripped === "" ? "/" : stripped;
}

const SITE = "https://mimesarestoran.com";
function restaurantSchema(lang) {
  const name = lang === "ar" ? "مي ميسا" : "Mi Mesa";
  const description = lang === "tr" ? "Mezopotamya köy mutfağının modern yorumu. Mi Mesa fine dining restoranı." : lang === "en" ? "A modern reading of Mesopotamian village cuisine. Mi Mesa fine dining restaurant." : "قراءة حديثة لمطبخ القرية الرافديني. مطعم مي ميسا للذواقة.";
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE}#restaurant`,
    name,
    alternateName: "Mi Mesa",
    url: SITE,
    description,
    image: [`${SITE}/og-image.jpg`],
    logo: `${SITE}/logo.png`,
    telephone: "+905308219685",
    priceRange: "$$$",
    servesCuisine: ["Turkish", "Anatolian", "Mediterranean", "Fine Dining"],
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Meşelik Mah., Muğla-Bodrum Yolu",
      addressLocality: "Milas",
      addressRegion: "Muğla",
      postalCode: "48670",
      addressCountry: "TR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.268537,
      longitude: 27.768183
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    sameAs: [
      "https://www.instagram.com/mimesarestoran",
      "https://wa.me/905308219685"
    ]
  };
}

const $$Astro$3 = createAstro("https://mimesarestoran.com");
const $$CartFab = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CartFab;
  const { lang } = Astro2.props;
  const t = getDict(lang).orderPage.cart;
  return renderTemplate`${maybeRenderHead()}<button type="button" data-cart-fab${addAttribute(t.fabAria, "aria-label")} class="cart-fab fixed bottom-5 end-5 md:bottom-7 md:end-7 z-40 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--color-copper)] text-[var(--color-champagne)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105" hidden> <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 md:w-7 md:h-7"> <path d="M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"></path> <circle cx="9.5" cy="20" r="1.2" fill="currentColor"></circle> <circle cx="17" cy="20" r="1.2" fill="currentColor"></circle> </svg> <span data-cart-badge class="absolute -top-1 -end-1 min-w-[22px] h-[22px] px-1.5 inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-champagne)] text-[0.7rem] font-medium leading-none">0</span> </button> ${renderScript($$result, "C:/Users/Serkan/MiMesa/src/components/order/CartFab.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Serkan/MiMesa/src/components/order/CartFab.astro", void 0);

const $$Astro$2 = createAstro("https://mimesarestoran.com");
const $$CartDrawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CartDrawer;
  const { lang } = Astro2.props;
  const t = getDict(lang).orderPage.cart;
  const checkoutHref = localizedPath(lang, "/siparis-ver/odeme");
  const browseHref = localizedPath(lang, "/siparis-ver/kategoriler");
  const isAr = lang === "ar";
  return renderTemplate`${maybeRenderHead()}<div data-cart-drawer${addAttribute(lang, "data-lang")} hidden class="fixed inset-0 z-50" aria-modal="true" role="dialog"${addAttribute(t.title, "aria-label")}> <!-- Backdrop --> <div data-cart-backdrop class="absolute inset-0 bg-[var(--color-charcoal)]/55 opacity-0 transition-opacity duration-300"></div> <!-- Panel --> <aside data-cart-panel${addAttribute([
    "absolute top-0 bottom-0 w-full max-w-md bg-[var(--color-offwhite)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] flex flex-col transform transition-transform duration-300",
    isAr ? "start-0 -translate-x-full" : "end-0 translate-x-full"
  ], "class:list")}> <!-- Header --> <header class="flex items-center justify-between px-5 md:px-7 h-[64px] border-b border-[var(--color-copper)]/20"> <h2 style="font-family:var(--font-display);font-style:italic;font-weight:500;font-size:1.25rem;color:var(--color-ink);"> ${t.title} </h2> <button type="button" data-cart-close${addAttribute(t.close, "aria-label")} class="p-2 -me-2 text-[var(--color-ink)]/70 hover:text-[var(--color-copper)] transition-colors"> <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"> <path d="M6 6l12 12M18 6l-12 12"></path> </svg> </button> </header> <!-- Empty state --> <div data-cart-empty class="flex-1 flex flex-col items-center justify-center px-7 text-center gap-5" hidden> <p class="text-[var(--color-ink)]/65 italic" style="font-family:var(--font-display);font-size:1.1rem;"> ${t.empty} </p> <a${addAttribute(browseHref, "href")} class="btn-copper"> ${t.browseMenu} </a> </div> <!-- Lines --> <div data-cart-lines class="flex-1 overflow-y-auto px-5 md:px-7 py-4"></div> <!-- Footer (total + checkout) --> <footer data-cart-footer class="px-5 md:px-7 pt-4 pb-6 border-t border-[var(--color-copper)]/20 bg-[var(--color-offwhite)]" hidden> <div class="flex items-baseline justify-between mb-4"> <span class="text-[0.78rem] uppercase text-[var(--color-ink)]/60" style="letter-spacing:var(--tracking-wide-luxe);"> ${t.total} </span> <span data-cart-total style="font-family:var(--font-display);font-size:1.5rem;font-weight:500;color:var(--color-copper);">0 ₺</span> </div> <a${addAttribute(checkoutHref, "href")} class="btn-copper w-full justify-center"> ${t.checkout} </a> </footer> </aside> </div> ${renderScript($$result, "C:/Users/Serkan/MiMesa/src/components/order/CartDrawer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Serkan/MiMesa/src/components/order/CartDrawer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://mimesarestoran.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { lang, title, description, ogAlt } = Astro2.props;
  const dir = getDir(lang);
  const htmlLang = localeHtml[lang];
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const ogImage = new URL("/og-image.jpg", Astro2.site);
  const schema = restaurantSchema(lang);
  const currentPath = "/";
  const isOrderRoute = /(^|\/)siparis-ver(\/|$)/.test(Astro2.url.pathname);
  return renderTemplate(_a || (_a = __template(["<html", "", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="generator"', '><meta name="theme-color" content="#F7E7CE"><link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="canonical"', "><title>", '</title><meta name="description"', ">", '<link rel="alternate" hreflang="x-default"', '><meta property="og:type" content="restaurant.restaurant"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:locale"', '><meta property="og:site_name" content="Mi Mesa"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><script type="application/ld+json">', "<\/script>", "", "</head> <body> ", " ", " ", " </body> </html>"])), addAttribute(htmlLang, "lang"), addAttribute(dir, "dir"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(description, "content"), locales.map((l) => renderTemplate`<link rel="alternate"${addAttribute(localeHtml[l], "hreflang")}${addAttribute(new URL(localizedPath(l, currentPath), Astro2.site), "href")}>`), addAttribute(new URL("/", Astro2.site), "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(ogImage, "content"), addAttribute(ogAlt, "content"), addAttribute(htmlLang.replace("-", "_"), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), unescapeHTML(JSON.stringify(schema)), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]), isOrderRoute && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CartFab", $$CartFab, { "lang": lang })} ${renderComponent($$result2, "CartDrawer", $$CartDrawer, { "lang": lang })} ` })}`, renderScript($$result, "C:/Users/Serkan/MiMesa/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Serkan/MiMesa/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://mimesarestoran.com");
const $$LangSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LangSwitcher;
  const { current, tone = "dark" } = Astro2.props;
  const colorBase = tone === "light" ? "text-[var(--color-champagne)]/70" : "text-[color:var(--nav-fg-soft)]";
  const colorActive = tone === "light" ? "text-[var(--color-champagne)]" : "text-[color:var(--nav-fg)]";
  const canonicalPath = stripLocalePrefix(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Language" class="flex items-center gap-3 text-[0.7rem]" style="letter-spacing:var(--tracking-wider-luxe);"> ${locales.map((l, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(localizedPath(l, canonicalPath), "href")}${addAttribute([
    "transition-colors duration-300 hover:text-[var(--color-copper)]",
    l === current ? colorActive : colorBase
  ], "class:list")}${addAttribute(l === current ? "true" : void 0, "aria-current")}${addAttribute(l, "lang")}>${localeLabels[l]}</a> ${i < locales.length - 1 && renderTemplate`<span${addAttribute([colorBase], "class:list")} aria-hidden="true">·</span>`}` })}`)} </nav>`;
}, "C:/Users/Serkan/MiMesa/src/components/LangSwitcher.astro", void 0);

export { $$BaseLayout as $, $$LangSwitcher as a, getDict as g, localizedPath as l };
