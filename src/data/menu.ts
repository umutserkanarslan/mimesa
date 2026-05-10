// Seed source for the Supabase migration script (scripts/seed.ts).
// At runtime the public site reads from Supabase, not this file.

type Tx = { tr: string; en: string; ar: string };

interface SeedCategory {
  slug: string;
  order: number;
  name: Tx;
  tagline: Tx;
  description: Tx;
  cover: string;
}

interface SeedItem {
  id: string;
  slug: string;
  category: string;
  name: Tx;
  description: Tx;
  price: number;
  currency: 'TRY';
  image: string;
  flags?: string[];
}

interface SeedData {
  categories: SeedCategory[];
  items: SeedItem[];
}

export const menuData: SeedData = {
  categories: [
    {
      slug: 'salatalar',
      order: 1,
      name: {
        tr: 'Salatalar',
        en: 'Salads',
        ar: 'السلطات',
      },
      tagline: {
        tr: 'mevsimin sessiz nefesi',
        en: 'the quiet breath of the season',
        ar: 'نَفَسُ الموسمِ الهادئ',
      },
      description: {
        tr: 'Sabah hasadı yeşillikler, dağ köylerinin taze otları ve tabağa düşen mevsimin sadakati.',
        en: 'Morning-picked greens, fresh herbs from mountain villages, and the season\'s loyalty on the plate.',
        ar: 'خضرواتٌ من حصاد الفجر، وأعشابٌ طازجةٌ من قرى الجبال، ووفاءُ الموسم على الطبق.',
      },
      cover: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=72',
    },
    {
      slug: 'et-yemekleri',
      order: 2,
      name: {
        tr: 'Et Yemekleri',
        en: 'From the Fire',
        ar: 'من النار',
      },
      tagline: {
        tr: 'ateşin sabırlı dili',
        en: 'the patient language of fire',
        ar: 'لغةُ النارِ الصبور',
      },
      description: {
        tr: 'Saatlerce alev üstünde dinlenmiş etler; tandırın, közün ve odun ateşinin hatırası.',
        en: 'Meats rested for hours over flame — the memory of the tandoor, the embers, the wood fire.',
        ar: 'لحومٌ ارتاحت لساعاتٍ فوق اللهب — ذاكرةُ التنور، والجمر، ونار الحطب.',
      },
      cover: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=72',
    },
    {
      slug: 'anadolu-mutfagi',
      order: 3,
      name: {
        tr: 'Anadolu Mutfağı',
        en: 'Anatolian Kitchen',
        ar: 'مطبخ الأناضول',
      },
      tagline: {
        tr: 'bir kuşaktan ötekine',
        en: 'from one generation to the next',
        ar: 'من جيلٍ إلى جيل',
      },
      description: {
        tr: 'Anneannelerin tariflerinden, bakır tencerelerden, taş fırınlardan damağa düşen miras.',
        en: 'Heritage carried from grandmothers\' recipes, copper pots, and stone ovens onto the table.',
        ar: 'إرثٌ من وصفات الجدات، ومن الأواني النحاسية، ومن أفران الحجر، إلى المائدة.',
      },
      cover: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=72',
    },
    {
      slug: 'tatlilar-icecekler',
      order: 4,
      name: {
        tr: 'Tatlılar & İçecekler',
        en: 'Sweets & Sips',
        ar: 'حلويات ومشروبات',
      },
      tagline: {
        tr: 'akşamın yumuşak bitişi',
        en: 'the soft closing of the evening',
        ar: 'خِتامُ المساءِ الناعم',
      },
      description: {
        tr: 'Şerbetli hamurlar, tarçınlı sıcaklıklar, taş değirmenden geçen kahveler ve köy yoğurdunun ayranı.',
        en: 'Syrup-soaked pastries, cinnamon warmth, stone-mill coffee, and ayran from village yogurt.',
        ar: 'معجناتٌ بالقَطْر، ودفءُ القرفة، وقهوةُ الرحى الحجرية، وعيران من زبدة القرية.',
      },
      cover: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=900&q=72',
    },
  ],

  items: [
    // ---- SALATALAR ----
    {
      id: 'sal-bostana',
      slug: 'bostana-salatasi',
      category: 'salatalar',
      name: {
        tr: 'Bostana Salatası',
        en: 'Bostana Salad',
        ar: 'سلطة بستانة',
      },
      description: {
        tr: 'Köy domatesi, salatalık, taze nane, sumak ve nar ekşisinin sessiz dengesi.',
        en: 'Village tomato, cucumber, fresh mint, sumac, and the quiet balance of pomegranate molasses.',
        ar: 'طماطم القرية، خيار، نعناع طازج، سمّاق، وتوازن دبس الرمان الهادئ.',
      },
      price: 285,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=700&q=72',
      flags: ['vegan', 'gluten-free'],
    },
    {
      id: 'sal-kisir',
      slug: 'kisir',
      category: 'salatalar',
      name: {
        tr: 'Kısır',
        en: 'Kısır',
        ar: 'كِسير',
      },
      description: {
        tr: 'İnce bulgur, közlenmiş biber, taze maydanoz; isot ve nar ekşisiyle uyandırılmış.',
        en: 'Fine bulgur, charred pepper, parsley — awakened with isot and pomegranate molasses.',
        ar: 'برغل ناعم، فلفل مشوي، بقدونس طازج، يوقَظ بفلفل الإيزوت ودبس الرمان.',
      },
      price: 245,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=700&q=72',
      flags: ['vegan'],
    },
    {
      id: 'sal-roka',
      slug: 'cevizli-roka',
      category: 'salatalar',
      name: {
        tr: 'Cevizli Roka',
        en: 'Rocket & Walnut',
        ar: 'جرجير بالجوز',
      },
      description: {
        tr: 'Taze roka, taş kırığı ceviz, nar taneleri, eski peynir; zeytinyağı ve narla dingin.',
        en: 'Fresh rocket, stone-cracked walnut, pomegranate seeds, aged cheese; calmed with olive oil and pomegranate.',
        ar: 'جرجير طازج، جوز مطحون بالحجر، حبّات رمّان، جبن معتّق؛ زيت الزيتون ودبس الرمان.',
      },
      price: 295,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=700&q=72',
      flags: ['vegetarian', 'gluten-free'],
    },
    {
      id: 'sal-coban-bahcesi',
      slug: 'coban-bahcesi',
      category: 'salatalar',
      name: {
        tr: 'Çoban Bahçesi',
        en: 'Shepherd\'s Garden',
        ar: 'حديقة الراعي',
      },
      description: {
        tr: 'Domates, salatalık, kuru soğan, közlenmiş yeşil biber; köy beyaz peyniri eşliğinde.',
        en: 'Tomato, cucumber, dry onion, roasted green pepper, accompanied by village white cheese.',
        ar: 'طماطم، خيار، بصل، فلفل أخضر مشوي، مع جبن القرية الأبيض.',
      },
      price: 265,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=700&q=72',
      flags: ['vegetarian', 'gluten-free'],
    },

    // ---- ET YEMEKLERİ ----
    {
      id: 'et-tandir-kuzu',
      slug: 'tandir-kuzu-kulbasti',
      category: 'et-yemekleri',
      name: {
        tr: 'Tandır Kuzu Külbastı',
        en: 'Tandoor Lamb Külbastı',
        ar: 'كولباستي لحم الخروف بالتنور',
      },
      description: {
        tr: 'On iki saat kil tandırda dinlenmiş kuzu, ev mayalı pide, közlenmiş soğan refakatinde.',
        en: 'Lamb rested twelve hours in a clay tandoor, with house-leavened pide and charred onion.',
        ar: 'لحم خروف مطهو اثنتي عشرة ساعةً في تنور طيني، مع خبز معجّن في البيت وبصل مشوي.',
      },
      price: 985,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=72',
      flags: ['signature'],
    },
    {
      id: 'et-mardin-kofte',
      slug: 'mardin-koftesi',
      category: 'et-yemekleri',
      name: {
        tr: 'Mardin Köftesi',
        en: 'Mardin Köfte',
        ar: 'كفتة ماردين',
      },
      description: {
        tr: 'El yoğurması dana, közlenmiş biber, isot tereyağı; közde uyutulmuş.',
        en: 'Hand-kneaded beef, charred pepper, isot butter — slept on the embers.',
        ar: 'لحم بقر معجون باليد، فلفل مشوي، زبدة الإيزوت؛ يرتاح على الجمر.',
      },
      price: 745,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=72',
      flags: ['spicy'],
    },
    {
      id: 'et-antep-kebabi',
      slug: 'antep-kebabi',
      category: 'et-yemekleri',
      name: {
        tr: 'Antep Kebabı',
        en: 'Antep Kebab',
        ar: 'كباب عنتاب',
      },
      description: {
        tr: 'Sarımsaklı dana kıyma, sumaklı soğan, közlenmiş domates; odun ateşi.',
        en: 'Garlic-laced beef mince, sumac onion, charred tomato — over wood fire.',
        ar: 'لحم بقر مفروم بالثوم، بصل بالسمّاق، طماطم مشوية؛ على نار الحطب.',
      },
      price: 825,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=72',
    },
    {
      id: 'et-bonfile-tandir',
      slug: 'bonfile-tandir',
      category: 'et-yemekleri',
      name: {
        tr: 'Bonfile Tandır',
        en: 'Tandoor Tenderloin',
        ar: 'تندرلوين بالتنور',
      },
      description: {
        tr: 'Dağ köyü dananın bonfilesi, biberiye ve sarımsak; közlenmiş kök sebzeler.',
        en: 'Mountain-village beef tenderloin with rosemary and garlic, alongside roasted root vegetables.',
        ar: 'تندرلوين لحم بقر من قرى الجبال، إكليل الجبل والثوم؛ خضروات جذرية مشوية.',
      },
      price: 1195,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=72',
      flags: ['signature', 'gluten-free'],
    },

    // ---- ANADOLU MUTFAĞI ----
    {
      id: 'an-manti',
      slug: 'manti-diyarbakir',
      category: 'anadolu-mutfagi',
      name: {
        tr: 'Diyarbakır Mantısı',
        en: 'Diyarbakır Mantı',
        ar: 'منتي ديار بكر',
      },
      description: {
        tr: 'El açması yufka, sarımsaklı yoğurt, kızıl tereyağı; isot biberi serpiştirilmiş.',
        en: 'Hand-rolled dough, garlic yogurt, red butter — sprinkled with isot pepper.',
        ar: 'عجين مفرود باليد، لبن بالثوم، زبدة حمراء؛ مع رشّة من فلفل الإيزوت.',
      },
      price: 465,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=700&q=72',
      flags: ['signature'],
    },
    {
      id: 'an-cig-kofte',
      slug: 'cig-kofte',
      category: 'anadolu-mutfagi',
      name: {
        tr: 'Çiğ Köfte (Etsiz)',
        en: 'Çiğ Köfte (Plant-based)',
        ar: 'تشي كفتة (نباتية)',
      },
      description: {
        tr: 'İnce bulgur, isot, ceviz ve nane; taze marul yaprağı, limon ve nar ekşisi.',
        en: 'Fine bulgur, isot, walnut, mint — fresh lettuce, lemon, and pomegranate molasses.',
        ar: 'برغل ناعم، إيزوت، جوز، نعناع — خس طازج، ليمون، ودبس الرمان.',
      },
      price: 285,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1606755456206-b25206cde27e?auto=format&fit=crop&w=700&q=72',
      flags: ['vegan', 'spicy'],
    },
    {
      id: 'an-musakka',
      slug: 'etli-patlican-musakka',
      category: 'anadolu-mutfagi',
      name: {
        tr: 'Etli Patlıcan Musakka',
        en: 'Eggplant Musakka',
        ar: 'مسقّعة الباذنجان باللحم',
      },
      description: {
        tr: 'Köz patlıcan, kuzu kıyma, biber, domates; bakır tencerede ağır ateşte.',
        en: 'Charred eggplant, lamb mince, pepper, tomato — slow-cooked in a copper pot.',
        ar: 'باذنجان مشوي، لحم خروف مفروم، فلفل، طماطم؛ يطهى ببطء في إناء نحاسي.',
      },
      price: 565,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=700&q=72',
    },
    {
      id: 'an-pilav',
      slug: 'sehriyeli-pilav',
      category: 'anadolu-mutfagi',
      name: {
        tr: 'Şehriyeli Pilav',
        en: 'Vermicelli Pilaf',
        ar: 'أرز بالشعيرية',
      },
      description: {
        tr: 'Tereyağında çekirdek pirinç, kavrulmuş şehriye; kuş üzümü ve çam fıstığı eşliğinde.',
        en: 'Butter-glazed rice, toasted vermicelli — with currants and pine nuts.',
        ar: 'أرز بالزبدة، شعيرية محمّصة — مع زبيب وصنوبر.',
      },
      price: 195,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=72',
      flags: ['vegetarian'],
    },

    // ---- TATLILAR & İÇECEKLER ----
    {
      id: 't-kunefe',
      slug: 'kunefe',
      category: 'tatlilar-icecekler',
      name: {
        tr: 'Antep Fıstıklı Künefe',
        en: 'Pistachio Künefe',
        ar: 'كنافة بالفستق الحلبي',
      },
      description: {
        tr: 'Kadayıf, taze kaymak, Antep fıstığı; bakır tepside közde.',
        en: 'Kadayıf, fresh clotted cream, Antep pistachio — on a copper tray over embers.',
        ar: 'قطايف، قشطة طازجة، فستق حلبي — على صينية نحاسية فوق الجمر.',
      },
      price: 345,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1568827999250-3f6afff96e66?auto=format&fit=crop&w=700&q=72',
      flags: ['signature', 'vegetarian'],
    },
    {
      id: 't-sutlac',
      slug: 'firin-sutlac',
      category: 'tatlilar-icecekler',
      name: {
        tr: 'Fırın Sütlaç',
        en: 'Oven-baked Sütlaç',
        ar: 'سُتلاتش بالفرن',
      },
      description: {
        tr: 'Köy sütü, taze pirinç, tarçın; taş fırında üzeri rüzgâr almış.',
        en: 'Village milk, fresh rice, cinnamon — kissed by the wind in a stone oven.',
        ar: 'حليب القرية، أرز طازج، قرفة — لمسةُ الريح في فرن الحجر.',
      },
      price: 195,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=72',
      flags: ['vegetarian'],
    },
    {
      id: 't-turk-kahvesi',
      slug: 'turk-kahvesi',
      category: 'tatlilar-icecekler',
      name: {
        tr: 'Türk Kahvesi',
        en: 'Turkish Coffee',
        ar: 'قهوة تركية',
      },
      description: {
        tr: 'Taş değirmenden geçmiş, bakır cezvede; lokum ve buz gibi su.',
        en: 'Stone-milled, brewed in a copper cezve; with Turkish delight and ice-cold water.',
        ar: 'مطحونة بالرحى الحجرية، تُغلى في رَكوة نحاسية؛ مع راحة الحلقوم وماء بارد.',
      },
      price: 95,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=700&q=72',
      flags: ['vegan', 'gluten-free'],
    },
    {
      id: 't-ayran',
      slug: 'koy-ayrani',
      category: 'tatlilar-icecekler',
      name: {
        tr: 'Köy Ayranı',
        en: 'Village Ayran',
        ar: 'عيران القرية',
      },
      description: {
        tr: 'Köy yoğurdu, taş tuzu, kar gibi köpük; bakır maşrapada.',
        en: 'Village yogurt, stone salt, snow-like foam — in a copper cup.',
        ar: 'لبن القرية، ملحٌ صخري، رغوةٌ كالثلج — في كوبٍ نحاسي.',
      },
      price: 75,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=700&q=72',
      flags: ['vegetarian', 'gluten-free'],
    },
    {
      id: 't-serbet',
      slug: 'sefin-serbeti',
      category: 'tatlilar-icecekler',
      name: {
        tr: 'Şefin Şerbeti',
        en: 'Chef\'s Sherbet',
        ar: 'شربة الشيف',
      },
      description: {
        tr: 'Mevsime göre değişen ev yapımı şerbet: gül, demirhindi ya da nar.',
        en: 'House sherbet that follows the season: rose, tamarind, or pomegranate.',
        ar: 'شربة بيتية تتبع الموسم: ورد، تمر هندي، أو رمان.',
      },
      price: 115,
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=72',
      flags: ['vegan', 'gluten-free'],
    },
  ],
};
