import { Story } from '../types';
import { LOVE_IMAGES } from '../assets/loveImages';

export const INITIAL_STORIES: Story[] = [
  {
    id: 'mapenzi-ya-siri-darasa-la-mwisho',
    title: '❤️ MAPENZI YA SIRI YA DARASA LA MWISHO',
    teaser: 'Alikuwa amemwona kila siku, lakini hakuwahi kufikiria kwamba siku moja angekuwa sababu ya moyo wake kwenda mbio. Tatizo lilikuwa moja tu—kuna siri ambayo hakuna aliyekuwa tayari kuisema...',
    category: 'love-stories',
    readingTime: '12 min',
    likes: 1840,
    views: 14250,
    coverImage: LOVE_IMAGES.secretCollege,
    author: 'Dada Marry',
    isPremium: true,
    priceTsh: 300,
    buttonLabel: '💗 ENDELEA KUSOMA',
    isTrending: true,
    isStoryOfTheDay: true,
    featuredOrder: 1,
    tags: ['Mapenzi ya Chuo', 'Siri Nzito', 'Hisia za Kweli', 'First Love'],
    createdAt: '2026-03-12',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sura ya 1: Jicho Lililobadilisha Kila Kitu',
        isFreePreview: true,
        chapterImage: LOVE_IMAGES.secretCollege,
        previewSnippet: 'Ilikuwa jioni ya mvua kidogo kwenye chumba kile cha mihadhara namba 4B...',
        content: `Ilikuwa jioni ya mvua nyepesi iliyoandamana na baridi kali kwenye kumbi za chuo. Kila mwanafunzi alikuwa akihangaika kujiandaa na mitihani ya mwisho ya kumaliza stashahada.

Mimi, Sarah, nilikuwa nimeketi kona ya dirisha, mkono wangu ukiwa umechoka na kalamu ya bluu. Na hapo ndipo Derrick alipoingia.

Derrick hakufanana na vijana wengine. Alikuwa mkimya, mwenye macho yenye kina kirefu na tabasamu ambalo alikuwa akilitoa mara chache mno. Kila alipopita, wasichana wengi walikuwa wakigeuka, lakini yeye alionekana kama mtu anayebeba ulimwengu mzima mabegani mwake.

Siku hiyo, viti vilikuwa vimejaa pomoni. Derrick alisimama, akatazama huku na kule, kisha akatembea taratibu kuelekea kwenye kiti tupu kilichokuwa karibu yangu kabisa.

"Samahani Sarah, ninaweza kuketi hapa?" aliniuliza kwa sauti yake nzito na ya upole iliyonifanya nistuke kidogo. Nilishangaa hata alijuaje jina langu!

"Nd-ndiyo... hakuna mtu anayekaa hapa," nilijibu huku nikijitahidi kuficha jinsi vidole vyangu vilivyokuwa vikitikisika kwa aibu.

Aliketi. Manukato yake ya vanilla na mbao za asili yalijaza hewa kati yetu. Hakusema neno kwa nusu saa, lakini nilihisi joto lake na kila mara nilipomwangalia kwa pembe ya jicho, nilimkuta akiniangalia. 

Ghafla, akafungua daftari lake, akaandika kitu kwenye kipande cha karatasi, akakikunja, kisha akanisukumia taratibu juu ya meza.

Moyo wangu ulipiga kwa kasi kama ngoma ya harusi. Nilifungua karatasi ile kwa tahadhari. Ndani kulikuwa na maneno matatu tu:

'Kwanini unajifanya hunioni?'`
      },
      {
        chapterNumber: 2,
        title: 'Sura ya 2: Siri Chini ya Mti wa Mvule',
        isFreePreview: false,
        chapterImage: LOVE_IMAGES.heroCouple,
        content: `Moyo wangu ulilipuka kwa hisia nilizoshindwa kuzizuia. Nilimtazama Derrick, naye hakukwepesha macho yake. Tabasamu dogo lilijitokeza kwenye kona ya mdomo wake.

Nilichukua kalamu, nikaandika: 'Sijifanyi. Ni kwamba naogopa kile ninachokiona machoni pako.'

Baada ya darasa lile kuisha, Derrick alinifuata hadi nje kwenye bustani iliyokuwa na mti mkubwa wa mvule. Baridi ilikuwa ikipuliza, lakini ndani ya miili yetu kulikuwa na moto wa hisia ambazo hatukuwahi kuziweka hadharani.

"Sarah, najua watu wote chuoni hapa wanafikiri mimi ni mtu asiye na hisia," Derrick alianza kusema, akisogea hatua moja karibu yangu. "Lakini ukweli ni kwamba, tangu siku ya kwanza niliyokuona ukilia baada ya matokeo ya muhula wa kwanza, sijaweza kumfikiria msichana mwingine yeyote."

Machozi ya furaha na mshtuko yalinilenga. "Lakini Derrick... unajua vizuri kuwa rafiki yangu kipenzi, Brenda, amekuwa akikupenda kwa miaka miwili sasa? Kama tukiruhusu hili, tutamvunja moyo wake vipande vipande!"

Derrick alishika mikono yangu yote miwili. Mikono yake ilikuwa ya joto, thabiti na yenye kuleta amani ya ajabu. "Siwezi kumlazimisha moyo wangu kumpenda mtu mwingine ili tu kumfurahisha mtu, Sarah. Ni wewe. Daima imekuwa wewe."

Hapo ndipo nilipofahamu kuwa mapenzi haya yalikuwa mtego mtamu na mzito. Tulikuwa tukiingia kwenye moto ambao ungechoma urafiki wa miaka mingi, lakini moyo wangu ulikataa kurudi nyuma.`
      },
      {
        chapterNumber: 3,
        title: 'Sura ya 3: Uamuzi wa Usiku wa Manane',
        isFreePreview: false,
        content: `Usiku huo chumbani kwangu, simu yangu iliwaka mfululizo. Ilikuwa meseji ya Brenda kwanza: 'Sarah, leo Derrick amenipigia simu akaniambia kuna jambo anataka kuniambia kesho asubuhi. Nahisi anataka kuniomba tuwe wapenzi! Nimefurahi sana mpenzi wangu!'

Moyo wangu ulichomwa na sindano ya moto. Nilijikunja kitandani, nikaangalia dari ya chumba. Dakika kumi baadaye, simu ya Derrick ikaingia.

"Sarah, nimeongea na Brenda. Kesho nitamweleza ukweli wote bila kuficha. Siwezi kuishi maisha ya uongo."

"Hapana Derrick! Subiri kwanza!" nililia kwenye simu. "Kama ukifanya hivyo ataumia sana!"

"Sarah, bora aumie leo kwa ukweli, kuliko aumie kesho akitukuta tukibusiana nyuma ya maktaba. Nakuja sasa hivi chini ya bweni lako. Lazima nikuone."

Je, Sarah atakubali kushuka na kumpokea Derrick usiku huo, au ataokoa urafiki wake na Brenda? Jibu lililofuata lilibadilisha maisha yao wote watatu milele...`
      }
    ]
  },
  {
    id: 'nilimuamini-kuliko-kila-mtu',
    title: '💔 NILIMUAMINI KULIKO KILA MTU',
    teaser: 'Alisema atanipenda milele. Nilimwamini. Lakini usiku mmoja niligundua ujumbe ambao ulibadilisha kila kitu nilichokuwa nimeamini kuhusu mapenzi yetu.',
    category: 'heartbreak',
    readingTime: '15 min',
    likes: 2410,
    views: 19800,
    coverImage: LOVE_IMAGES.beachTwilight,
    author: 'Dada Marry',
    isPremium: true,
    priceTsh: 300,
    buttonLabel: '💔 SOMA STORY',
    isTrending: true,
    featuredOrder: 2,
    tags: ['Usaliti', 'Uaminifu', 'Maumivu', 'Machozi'],
    createdAt: '2026-03-10',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sura ya 1: Ahadi Chini ya Mbalamwezi',
        isFreePreview: true,
        chapterImage: LOVE_IMAGES.beachTwilight,
        previewSnippet: 'Miaka minne ya uhusiano wetu ilionekana kama hadithi ya peponi...',
        content: `Tulikaa ufukweni mwa bahari ya Coco Beach, upepo mwanana ukipeperusha nywele zangu. Kelvin alikuwa ameweka mkono wake juu ya bega langu, akiniangalia kama vile hakuna kitu kingine chenye thamani duniani zaidi yangu.

"Amina," alisema, sauti yake ikiwa na utulivu ulionifanya niamini kila tamko lililotoka kinywani mwake. "Hata dunia yote ikinigeuka, wewe ndiye nyota yangu. Nimepanga kila kitu, mwakani tunafunga pingu za maisha."

Nilijisikia mwanamke aliyebarikiwa zaidi. Nilimpa kila kitu: upendo wangu, akiba zangu nilizomsaidia kuanzisha duka lake la vifaa vya kielektroniki Kariakoo, na hata siri zangu zote za utotoni.

Hakuna siku niliyowahi kushika simu yake kwa nia ya kumchunguza. Kwangu mimi, uaminifu ulikuwa msingi mkuu. Lakini usiku wa Ijumaa moja, kila kitu kiliporomoka kama ghorofa lililojengwa juu ya mchanga.`
      },
      {
        chapterNumber: 2,
        title: 'Sura ya 2: Meseji Iliyobomoa Ulimwengu Wangu',
        isFreePreview: false,
        content: `Kelvin alikuwa bafuni akioga huku akiimba kwa furaha. Simu yake iliyokuwa juu ya meza ya kitanda iliwaka na kutoa mtetemo mkali. Nilipoangalia, jina lililoandikwa lilikuwa 'Mhandisi John'.

Lakini chini ya jina hilo, maneno ya ujumbe yalionekana wazi kwenye screen:
'Mpenzi asante kwa usiku wa jana Regency Hotel. Usisahau kumpa huyo msichana wako sababu ya uongo ili wikendi hii tusafiri wote Zanzibar kama ulivyoahidi. Nakupenda sana mume wangu mtarajiwa.'

Dunia yangu ilizunguka. Mapigo ya moyo wangu yalisimama kwa sekunde tano. Nilihisi hewa ikipungua kwenye chumba kile. 

Kelvin alitoka bafuni akiwa amefunga taulo jeupe, maji yakidondoka kifuani mwake. Alinitazama, kisha akatazama simu niliyokuwa nimeshika mkononi mwangu. Rangi ya uso wake ilibadilika mara moja kutoka ya uchangamfu hadi ya woga mkuu.`
      },
      {
        chapterNumber: 3,
        title: 'Sura ya 3: Mwisho wa Safari na Kuanza Upya',
        isFreePreview: false,
        content: `"Amina... si kama unavyofikiria, naomba unielewe..." Kelvin alijitahidi kuongea lakini maneno yalikwama kooni.

Sikulia. Sikupiga kelele. Machozi yaliganda kwa sababu maumivu yalikuwa mazito kuliko sauti yoyote ile. Nilimweka simu yake taratibu juu ya meza, nikavua pete ndogo ya fedha aliyonivalisha siku ya kumbukumbu yetu ya miaka mitatu, nikaiweka kando ya simu.

"Huna haja ya kueleza chochote Kelvin. Asante kwa kunifundisha kwamba si kila mtu anayekutabasamu anastahili moyo wako."

Nilifungua mlango, nikatoka nje usiku ule wa giza. Mvua ilianza kunyesha, ikiosha maumivu yangu, lakini moyoni nilijua: jeraha hili litachukua miaka kupona, lakini sitawahi tena kumruhusu mtu anifanye mjinga kwa kisingizio cha mapenzi.`
      }
    ]
  },
  {
    id: 'yule-kijana-wa-stendi',
    title: '🌹 YULE KIJANA WA STENDI',
    teaser: 'Kila asubuhi alikuwa akisimama pale pale, akiniangalia kwa tabasamu ambalo nilianza kulisubiri bila kujua. Siku nilipoamua kumsalimia, maisha yangu yakaanza kubadilika...',
    category: 'romantic-drama',
    readingTime: '10 min',
    likes: 1950,
    views: 16300,
    coverImage: LOVE_IMAGES.rainyEmbrace,
    author: 'Dada Marry',
    isPremium: true,
    priceTsh: 300,
    buttonLabel: '🌹 ENDELEA',
    isTrending: false,
    featuredOrder: 3,
    tags: ['Kukutana kwa Bahati', 'Tabasamu', 'Moyo Safi', 'Mapenzi ya Kweli'],
    createdAt: '2026-03-08',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sura ya 1: Asubuhi za Kituo cha Mabasi',
        isFreePreview: true,
        chapterImage: LOVE_IMAGES.rainyEmbrace,
        previewSnippet: 'Kila siku saa moja kamili asubuhi, stendi ya basi ilikuwa kituo changu cha maumivu na msongamano...',
        content: `Kituo cha basi cha Mwenge kilikuwa kero kubwa kila asubuhi. Jasho, makelele ya makondakta, na harufu ya moshi wa magari. Lakini katikati ya fujo zote hizo, kulikuwa na kitu kimoja kilichonifanya nifurahie kuamka kila asubuhi.

Alikuwa mvulana mrefu, mweusi mwenye meno meupe kama theluji, aliyevalia shati jeupe lililonyooshwa vyema. Kila siku alikuwa akisimama nguzo namba tatu akisubiri gari la Posta.

Kila mara macho yetu yalipokutana, alikuwa akinitabasamu kisha akiinama kidogo kwa heshima. Nilijikuta nikianza kuchagua nguo nzuri kila siku kwa ajili yake, hata bila kujua jina lake!

Siku ya Jumatano moja, nikiwa nimeshikilia mkoba wangu, mvua kubwa ilianza kunyesha ghafla. Watu walianza kukimbia ovyo kutafuta makazi. Katika hekaheka zile, visigino vya viatu vyangu viliteleza, nikakaribia kuanguka kwenye tope!

Ghafla, mikono miwili yenye nguvu ilinizunguka kiunoni, ikanivuta kifuani mwake kwa usalama kamili.`
      },
      {
        chapterNumber: 2,
        title: 'Sura ya 2: Chini ya Mwavuli Mweusi',
        isFreePreview: false,
        content: `Nilipoinua macho yangu, nilikutana na macho yake yenye joto. Alikuwa yeye! Yule kijana wa stendi.

"Uko salama?" aliniuliza huku akifungua mwavuli mweusi mkubwa aliokuwa nao mkononi, akanikinga dhidi ya matone mazito ya mvua.

"Niko... niko salama, asante sana," nilijibu huku moyo wangu ukidunda kwa sauti kubwa kiasi kwamba niliogopa angesikia.

"Naitwa Baraka," alisema kwa tabasamu lake lile lililoniroga kwa miezi mitatu. "Na nimekuwa nikitaka kukufahamu tangu mwezi wa kwanza, lakini nilikuwa nikihofia usije ukaniona kama wahuni wengine wa mtaani."

Tulitembea pamoja chini ya mwavuli ule kuelekea mgahawa mdogo wa kahawa. Hapo ndipo nilipogundua kwamba Baraka hakuwa tu mtanashati, bali alikuwa msomi wa usanifu majengo, mwenye ndoto kubwa na heshima ya kipekee kwa wanawake.`
      },
      {
        chapterNumber: 3,
        title: 'Sura ya 3: Siri Yake Aliyoficha',
        isFreePreview: false,
        content: `Miezi miwili ya penzi letu jipya ilikuwa kama ndoto ya malaika. Lakini siku moja, wakati nikiwa ofisini kwake kumshangaza na chakula cha mchana, nilikuta picha mezani kwake.

Ilikuwa picha yake akiwa na mwanamke mwingine, na mtoto mdogo wa kike mwenye tabasamu lile lile la Baraka.

Mguu wangu ulishindwa kusonga mbele. Je, Baraka alikuwa na familia tayari? Kwanini hakuniambia tangu siku ya kwanza chini ya ule mwavuli?`
      }
    ]
  },
  {
    id: 'tulianza-kwa-chuki',
    title: '💞 TULIANZA KWA CHUKI',
    teaser: 'Tulikuwa hatuwezi kukaa dakika tano bila kugombana. Lakini kadiri siku zilivyopita, nilianza kugundua kwamba nyuma ya chuki ile kulikuwa na hisia ambazo hakuna mmoja wetu alitaka kukubali.',
    category: 'relationship-stories',
    readingTime: '14 min',
    likes: 2180,
    views: 18120,
    coverImage: LOVE_IMAGES.officeEnemies,
    author: 'Dada Marry',
    isPremium: true,
    priceTsh: 300,
    buttonLabel: '💕 SOMA STORY',
    isTrending: true,
    featuredOrder: 4,
    tags: ['Enemies to Lovers', 'Ofisini', 'Misuguano', 'Hisia Kali'],
    createdAt: '2026-03-05',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sura ya 1: Vita ya Kiti cha Uongozi',
        isFreePreview: true,
        chapterImage: LOVE_IMAGES.officeEnemies,
        previewSnippet: 'Siku ya kwanza nilipokutana na Brian kwenye chumba cha mahojiano, nilijua tu kuwa huyu mtu atakuwa sumu kwangu...',
        content: `Brian alikuwa mtu mwenye majivuno, mwenye kujiamini kupita kiasi na asiyekubali kushindwa hata kwa nukta moja. Wakati wote wawili tulipopandishwa cheo kuwa wakuu wa vitengo viwili vinavyoshindana katika kampuni moja ya masoko, maisha yakawa uwanja wa vita.

"Doreen, mawazo yako ya kampeni ya mwaka huu yamepitwa na wakati kama simu za mikononi za miaka ya tisini," aliniambia mbele ya bodi nzima ya wakurugenzi.

Nilimtazama kwa jicho la dharau. "Brian, labda unatumia nguvu nyingi kukosoa wenzako kwa sababu ubongo wako hauwezi kutoa wazo jipya hata ukikamuliwa!"

Wakurugenzi walicheka, lakini mimi na Brian tulibaki tukitazamana kwa macho ya radi. Tulichukiana. Au angalau, hivyo ndivyo tulivyojiaminisha sisi wenyewe.`
      },
      {
        chapterNumber: 2,
        title: 'Sura ya 2: Kufungiwa Ndani ya Lifti Usiku wa Manane',
        isFreePreview: false,
        chapterImage: LOVE_IMAGES.heroCouple,
        content: `Ilikuwa Ijumaa saa nne usiku. Wafanyakazi wote walikuwa wameondoka, ofisi ikiwa tupu kabisa. Nilitoka ofisini nikiwa nimechoka, nikabonyeza kitufe cha lifti ya ghorofa ya kumi na mbili.

Mlango ulifunguka, na ndani alikuwa Brian akiwa ameshikilia koti lake begani.

Nilivuta pumzi, nikaingia bila kusema neno. Tulipofika ghorofa ya sita, taa zote zilipotea ghafla. Lifti ilitoa mshindo mkali kisha ikasimama ghafla katikati ya sakafu!

Giza nene lilitanda. Mimi nina tatizo kubwa la kuogopa giza na nafasi zilizobana (claustrophobia). Pumzi zilianza kunikata, nikajikuta nikiketi chini kwenye sakafu ya chuma, mwili wangu wote ukitetemeka kwa hofu kuu.

Hapo ndipo Brian alipobadilika. Yule mtu mjeuri na mkali alitoweka kwa sekunde moja. Aliketi kando yangu gizani, akavua sweta lake laini akanifunika, kisha akanikumbatia kwa upole sana.

"Tuliza pumzi Doreen. Uko salama. Nipo hapa, sitakuacha hata sekunde moja," alisema kwa sauti laini sana ambayo sikuwahi kuisikia maishani mwangu.`
      },
      {
        chapterNumber: 3,
        title: 'Sura ya 3: Busu Gizani',
        isFreePreview: false,
        content: `Kwa masaa matatu tuliyokaa ndani ya lifti ile, tuliongea kuhusu mambo ambayo hatukuwahi kumwambia mtu yeyote. Brian aliniambia kuhusu baba yake aliyewatelekeza akiwa mdogo, na jinsi alivyolazimika kuwa mkali ili asionekane mnyonge.

Mimi nilimwambia kuhusu mapenzi yangu ya kwanza yaliyonivunja moyo na kunifanya nifunge milango yote ya mapenzi.

Kila neno lilipunguza ukuta mkubwa uliokuwa kati yetu. Na kabla taa hazijarudi, Brian aliinua kidevu changu, na midomo yetu ikakutana kwa busu zito, lenye kiu ya muda mrefu ambayo hakuna aliyetaka kuikiri mchana.`
      }
    ]
  },
  {
    id: 'ujumbe-uliokuja-usiku-wa-harusi',
    title: '💎 UJUMBE ULIOKUJA USIKU WA HARUSI',
    teaser: 'Siku ya harusi yangu ilikuwa imefika. Kila kitu kilikuwa tayari. Lakini dakika chache kabla sijaingia kanisani, simu yangu ilipokea ujumbe mmoja tu: ‘Kama bado unanipenda, usifunge ndoa leo.’',
    category: 'marriage-stories',
    readingTime: '18 min',
    likes: 3890,
    views: 31200,
    coverImage: LOVE_IMAGES.weddingBride,
    author: 'Dada Marry',
    isPremium: true,
    priceTsh: 300,
    buttonLabel: '🔥 JUA KILICHOTOKEA',
    isTrending: true,
    featuredOrder: 5,
    tags: ['Harusi', 'Mtego', 'Siri ya Ndoa', 'Twist Kubwa'],
    createdAt: '2026-03-01',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sura ya 1: Gauni Jeupe na Moyo Mzito',
        isFreePreview: true,
        chapterImage: LOVE_IMAGES.weddingBride,
        previewSnippet: 'Kioo kilionyesha bibi harusi mzuri zaidi aliyewahi kuonekana, lakini ndani ya kifua changu kulikuwa na vita...',
        content: `Kila kitu kilikuwa kimekamilika. Gauni langu jeupe lililopambwa kwa mawe ya vito vidogo vya kung'aa lilishonwa Uturuki kwa gharama ya mamilioni. Nje ya ukumbi wa kanisa la Mtakatifu Peter, misururu ya magari ya kifahari ya Range Rover na Mercedes Benz ilikuwa ikisubiri.

Bwana harusi wangu, Richard, alikuwa mbunge mchanga, mwenye heshima, mali na umaarufu mkubwa nchini. Kila mtu aliniambia mimi ni mwanamke mwenye bahati kubwa duniani.

Lakini Richard hakuwa mtu niliyemchagua kwa mapenzi ya moyo. Alikuwa chaguo la wazazi wangu baada ya familia yetu kupitia changamoto kubwa za kiuchumi miaka miwili iliyopita.

Mtu pekee niliyewahi kumpenda kwa dhati alikuwa Noel—mwalimu wa sekondari mwenye moyo wa dhahabu, ambaye wazazi wangu walimfukuza wakisema hawezi kunihudumia.

Dakika tano kabla ya mlango wa kanisa kufunguliwa na wimbo wa 'Here Comes the Bride' kuanza kupigwa, simu yangu ndogo ya siri iliyokuwa kwenye mkoba wa mpambe wangu iliwaka.

Nilifungua ujumbe. Ilikuwa namba nisiyoifahamu, lakini maneno yalinifanya nizimie nusu:
'Kama bado unanipenda, usifunge ndoa leo. Nipo nje ya lango la nyuma nikiwa na tiketi mbili za ndege kuelekea Cape Town. Nitakusubiri hadi saa saba mchana. - Noel wako'`
      },
      {
        chapterNumber: 2,
        title: 'Sura ya 2: Sekunde 60 za Kuamua Hatima',
        isFreePreview: false,
        content: `Miguu yangu ilikosa nguvu. Mpambe wangu Nancy alinitazama kwa mshtuko. "Neema! Una nini? Rangi ya uso wako imepotea! Richard yuko mbele ya madhabahu anakusubiri!"

Nilimtazama Nancy, nikamtazama baba yangu aliyekuwa akitabasamu kwa fahari akijiandaa kunishika mkono ili anikabidhi kwa Richard.

Kama ningeendelea na ndoa ile, ningepata maisha ya utajiri, majumba ya kifahari Masaki, na heshima katika jamii. Lakini ningekuwa na moyo uliokufa maisha yangu yote.

Kama ningetoroka na Noel, ningevunja heshima ya wazazi wangu, ningeanzisha kashfa kubwa kwenye magazeti ya udaku nchi nzima, lakini ningekuwa na mwanaume anayejua hata sauti ya kilio changu bila mimi kuongea.

Wimbo wa kanisani ulianza: 'Tarara-rara... tarara-rara...' Milango mikubwa ya mbao ikaanza kufunguliwa taratibu.`
      },
      {
        chapterNumber: 3,
        title: 'Sura ya 3: Mbio za Bibi Harusi',
        isFreePreview: false,
        content: `Nilifanya kile ambacho hakuna mtu aliyewahi kukitarajia.

Nilivua viatu vyangu vya visigino virefu, nikakusanya pande zote mbili za gauni langu jeupe mikononi, kisha nikageuka mbio kuelekea mlango wa dharura wa nyuma!

"Neema! Neema rudi!" sauti ya baba yangu ilipiga kelele kwa mshangao na hasira. Watu wote kanisani walisimama. Richard aligeuka madhabahuni kwa bumbuazi.

Lakini mimi sikugeuka nyuma. Nilikimbia kama upepo huku machozi ya uhuru yakitiririka mashavuni mwangu. Nilipotoka lango la nyuma, niliona gari dogo jeusi likiwa limewaka taa. Noel alikuwa amesimama kando ya mlango, akinitazama kwa tabasamu na machozi ya furaha.

Nilijitupa mikononi mwake. Tulikimbia kuelekea kwenye uhai wa kweli, kwa sababu mapenzi ya dhati hayawezi kununuliwa kwa fedha wala gauni la kifalme.`
      }
    ]
  },
  {
    id: 'penzi-la-usiku-wa-mvua',
    title: '🔥 PENZI LA USIKU WA MVUA',
    teaser: 'Tulikwama katika kibanda kimoja cha kahawa mlimani Lushoto wakati radi zikipasuka angani. Tulichokizungumza usiku ule kilifuta mipaka yote tuliyojiwekea kwa miaka mitano...',
    category: 'forbidden-love',
    readingTime: '13 min',
    likes: 1670,
    views: 12900,
    coverImage: LOVE_IMAGES.rainyEmbrace,
    author: 'Dada Marry',
    isPremium: true,
    priceTsh: 300,
    buttonLabel: '🔥 SOMA SASA',
    isTrending: true,
    tags: ['Mapenzi ya Siri', 'Mvua na Radi', 'Lushoto', 'Hisia Nzito'],
    createdAt: '2026-03-02',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sura ya 1: Baridi ya Lushoto',
        isFreePreview: true,
        chapterImage: LOVE_IMAGES.rainyEmbrace,
        previewSnippet: 'Mvua ya milimani haina mzaha...',
        content: `Mvua ya Lushoto ilikuwa na tabia ya kufunga njia zote. Mimi na Tariq tulikuwa tumerudi kutoka kwenye utafiti wa mimea ya dawa milimani. Tulipoingia kwenye kibanda kile cha zamani cha mbao, tulikuwa tumelowa chepechepe hadi kwenye mifupa.

Tuliketi mbele ya jiko dogo la moto wa kuni. Tariq alitazama midomo yangu iliyokuwa ikitetemeka kwa baridi, akavua shati lake zito akanifunga nalo.

"Unajua kwanini nilikubali safari hii pamoja na wewe, Leyla?" aliniuliza kwa sauti ya chini sana huku cheche za moto zikiruka.

Nilimtazama kwa wasiwasi. "Kwa sababu ya utafiti wa chuo?"

"Hapana," alisema, akisogeza mkono wake na kugusa shavu langu la baridi. "Kwa sababu nilijua hii ndiyo nafasi yangu ya mwisho kuwa peke yangu na wewe kabla hujaolewa na kaka yangu mkubwa mwezi ujao."`
      },
      {
        chapterNumber: 2,
        title: 'Sura ya 2: Siri ya Familia',
        isFreePreview: false,
        content: `Moyo wangu uliruka. Maneno ya Tariq yaligusa siri ambayo nilijitahidi kuizika ndani ya moyo wangu kwa miaka miwili. Ndoa yangu na kaka yake, Rashid, ilikuwa ya mikataba ya biashara na mali za ukoo. Rashid hakujali hata rangi ya nguo zangu, lakini Tariq alijua kila wimbo ninaoupenda na kila hofu niliyonayo maishani.

"Tariq... unajua vizuri kuwa hili haliwezi kutokea," nilinong'ona huku nikishindwa kuondoa mkono wake shavuni mwangu.

"Basi kwanini moyo wako unapiga kwa nguvu hivi, Leyla?"`
      }
    ]
  },
  {
    id: 'machozi-ya-dada-mwenye-ndoa-ya-kitajiri',
    title: '😭 MACHOZI YA DADA MWENYE NDOA YA KITAJIRI',
    teaser: 'Watu walimwona akiendesha gari la kifahari na kuishi kwenye jumba la kifahari Oysterbay, lakini kila usiku alipofika chumbani kwake, milango ilipofungwa, hadithi ilikuwa ya machozi...',
    category: 'emotional-stories',
    readingTime: '16 min',
    likes: 3120,
    views: 24500,
    coverImage: LOVE_IMAGES.luxuryDrama,
    author: 'Dada Marry',
    isPremium: true,
    priceTsh: 300,
    buttonLabel: '😭 SOMA SIMULIZI',
    isTrending: false,
    tags: ['Ndoa ya Kitajiri', 'Machozi ya Siri', 'Ujasiri wa Mwanamke'],
    createdAt: '2026-02-28',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sura ya 1: Gereza la Dhahabu',
        isFreePreview: true,
        chapterImage: LOVE_IMAGES.luxuryDrama,
        previewSnippet: 'Watu wengi huamini pesa huleta furaha...',
        content: `Kila mtu kwenye Instagram aliniita 'Queen Zawadi'. Picha zangu za Dubai, mikoba ya Chanel na magari ya kifahari ziliwavutia maelfu ya wasichana waliotamani maisha yangu.

Lakini ukweli ulikuwa mzito: Mume wangu Collins aliniona kama pambo tu la nyumba yake, si binadamu mwenye hisia. Hakuwa akinipiga kwa ngumi, bali kwa maneno makali ya kumshusha hadhi mwanamke, na kumfungia asionane hata na mama yake mzazi bila ruhusa maalum.

Siku Collins aliponiletea kandarasi ya kunitaka nisizae ili nisiharibu muonekano wangu wa jamii, hapo ndipo nilipojua kuwa nilikuwa nimeuza roho yangu kwa shetani wa utajiri.`
      },
      {
        chapterNumber: 2,
        title: 'Sura ya 2: Nuru Ndani ya Giza',
        isFreePreview: false,
        content: `Uamuzi wangu wa kuondoka haukuwa mwepesi. Niliacha funguo za gari na kadi zote za benki juu ya meza ya kioo. Nilichukua tu begi dogo lenye nguo zangu tatu za kawaida na cheti changu cha ualimu nilichokisusa kwa miaka saba.

Nilipotoka nje ya lango lile lenye walinzi wanne, nilihisi hewa safi ya uhuru kwa mara ya kwanza baada ya miaka mingi. Hapo ndipo safari yangu ya kutafuta upendo wa kweli na heshima ilipoanza rasmi.`
      }
    ]
  }
];

export const INITIAL_COMMENTS = [
  {
    id: 'c1',
    storyId: 'mapenzi-ya-siri-darasa-la-mwisho',
    userName: 'Rehema Juma',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    text: 'Jamani Dada Marry umeniacha hoi na hii story! Yaani nahisi kama nilikuwepo darasani pale pale na Derrick na Sarah. Siwezi kusubiri chapter inayofuata ❤️🔥',
    date: 'Dakika 20 zilizopita',
    likes: 42,
    isLikedByUser: true
  },
  {
    id: 'c2',
    storyId: 'mapenzi-ya-siri-darasa-la-mwisho',
    userName: 'Kelvin Mwamba',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    text: 'Derrick alifanya uamuzi sahihi sana. Bora ukweli mchungu kuliko uongo unaozaa majanga baadaye. Story tamu sana Dada Marry!',
    date: 'Saa 2 zilizopita',
    likes: 19,
    isLikedByUser: false
  },
  {
    id: 'c3',
    storyId: 'ujumbe-uliokuja-usiku-wa-harusi',
    userName: 'Fatma Said',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    text: 'Hii twist ya bibi harusi kukimbia na gauni ilinishtua sanaaa! Hakika pesa si kila kitu maishani. Hongera Dada Marry kwa kipaji hiki 😍',
    date: 'Jana',
    likes: 67,
    isLikedByUser: false
  },
  {
    id: 'c4',
    storyId: 'nilimuamini-kuliko-kila-mtu',
    userName: 'Grace Mlay',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
    text: 'Moyo umeniuma sana kusoma jinsi Kelvin alivyomfanyia Amina baada ya miaka yote ile ya mapenzi ya dhati 😭💔',
    date: 'Masaa 5 yaliyopita',
    likes: 29,
    isLikedByUser: false
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: 'n1',
    title: '🔥 Story mpya imeingia!',
    message: 'Hadithi ya "MAPENZI YA SIRI YA DARASA LA MWISHO" imeachiwa rasmi. Soma usikose!',
    date: 'Masaa 2 yaliyopita',
    read: false,
    type: 'new_story' as const,
    storyId: 'mapenzi-ya-siri-darasa-la-mwisho'
  },
  {
    id: 'n2',
    title: '💕 Dada Marry ameachia chapter mpya!',
    message: 'Sura ya 3 ya "UJUMBE ULIOKUJA USIKU WA HARUSI" iko hewani. Jua hatima ya bibi harusi!',
    date: 'Jana',
    read: false,
    type: 'new_chapter' as const,
    storyId: 'ujumbe-uliokuja-usiku-wa-harusi'
  },
  {
    id: 'n3',
    title: '✨ Story uliyokuwa unasoma imeongezewa chapter mpya',
    message: 'Endelea kusoma na kugundua siri nzito zaidi ya mahaba.',
    date: 'Siku 2 zilizopita',
    read: true,
    type: 'announcement' as const
  }
];

export const INITIAL_PAYMENTS = [
  {
    id: 'pay-101',
    storyId: 'mapenzi-ya-siri-darasa-la-mwisho',
    storyTitle: '❤️ MAPENZI YA SIRI YA DARASA LA MWISHO',
    amountTsh: 300,
    phoneNumber: '0754890123',
    senderName: 'Joyce Emmanuel',
    transactionCode: '9QA7834211',
    network: 'M-Pesa',
    status: 'approved' as const,
    createdAt: '2026-03-17 11:20',
    verifiedAt: '2026-03-17 11:25'
  },
  {
    id: 'pay-102',
    storyId: 'ujumbe-uliokuja-usiku-wa-harusi',
    storyTitle: '💎 UJUMBE ULIOKUJA USIKU WA HARUSI',
    amountTsh: 300,
    phoneNumber: '0714902345',
    senderName: 'Amani Bakari',
    transactionCode: '7GB4928100',
    network: 'Tigo Pesa',
    status: 'pending' as const,
    createdAt: '2026-03-17 14:35'
  }
];
