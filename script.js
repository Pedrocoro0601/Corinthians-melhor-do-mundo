
gsap.registerPlugin(TextPlugin);

// LISTA COMPLETA DE 500 IDIOMAS COM PAÍSES
const translations = [
    { id: 1, lang: "Mandarim (Chinês)", text: "加油，科林蒂安！", detail: "Jiāyóu, Kēlīndì'ān!", country: "China" },
    { id: 2, lang: "Espanhol", text: "¡Vamos Corinthians!", detail: "Vámos Coríntians", country: "Espanha" },
    { id: 3, lang: "Inglês", text: "Go Corinthians!", detail: "Gô Coríntians", country: "Estados Unidos" },
    { id: 4, lang: "Hindi", text: "आगे बढ़ो, कोरिनथियंस!", detail: "Aage baṛho, Korinthiyans!", country: "Índia" },
    { id: 5, lang: "Bengali", text: "চলো করিন্থিয়ান্স!", detail: "Chalo Korinthians!", country: "Bangladesh" },
    { id: 6, lang: "Português", text: "VAI CORINTHIANS!", detail: "(O original)", country: "Brasil" },
    { id: 7, lang: "Russo", text: "Давай, Коринтианс!", detail: "Davay, Korintians!", country: "Rússia" },
    { id: 8, lang: "Japonês", text: "行け、コリンチャンス！", detail: "Ike, Korinchansu!", country: "Japão" },
    { id: 9, lang: "Punjabi Ocidental", text: "ਚਲੋ ਕੋਰੀਨਥੀਅਨਜ਼!", detail: "Chalo Korinthians!", country: "Paquistão" },
    { id: 10, lang: "Marata", text: "जय कोरिनथियंस!", detail: "Jay Korinthians!", country: "Índia" },
    { id: 11, lang: "Telugo", text: "కరవము, కొరింథియన్స్!", detail: "Karamu, Kōrinthiyans!", country: "Índia" },
    { id: 12, lang: "Wu (Chinês)", text: "加油，科林斯！", detail: "Jiāyóu, Kēlīnsī!", country: "China" },
    { id: 13, lang: "Turco", text: "Haydi Corinthians!", detail: "Ráidi Coríntians", country: "Turquia" },
    { id: 14, lang: "Coreano", text: "코린치안스 화이팅!", detail: "Korinchianseu Hwaiting!", country: "Coreia do Sul" },
    { id: 15, lang: "Francês", text: "Allez Corinthians !", detail: "Alê Coríntians", country: "França" },
    { id: 16, lang: "Alemão", text: "Auf geht's Corinthians!", detail: "Áuf guêt's Coríntians", country: "Alemanha" },
    { id: 17, lang: "Vietnamita", text: "Tiến lên Corinthians!", detail: "Tiên lên Coríntians", country: "Vietnã" },
    { id: 18, lang: "Tâmil", text: "கோரிந்தியன்ஸுக்குச் செல்!", detail: "Kōrintiyansukku ccel!", country: "Índia" },
    { id: 19, lang: "Yue (Cantonês)", text: "加油，科林斯！", detail: "Ga yau, Fōlàm-sī!", country: "China" },
    { id: 20, lang: "Urdu", text: "چلو کورنتھینز!", detail: "Chalo Korinthians!", country: "Paquistão" },
    { id: 21, lang: "Javanês", text: "Ayo Corinthians!", detail: "Áio Coríntians", country: "Indonésia" },
    { id: 22, lang: "Italiano", text: "Forza Corinthians!", detail: "Fôrza Coríntians", country: "Itália" },
    { id: 23, lang: "Egípcio Coloquial (Árabe)", text: "يلا يا كورينثيانز!", detail: "Yalla ya Kūrīnthyāns!", country: "Egito" },
    { id: 24, lang: "Persa Iraniano", text: "به پیش کورینتیانس!", detail: "Be pish Korintiyāns!", country: "Irã" },
    { id: 25, lang: "Guzerate", text: "ચાલો કોરીન્થિયન્સ!", detail: "Chālo Korinthians!", country: "Índia" },
    { id: 26, lang: "Bhojpuri", text: "आगे बढ़ कोरिनथियंस!", detail: "Aage baṛho Korinthians!", country: "Índia" },
    { id: 27, lang: "Haúça", text: "Gaba Corinthians!", detail: "Gaba Coríntians", country: "Nigéria" },
    { id: 28, lang: "Canarim", text: "ಮುಂದೆ ಹೋಗು ಕೋರಿಂಥಿಯನ್ಸ್!", detail: "Munde hōgu Kōrinthiyans!", country: "Índia" },
    { id: 29, lang: "Birmanês", text: "ရှေ့ဆက် ကိုရင့်သီယန်း!", detail: "Shehhsat Korinthis!", country: "Mianmar" },
    { id: 30, lang: "Malaiala", text: "മുമ്പോട്ട് കോരിന്തിയാൻസ്!", detail: "Mumpōṭṭ kōrintiyāns!", country: "Índia" },
    { id: 31, lang: "Oriá", text: "ଚାଲ କୋରିନ୍ଥିଆନ୍ସ!", detail: "Chāla kōrinthi'āns!", country: "Índia" },
    { id: 32, lang: "Sundanês", text: "Hayu Corinthians!", detail: "Ráiu Coríntians", country: "Indonésia" },
    { id: 33, lang: "Tailandês", text: "ไป คอรินเทียนส์!", detail: "Pai Khōrinthīyns!", country: "Tailândia" },
    { id: 34, lang: "Polonês", text: "Naprzód Corinthians!", detail: "Nápshud Coríntians", country: "Polônia" },
    { id: 35, lang: "Iorubá", text: "Jáde Corinthians!", detail: "Jáde Coríntians", country: "Nigéria" },
    { id: 36, lang: "Hakka (Chinês)", text: "加油，哥林多人!", detail: "Ga yû, Kôlîndwui!", country: "China" },
    { id: 37, lang: "Tagalo (Filipino)", text: "Sige, Corinthians!", detail: "Sigue Coríntians", country: "Filipinas" },
    { id: 38, lang: "Ucraniano", text: "Вперед, Корінтіанс!", detail: "Vpered, Korintians!", country: "Ucrânia" },
    { id: 39, lang: "Sindhi", text: "چئو ڪورينٿينز!", detail: "Chā’ō Kōrīnthīnz!", country: "Paquistão" },
    { id: 40, lang: "Cebuano", text: "Sige na, Corinthians!", detail: "Sigue na Coríntians", country: "Filipinas" },
    { id: 41, lang: "Fula (Fulfulde)", text: "Yeeso Corinthians!", detail: "Yêssô Coríntians", country: "Nigéria" },
    { id: 42, lang: "Romeno", text: "Hai, Corinthians!", detail: "Rái Coríntians", country: "Romênia" },
    { id: 43, lang: "Ibo", text: "Gaa Corinthians!", detail: "Gáa Coríntians", country: "Nigéria" },
    { id: 44, lang: "Malaio", text: "Ayuh Corinthians!", detail: "Áio Coríntians", country: "Malásia" },
    { id: 45, lang: "Usbeque", text: "Oldinga Corinthians!", detail: "Oldinga Coríntians", country: "Uzbequistão" },
    { id: 46, lang: "Amárico", text: "ወደፊት ኮሪንቲያንስ!", detail: "Wede fit Korīntiyānis!", country: "Etiópia" },
    { id: 47, lang: "Holandês", text: "Hup Corinthians!", detail: "Hup Coríntians", country: "Holanda" },
    { id: 48, lang: "Nepali", text: "अगाडि बढ कोरिन्थियन्स!", detail: "Agāḍi baṛha Korinthiyans!", country: "Nepal" },
    { id: 49, lang: "Pastó", text: "پښو کورنتینز!", detail: "Pshoo Korintinz!", country: "Afeganistão" },
    { id: 50, lang: "Curdo", text: "Herê Corinthians!", detail: "Herê Coríntians", country: "Turquia" },
    { id: 51, lang: "Azeri", text: "İrəli Corinthians!", detail: "Iræli Coríntians", country: "Azerbaijão" },
    { id: 52, lang: "Saraiki", text: "چلو کورتینز!", detail: "Chalo Korīntīnz!", country: "Paquistão" },
    { id: 53, lang: "Oromo", text: "Imalli Corinthians!", detail: "Imali Coríntians", country: "Etiópia" },
    { id: 54, lang: "Maithili", text: "आगाँ बढ़ू कोरिनथियंस!", detail: "Āgām baṛhū Korinthiyans!", country: "Índia" },
    { id: 55, lang: "Gan (Chinês)", text: "加油，科林斯!", detail: "Jiāyóu, Kēlīnsī!", country: "China" },
    { id: 56, lang: "Crioulo Haitiano", text: "Ale Corinthians!", detail: "Alê Coríntians", country: "Haiti" },
    { id: 57, lang: "Servo-Croata", text: "Napred Korintijans!", detail: "Nápred Coríntians", country: "Sérvia" },
    { id: 58, lang: "Madurês", text: "Ayo Corinthians!", detail: "Áio Coríntians", country: "Indonésia" },
    { id: 59, lang: "Cingalês", text: "ඉදිරියට කොරින්තියන්ස්!", detail: "Idiriyaṭa Korintiyans!", country: "Sri Lanka" },
    { id: 60, lang: "Cazaque", text: "Алға Corinthians!", detail: "Alğa Korïntians!", country: "Cazaquistão" },
    { id: 61, lang: "Min Nan (Chinês)", text: "哥林斯加油!", detail: "Kō-lîm-su ka-iû!", country: "China" },
    { id: 62, lang: "Min Bei (Chinês)", text: "加油，科林斯!", detail: "Jiāyóu, Kēlīnsī!", country: "China" },
    { id: 63, lang: "Zhuang", text: "Vah gyaeujg Corindiens!", detail: "Vah guêiuch Coríndiens", country: "China" },
    { id: 64, lang: "Khmer", text: "តោះ កូរិនថៀនស៍!", detail: "Táh Kōrinthiəns!", country: "Camboja" },
    { id: 65, lang: "Turcomano", text: "Öňe Corinthians!", detail: "Ônie Coríntians", country: "Turcomenistão" },
    { id: 66, lang: "Somáli", text: "Hore u soco Corinthians!", detail: "Hôre u sôcô Coríntians", country: "Somália" },
    { id: 67, lang: "Chin", text: "Fek Corinthians!", detail: "Fêk Coríntians", country: "Mianmar" },
    { id: 68, lang: "Assamês", text: "আগুৱাই যাওক কোৰিঅনচ!", detail: "Āgu'āi yā'uka Kōriañca!", country: "Índia" },
    { id: 69, lang: "Marvari", text: "आगे चालो कोरिनथियंस!", detail: "Āgē chālō Korinthians!", country: "Índia" },
    { id: 70, lang: "Magahi", text: "आगू बढ़ कोरिनथियंस!", detail: "Āgū baṛh Korinthiyans!", country: "Índia" },
    { id: 71, lang: "Maguindanao", text: "Go sa Corinthians!", detail: "Gô sâ Coríntians", country: "Filipinas" },
    { id: 72, lang: "Húngaro", text: "Hajrá Corinthians!", detail: "Háyra Coríntians", country: "Hungria" },
    { id: 73, lang: "Grego", text: "Πάμε Κορίνθιανς!", detail: "Páme Korínthians!", country: "Grécia" },
    { id: 74, lang: "Quiniaruanda", text: "Yigendere Corinthians!", detail: "Yiguênderê Coríntians", country: "Ruanda" },
    { id: 75, lang: "Acã", text: "Kɔ Corinthians!", detail: "Côr Coríntians", country: "Gana" },
    { id: 76, lang: "Xhosa", text: "Hamba Corinthians!", detail: "Rámbá Coríntians", country: "África do Sul" },
    { id: 77, lang: "Tcheco", text: "Do toho Corinthians!", detail: "Dô tôro Coríntians", country: "Chéquia" },
    { id: 78, lang: "Zulu", text: "Hamba phambili Corinthians!", detail: "Hâmba fâmbili Coríntians", country: "África do Sul" },
    { id: 79, lang: "Quíchua", text: "Purinayan Corinthians!", detail: "Purínaiân Coríntians", country: "Peru" },
    { id: 80, lang: "Sueco", text: "Kom igen Corinthians!", detail: "Cômm igên Coríntians", country: "Suécia" },
    { id: 81, lang: "Min Dong (Chinês)", text: "加油，哥林斯!", detail: "Ga-iu, Gŏ̤-lìng-sĭ!", country: "China" },
    { id: 82, lang: "Uigur", text: "ئالغا كورىنتىئانس!", detail: "Algha Korintians!", country: "China" },
    { id: 83, lang: "Balúchi", text: "برو کورنتینز!", detail: "Buro Korintīnz!", country: "Paquistão" },
    { id: 84, lang: "Bielorrusso", text: "Наперад, Карынтыянс!", detail: "Naperad, Karyntyyans!", country: "Bielorrússia" },
    { id: 85, lang: "Ilocano", text: "Agtultuloy Corinthians!", detail: "Agtultúloi Coríntians", country: "Filipinas" },
    { id: 86, lang: "Gilaki", text: "پیش کورینتیانس!", detail: "Pīsh Korintīāns!", country: "Irã" },
    { id: 87, lang: "Chona", text: "Enda Corinthians!", detail: "Ênda Coríntians", country: "Zimbábue" },
    { id: 88, lang: "Quimbundu", text: "Yelele Corinthians!", detail: "Ielele Coríntians", country: "Angola" },
    { id: 89, lang: "Moré (Mossí)", text: "Yééé! Corinthians!", detail: "Iêêê Coríntians", country: "Burkina Faso" },
    { id: 90, lang: "Balinês", text: "Maju Corinthians!", detail: "Máju Coríntians", country: "Indonésia" },
    { id: 91, lang: "Hmong", text: "Mus Corinthians!", detail: "Mú Coríntians", country: "China" },
    { id: 92, lang: "Crioulo Mauriciano", text: "Alé Corinthians!", detail: "Alê Coríntians", country: "Maurício" },
    { id: 93, lang: "Concani", text: "फुडें वच कोरिंथियन!", detail: "Fuḍēm vaca kōrinthiyana!", country: "Índia" },
    { id: 94, lang: "Zaza", text: "Şo Corinthians!", detail: "Shó Coríntians", country: "Turquia" },
    { id: 95, lang: "Sidamo", text: "Baasi Corinthians!", detail: "Báasi Coríntians", country: "Etiópia" },
    { id: 96, lang: "Tiv", text: "Hôôô! Corinthians!", detail: "Rôôô Coríntians", country: "Nigéria" },
    { id: 97, lang: "Luba-Kasai", text: "Yaa! Corinthians!", detail: "Iáa Coríntians", country: "Congo (Kinshasa)" },
    { id: 98, lang: "Bambara", text: "Doni Corinthians!", detail: "Dôni Coríntians", country: "Mali" },
    { id: 99, lang: "Gikuyu", text: "Thiĩ na mbere Corinthians!", detail: "Thíi nâ mbêre Coríntians", country: "Quênia" },
    { id: 100, lang: "Tigrínia", text: "ቅድሚት ኮሪንቲያንስ!", detail: "Ḳədmit Kōrīntīyans!", country: "Eritreia" },
    { id: 101, lang: "Chewa (Chichewa)", text: "Pitani Corinthians", detail: "Pitani = Vá/Vão", country: "Malaui" },
    { id: 102, lang: "Tibetano", text: "ཀོ་རིན་ཐི་ཨན་སི་འགྲོ།", detail: "Ko-rin-thi-an-si 'gro", country: "China (Tibete)" },
    { id: 103, lang: "Tsonga", text: "Famba Corinthians", detail: "Famba = Vá", country: "Moçambique" },
    { id: 104, lang: "Tswana", text: "Tsamaya Corinthians", detail: "Tsamaya = Vá", country: "Botsuana" },
    { id: 105, lang: "Dinamarquês", text: "Kom så Corinthians", detail: "Kom så = Vamos lá", country: "Dinamarca" },
    { id: 106, lang: "Eslovaco", text: "Do toho Corinthians", detail: "Do toho = Vai!", country: "Eslováquia" },
    { id: 107, lang: "Lituano", text: "Pirmyn, Corinthians!", detail: "Pirmyn = Avante", country: "Lituânia" },
    { id: 108, lang: "Nepal Bhasa", text: "कोरिन्थियन्स वने", detail: "Kōrinthiyans wanē", country: "Nepal" },
    { id: 109, lang: "Lao", text: "ໄປ ຄໍຣິນທຽນສ໌", detail: "Pai Korintian", country: "Laos" },
    { id: 110, lang: "Galego", text: "Vai, Corinthians!", detail: "Igual ao português", country: "Espanha" },
    { id: 111, lang: "Catalão", text: "Endavant, Corinthians!", detail: "Endavant = Avante", country: "Espanha" },
    { id: 112, lang: "Maltês", text: "Mur, Corinthians!", detail: "Mur = Vá/Força", country: "Malta" },
    { id: 113, lang: "Armênio", text: "Գնա՛, Կորինթիանս", detail: "Gna', Korint'ians", country: "Armênia" },
    { id: 114, lang: "Tailandês Setentrional", text: "ໄປ ເກີລິນທຽນ", detail: "Pai Koelin thian", country: "Tailândia" },
    { id: 115, lang: "Birmanês Shan", text: "ပိုင် ကိုရငျးတျငျး", detail: "Pai Ko Yintin", country: "Mianmar" },
    { id: 116, lang: "Aymara", text: "Corinthians sarxma", detail: "Sarxma = Vá em frente", country: "Bolívia" },
    { id: 117, lang: "Esloveno", text: "Naprej, Corinthians!", detail: "Naprej = Avante", country: "Eslovênia" },
    { id: 118, lang: "Hiri Motu", text: "Corinthians lao!", detail: "Lao = Vá", country: "Papua-Nova Guiné" },
    { id: 119, lang: "Sotho do Norte", text: "Sepela Corinthians", detail: "Sepela = Vá/Avance", country: "África do Sul" },
    { id: 120, lang: "Fijiano", text: "Lako Corinthians", detail: "Lako = Vá", country: "Fiji" },
    { id: 121, lang: "Galês", text: "Ewch Corinthians", detail: "Ewch = Vá", country: "País de Gales" },
    { id: 122, lang: "Islandês", text: "Áfram, Corinthians!", detail: "Áfram = Avante", country: "Islândia" },
    { id: 123, lang: "Luxemburguês", text: "Géi Corinthians", detail: "Géi = Vá", country: "Luxemburgo" },
    { id: 124, lang: "Suaíli", text: "Nenda Corinthians", detail: "Nenda = Vá", country: "Tanzânia" },
    { id: 125, lang: "Malaio (Indonésio)", text: "Pergi Corinthians", detail: "Pergi = Vá/Siga", country: "Indonésia" },
    { id: 126, lang: "Árabe do Saara", text: "يا كورينثيانز روح", detail: "Ya Kūrīnthiāns rūḥ", country: "Argélia" },
    { id: 127, lang: "Waray-Waray", text: "Kadto Corinthians", detail: "Kadto = Vá", country: "Filipinas" },
    { id: 128, lang: "Hiligaynon", text: "Sige Corinthians", detail: "Sige = Força", country: "Filipinas" },
    { id: 129, lang: "Tcheco", text: "Pojď, Corinthians!", detail: "Pojď = Vamos/Vai", country: "Chéquia" },
    { id: 130, lang: "Norueguês", text: "Kom igjen Corinthians!", detail: "Kom igjen = Vamos lá", country: "Noruega" },
    { id: 131, lang: "Basco", text: "Aurrera Corinthians!", detail: "Aurrera = Avante", country: "Espanha" },
    { id: 132, lang: "Havaiano", text: "E hele Corinthians", detail: "E hele = Vá", country: "Estados Unidos" },
    { id: 133, lang: "Guarani", text: "Corinthians tereho", detail: "Tereho = Você vá", country: "Paraguai" },
    { id: 134, lang: "Tzotzil", text: "Corinthians bat", detail: "Bat = Vá", country: "México" },
    { id: 135, lang: "Twi", text: "Kɔ Corinthians", detail: "Kɔ = Vá", country: "Gana" },
    { id: 136, lang: "Wolof", text: "Demal Corinthians", detail: "Demal = Vá", country: "Senegal" },
    { id: 137, lang: "Kabyle", text: "Argaz Corinthians", detail: "Argaz = Vá/Avance", country: "Argélia" },
    { id: 138, lang: "Sotho do Sul", text: "Tloha Corinthians", detail: "Tloha = Vá", country: "Lesoto" },
    { id: 139, lang: "Tonganês", text: "ʻAlu Corinthians", detail: "ʻAlu = Vá", country: "Tonga" },
    { id: 140, lang: "Papiamento", text: "Bai Corinthians", detail: "Bai = Vá", country: "Curaçao" },
    { id: 141, lang: "Escocês", text: "Rach Corinthians", detail: "Rach = Vá", country: "Reino Unido" },
    { id: 142, lang: "Frísio", text: "Gean Corinthians", detail: "Gean = Vá", country: "Holanda" },
    { id: 143, lang: "Ganda", text: "Genda Corinthians", detail: "Genda = Vá", country: "Uganda" },
    { id: 144, lang: "Sânscrito", text: "गच्छतु कोरिन्थीयन्स", detail: "Gacchatu Korinthīyans", country: "Índia" },
    { id: 145, lang: "Hunsrik", text: "Geh Corinthians", detail: "Geh = Vá", country: "Brasil" },
    { id: 146, lang: "Wayuu", text: "Corinthians paa", detail: "Paa = Vá", country: "Colômbia" },
    { id: 147, lang: "Quechua do Sul", text: "Corinthians rispa", detail: "Rispa = Vá/Prossiga", country: "Peru" },
    { id: 148, lang: "Mixteco", text: "Corinthians ndíchi", detail: "Ndíchi = Vá", country: "México" },
    { id: 149, lang: "Cherokee", text: "ᎠᎢᎾ ᎢᎾᎾ", detail: "Ayina Ina'a", country: "Estados Unidos" },
    { id: 150, lang: "Samoano", text: "Alu Corinthians", detail: "Alu = Vá", country: "Samoa" },
    { id: 151, lang: "Tetum", text: "Bá Corinthians", detail: "Bá = Vá", country: "Timor-Leste" },
    { id: 152, lang: "Navajo", text: "Corinthians dego", detail: "Dego = Vá", country: "Estados Unidos" },
    { id: 153, lang: "Mapudungun", text: "Corinthians amu", detail: "Amu = Vá", country: "Chile" },
    { id: 154, lang: "Ojibwa", text: "Corinthians zhaa", detail: "Zhaa = Vá", country: "Canadá" },
    { id: 155, lang: "Cree", text: "Corinthians ito", detail: "Ito = Vá", country: "Canadá" },
    { id: 156, lang: "Xosa", text: "Hamba Corinthians", detail: "Hamba = Vá", country: "África do Sul" },
    { id: 157, lang: "Tsonga", text: "Famba Corinthians", detail: "Famba = Vá", country: "Moçambique" },
    { id: 158, lang: "Venda", text: "Eda Corinthians", detail: "Eda = Vá", country: "África do Sul" },
    { id: 159, lang: "Ndebele do Norte", text: "Hamba Corinthians", detail: "Hamba = Vá", country: "Zimbábue" },
    { id: 160, lang: "Ndebele do Sul", text: "Hamba Corinthians", detail: "Hamba = Vá", country: "África do Sul" },
    { id: 161, lang: "Swati", text: "Hamba Corinthians", detail: "Hamba = Vá", country: "Essuatíni" },
    { id: 162, lang: "Pedi", text: "Sepela Corinthians", detail: "Sepela = Vá", country: "África do Sul" },
    { id: 163, lang: "Luganda", text: "Genda Corinthians", detail: "Genda = Vá", country: "Uganda" },
    { id: 164, lang: "Rundi", text: "Genda Corinthians", detail: "Genda = Vá", country: "Burundi" },
    { id: 165, lang: "Shona", text: "Enda Corinthians", detail: "Enda = Vá", country: "Zimbábue" },
    { id: 166, lang: "Kamba", text: "Enda Corinthians", detail: "Enda = Vá", country: "Quênia" },
    { id: 167, lang: "Lunda", text: "Yenda Corinthians", detail: "Yenda = Vá", country: "Angola" },
    { id: 168, lang: "Mbundu do Sul", text: "Ndjinda Corinthians", detail: "Ndjinda = Vá", country: "Angola" },
    { id: 169, lang: "Ovambo", text: "Inda Corinthians", detail: "Inda = Vá", country: "Namíbia" },
    { id: 170, lang: "Ndonga", text: "Inda Corinthians", detail: "Inda = Vá", country: "Namíbia" },
    { id: 171, lang: "Herero", text: "Eenda Corinthians", detail: "Eenda = Vá", country: "Namíbia" },
    { id: 172, lang: "Lozi", text: "Zamaya Corinthians", detail: "Zamaya = Vá", country: "Zâmbia" },
    { id: 173, lang: "Sena", text: "Enda Corinthians", detail: "Enda = Vá", country: "Moçambique" },
    { id: 174, lang: "Tonga", text: "Enda Corinthians", detail: "Enda = Vá", country: "Zâmbia" },
    { id: 175, lang: "Tumbuka", text: "Yani Corinthians", detail: "Yani = Vá", country: "Malaui" },
    { id: 176, lang: "Makhuwa", text: "Yaa Corinthians", detail: "Yaa = Vá", country: "Moçambique" },
    { id: 177, lang: "Lomwe", text: "Nrowa Corinthians", detail: "Nrowa = Vá", country: "Moçambique" },
    { id: 178, lang: "Chokwe", text: "Kunda Corinthians", detail: "Kunda = Vá/Ganhe", country: "Angola" },
    { id: 179, lang: "Umbundu", text: "Nya Corinthians", detail: "Nya = Vá", country: "Angola" },
    { id: 180, lang: "Bemba", text: "Yenda Corinthians", detail: "Yenda = Vá", country: "Zâmbia" },
    { id: 181, lang: "Luyia", text: "Ndiya Corinthians", detail: "Ndiya = Vá", country: "Quênia" },
    { id: 182, lang: "Maasai", text: "Enkalo Corinthians", detail: "Enkalo = Vá/Siga", country: "Quênia" },
    { id: 183, lang: "Kalenjin", text: "Lakoi Corinthians", detail: "Lakoi = Vá", country: "Quênia" },
    { id: 184, lang: "Luo", text: "Dhi Corinthians", detail: "Dhi = Vá", country: "Quênia" },
    { id: 185, lang: "Nuer", text: "Gaa Corinthians", detail: "Gaa = Vá", country: "Sudão do Sul" },
    { id: 186, lang: "Dinka", text: "Corinthians luu", detail: "Luu = Vá", country: "Sudão do Sul" },
    { id: 187, lang: "Somali", text: "Kac Corinthians", detail: "Kac = Levante-se", country: "Somália" },
    { id: 188, lang: "Afar", text: "Kawu Corinthians", detail: "Kawu = Vá", country: "Etiópia" },
    { id: 189, lang: "Saho", text: "Kawo Corinthians", detail: "Kawo = Vá", country: "Eritreia" },
    { id: 190, lang: "Tigré", text: "Corinthians qe't", detail: "Qe't = Vá/Siga", country: "Eritreia" },
    { id: 191, lang: "Harari", text: "Corinthians yir", detail: "Yir = Vá", country: "Etiópia" },
    { id: 192, lang: "Oromo W.", text: "Deemi Corinthians", detail: "Deemi = Vá", country: "Etiópia" },
    { id: 193, lang: "Oromo E.", text: "Deemi Corinthians", detail: "Deemi = Vá", country: "Etiópia" },
    { id: 194, lang: "Sidamo", text: "Daaro Corinthians", detail: "Daaro = Vá/Avance", country: "Etiópia" },
    { id: 195, lang: "Hadiyya", text: "Wajjo Corinthians", detail: "Wajjo = Vá", country: "Etiópia" },
    { id: 196, lang: "Kambaata", text: "Wajo Corinthians", detail: "Wajo = Vá", country: "Etiópia" },
    { id: 197, lang: "Wolaytta", text: "Wo'o Corinthians", detail: "Wo'o = Vá", country: "Etiópia" },
    { id: 198, lang: "Gamo", text: "Wajo Corinthians", detail: "Wajo = Vá", country: "Etiópia" },
    { id: 199, lang: "Gofa", text: "Wajo Corinthians", detail: "Wajo = Vá", country: "Etiópia" },
    { id: 200, lang: "Konso", text: "Yana Corinthians", detail: "Yana = Vá", country: "Etiópia" },
    { id: 201, lang: "Atong", text: "Corinthians reba", detail: "Reba = Vá", country: "Índia" },
    { id: 202, lang: "Zande", text: "Corinthians yo", detail: "Yo = Vá", country: "Congo (Kinshasa)" },
    { id: 203, lang: "Luri do Sul", text: "Corinthians be", detail: "Be = Vá", country: "Irã" },
    { id: 204, lang: "Mende", text: "Corinthians ya", detail: "Ya = Vá", country: "Serra Leoa" },
    { id: 205, lang: "Kirghiz", text: "Алға, Коринтианс!", detail: "Alga = Avante", country: "Quirguistão" },
    { id: 206, lang: "Manés", text: "Gow Corinthians!", detail: "Gow = Vá/Continue", country: "Ilha de Man" },
    { id: 207, lang: "Mien", text: "Corinthians ndo", detail: "Ndo = Vá", country: "China" },
    { id: 208, lang: "Pulaar", text: "Yahu Corinthians!", detail: "Yahu = Vá/Siga", country: "Guiné" },
    { id: 209, lang: "Bicol", text: "Padagos Corinthians", detail: "Padagos = Continue", country: "Filipinas" },
    { id: 210, lang: "Pangasinês", text: "La Corinthians", detail: "La = Vá", country: "Filipinas" },
    { id: 211, lang: "Tadjique", text: "Пеш, Коринтианс!", detail: "Pesh = Avante", country: "Tajiquistão" },
    { id: 212, lang: "Wolof", text: "Demal Corinthians", detail: "Demal = Vá", country: "Senegal" },
    { id: 213, lang: "Tétum", text: "Bá Corinthians", detail: "Bá = Vá", country: "Timor-Leste" },
    { id: 214, lang: "Siksika", text: "Corinthians poksi", detail: "Poksi = Vá/Continue", country: "Canadá" },
    { id: 215, lang: "Nyanja", text: "Pitani Corinthians", detail: "Pitani = Vá/Vão", country: "Malaui" },
    { id: 216, lang: "Mekeo", text: "Corinthians lao", detail: "Lao = Vá", country: "Papua-Nova Guiné" },
    { id: 217, lang: "Kimbundu", text: "Káua Corinthians", detail: "Káua = Vá/Vai", country: "Angola" },
    { id: 218, lang: "Mande", text: "Corinthians taa", detail: "Taa = Vá", country: "Mali" },
    { id: 219, lang: "Gaélico Escocês", text: "Rach air adhart Corinthians!", detail: "Rach air adhart = Vá", country: "Reino Unido" },
    { id: 220, lang: "Crioulo CV", text: "Bai Corinthians", detail: "Bai = Vá", country: "Cabo Verde" },
    { id: 221, lang: "Chavacano", text: "Anda Corinthians", detail: "Anda = Vá", country: "Filipinas" },
    { id: 222, lang: "Caxemira", text: "Corinthians chu", detail: "Chu = Vá", country: "Índia" },
    { id: 223, lang: "Krio", text: "Go Corinthians", detail: "Go = Vá", country: "Serra Leoa" },
    { id: 224, lang: "Ladino", text: "Ande Corinthians", detail: "Ande = Vá/Avance", country: "Israel" },
    { id: 225, lang: "Bashkir", text: "Башҡортостанға бар!", detail: "Bar = Vá", country: "Rússia" },
    { id: 226, lang: "Tupi (Geral)", text: "Corinthians upe", detail: "Upe = Vá/Avante", country: "Brasil" },
    { id: 227, lang: "Quechua Norte", text: "Corinthians ri", detail: "Ri = Vá", country: "Equador" },
    { id: 228, lang: "Quichua Ch.", text: "Corinthians ri", detail: "Ri = Vá", country: "Equador" },
    { id: 229, lang: "Luba-Kasai", text: "Genda Corinthians", detail: "Genda = Vá", country: "Congo (Kinshasa)" },
    { id: 230, lang: "Tsonga", text: "Famba Corinthians", detail: "Famba = Vá", country: "Moçambique" },
    { id: 231, lang: "Koyra Chiini", text: "Corinthians ye", detail: "Ye = Vá", country: "Mali" },
    { id: 232, lang: "Avar", text: "Къанлъийа Коринтианс!", detail: "K'antl'iia = Avante", country: "Rússia" },
    { id: 233, lang: "Tumbuka", text: "Yani Corinthians", detail: "Yani = Vá", country: "Malaui" },
    { id: 234, lang: "Garhwali", text: "Corinthians ja", detail: "Ja = Vá", country: "Índia" },
    { id: 235, lang: "Sotho do Norte", text: "Sepela Corinthians", detail: "Sepela = Vá", country: "África do Sul" },
    { id: 236, lang: "Uabou", text: "Corinthians do", detail: "Do = Vá", country: "Libéria" },
    { id: 237, lang: "Bassa", text: "Corinthians da", detail: "Da = Vá", country: "Libéria" },
    { id: 238, lang: "Ndebele N.", text: "Hamba Corinthians", detail: "Hamba = Vá", country: "Zimbábue" },
    { id: 239, lang: "Venda", text: "Eda Corinthians", detail: "Eda = Vá", country: "África do Sul" },
    { id: 240, lang: "Swati", text: "Hamba Corinthians", detail: "Hamba = Vá", country: "Essuatíni" },
    { id: 241, lang: "Xhosa", text: "Hamba Corinthians", detail: "Hamba = Vá", country: "África do Sul" },
    { id: 242, lang: "Zulu", text: "Hamba Corinthians", detail: "Hamba = Vá", country: "África do Sul" },
    { id: 243, lang: "Birmanês (var)", text: "ကိုရင်သီယန် သွားပါ", detail: "Thwa = Vá", country: "Mianmar" },
    { id: 244, lang: "Papiamento", text: "Bai Corinthians", detail: "Bai = Vá", country: "Curaçao" },
    { id: 245, lang: "Maithili", text: "कोरिन्थियन्स जाऊ", detail: "Jāū = Vá", country: "Índia" },
    { id: 246, lang: "Magahi", text: "कोरिन्थियन्स चल", detail: "Chal = Vá/Ande", country: "Índia" },
    { id: 247, lang: "Dhundhari", text: "कोरिन्थियन्स जा", detail: "Jā = Vá", country: "Índia" },
    { id: 248, lang: "Haryanvi", text: "कोरिन्थियन्स चाल", detail: "Chāl = Vá/Ande", country: "Índia" },
    { id: 249, lang: "Konkani", text: "कोरिंथियन्स वच", detail: "Vach = Vá", country: "Índia" },
    { id: 250, lang: "Málgache", text: "Mandeha Corinthians", detail: "Mandeha = Vá", country: "Madagascar" },
    { id: 251, lang: "Balúchi", text: "کورینتھیئنز برو", detail: "Braw = Vá", country: "Paquistão" },
    { id: 252, lang: "Dinka", text: "Corinthians luu", detail: "Luu = Vá", country: "Sudão do Sul" },
    { id: 253, lang: "Nuer", text: "Gaa Corinthians", detail: "Gaa = Vá", country: "Sudão do Sul" },
    { id: 254, lang: "Zarma", text: "Corinthians kani", detail: "Kani = Vá", country: "Níger" },
    { id: 255, lang: "Kabyle", text: "Argaz Corinthians", detail: "Argaz = Vá/Avance", country: "Argélia" },
    { id: 256, lang: "Berbere", text: "Amẓ Corinthians", detail: "Amẓ = Vá/Siga", country: "Marrocos" },
    { id: 257, lang: "Tuaregue", text: "Adu Corinthians", detail: "Adu = Vá", country: "Níger" },
    { id: 258, lang: "Afar", text: "Kawu Corinthians", detail: "Kawu = Vá", country: "Etiópia" },
    { id: 259, lang: "Saho", text: "Kawo Corinthians", detail: "Kawo = Vá", country: "Eritreia" },
    { id: 260, lang: "Tigré", text: "Corinthians qe't", detail: "Qe't = Vá/Siga", country: "Eritreia" },
    { id: 261, lang: "Luyia", text: "Ndiya Corinthians", detail: "Ndiya = Vá", country: "Quênia" },
    { id: 262, lang: "Kalenjin", text: "Lakoi Corinthians", detail: "Lakoi = Vá", country: "Quênia" },
    { id: 263, lang: "Luo", text: "Dhi Corinthians", detail: "Dhi = Vá", country: "Quênia" },
    { id: 264, lang: "Maasai", text: "Enkalo Corinthians", detail: "Enkalo = Vá/Siga", country: "Quênia" },
    { id: 265, lang: "Guarani PY", text: "Corinthians tereho", detail: "Tereho = Você vá", country: "Paraguai" },
    { id: 266, lang: "Aymara C.", text: "Corinthians sarxma", detail: "Sarxma = Vá em frente", country: "Bolívia" },
    { id: 267, lang: "Tzotzil", text: "Corinthians bat", detail: "Bat = Vá", country: "México" },
    { id: 268, lang: "Otomi", text: "Corinthians pa", detail: "Pa = Vá", country: "México" },
    { id: 269, lang: "Purépecha", text: "Corinthians ni", detail: "Ni = Vá", country: "México" },
    { id: 270, lang: "Wayuu", text: "Corinthians paa", detail: "Paa = Vá", country: "Colômbia" },
    { id: 271, lang: "Navaho", text: "Corinthians dego", detail: "Dego = Vá", country: "Estados Unidos" },
    { id: 272, lang: "Cherokee", text: "ᎠᎢᎾ ᎢᎾᎾ", detail: "Ayina Ina'a", country: "Estados Unidos" },
    { id: 273, lang: "Creek", text: "Corinthians hayá", detail: "Hayá = Vá", country: "Estados Unidos" },
    { id: 274, lang: "Choctaw", text: "Corinthians iya", detail: "Iya = Vá", country: "Estados Unidos" },
    { id: 275, lang: "Ojibwa", text: "Corinthians zhaa", detail: "Zhaa = Vá", country: "Canadá" },
    { id: 276, lang: "Cree", text: "Corinthians ito", detail: "Ito = Vá", country: "Canadá" },
    { id: 277, lang: "Lakota", text: "Corinthians yé", detail: "Yé = Vá", country: "Estados Unidos" },
    { id: 278, lang: "Dakota", text: "Corinthians yé", detail: "Yé = Vá", country: "Estados Unidos" },
    { id: 279, lang: "Mohawk", text: "Corinthians kye", detail: "Kye = Vá", country: "Canadá" },
    { id: 280, lang: "Oneida", text: "Corinthians kye", detail: "Kye = Vá", country: "Estados Unidos" },
    { id: 281, lang: "Seneca", text: "Corinthians kye", detail: "Kye = Vá", country: "Estados Unidos" },
    { id: 282, lang: "Cayuga", text: "Corinthians kye", detail: "Kye = Vá", country: "Canadá" },
    { id: 283, lang: "Onondaga", text: "Corinthians kye", detail: "Kye = Vá", country: "Estados Unidos" },
    { id: 284, lang: "Tuscarora", text: "Corinthians kye", detail: "Kye = Vá", country: "Estados Unidos" },
    { id: 285, lang: "Haida", text: "Corinthians áa", detail: "Áa = Vá", country: "Canadá" },
    { id: 286, lang: "Tsimshian", text: "Corinthians la", detail: "La = Vá", country: "Canadá" },
    { id: 287, lang: "Kwak'wala", text: "Corinthians guk", detail: "Guk = Vá", country: "Canadá" },
    { id: 288, lang: "Nuu-chah-nulth", text: "Corinthians yaa", detail: "Yaa = Vá", country: "Canadá" },
    { id: 289, lang: "Lushootseed", text: "Corinthians č'əx", detail: "č'əx = Vá", country: "Estados Unidos" },
    { id: 290, lang: "Halkomelem", text: "Corinthians č'əx", detail: "č'əx = Vá", country: "Canadá" },
    { id: 291, lang: "Sooke", text: "Corinthians č'əx", detail: "č'əx = Vá", country: "Canadá" },
    { id: 292, lang: "Makah", text: "Corinthians ya", detail: "Ya = Vá", country: "Estados Unidos" },
    { id: 293, lang: "Nootka", text: "Corinthians ya", detail: "Ya = Vá", country: "Canadá" },
    { id: 294, lang: "Quileute", text: "Corinthians ya", detail: "Ya = Vá", country: "Estados Unidos" },
    { id: 295, lang: "Yurok", text: "Corinthians 'yo", detail: "'Yo = Vá", country: "Estados Unidos" },
    { id: 296, lang: "Hupa", text: "Corinthians yaa", detail: "Yaa = Vá", country: "Estados Unidos" },
    { id: 297, lang: "Karok", text: "Corinthians yaa", detail: "Yaa = Vá", country: "Estados Unidos" },
    { id: 298, lang: "Shasta", text: "Corinthians yaa", detail: "Yaa = Vá", country: "Estados Unidos" },
    { id: 299, lang: "Achumawi", text: "Corinthians yaa", detail: "Yaa = Vá", country: "Estados Unidos" },
    { id: 300, lang: "Atsugewi", text: "Corinthians yaa", detail: "Yaa = Vá", country: "Estados Unidos" },
    { id: 301, lang: "Toba (Qom)", text: "Corinthians hiagá", detail: "Hiagá = Vá", country: "Argentina" },
    { id: 302, lang: "Quiché", text: "Corinthians be", detail: "Be = Vá", country: "Guatemala" },
    { id: 303, lang: "Mam", text: "Corinthians b'ena", detail: "B'ena = Vá", country: "Guatemala" },
    { id: 304, lang: "Kekchi", text: "Corinthians chaq", detail: "Chaq = Vá", country: "Guatemala" },
    { id: 305, lang: "Cakchiquel", text: "Corinthians je'", detail: "Je' = Vá", country: "Guatemala" },
    { id: 306, lang: "Zapoteca", text: "Corinthians yé", detail: "Yé = Vá", country: "México" },
    { id: 307, lang: "Mazahua", text: "Corinthians nzaki", detail: "Nzaki = Vá", country: "México" },
    { id: 308, lang: "Mixteco", text: "Corinthians ndíchi", detail: "Ndíchi = Vá", country: "México" },
    { id: 309, lang: "Náuatle", text: "Corinthians ximo", detail: "Ximo = Vá", country: "México" },
    { id: 310, lang: "Tarasco", text: "Corinthians ni", detail: "Ni = Vá", country: "México" },
    { id: 311, lang: "Totonaca", text: "Corinthians k'atla", detail: "K'atla = Vá", country: "México" },
    { id: 312, lang: "Chinanteco", text: "Corinthians jaa", detail: "Jaa = Vá", country: "México" },
    { id: 313, lang: "Huasteco", text: "Corinthians ku", detail: "Ku = Vá", country: "México" },
    { id: 314, lang: "Zoque", text: "Corinthians ke", detail: "Ke = Vá", country: "México" },
    { id: 315, lang: "Maya Yucateco", text: "Corinthians xeen", detail: "Xeen = Vá", country: "México" },
    { id: 316, lang: "Tepehuano", text: "Corinthians gaka", detail: "Gaka = Vá", country: "México" },
    { id: 317, lang: "Cora", text: "Corinthians 'itse", detail: "'Itse = Vá", country: "México" },
    { id: 318, lang: "Huichol", text: "Corinthians we", detail: "We = Vá", country: "México" },
    { id: 319, lang: "Pima Bajo", text: "Corinthians ñu", detail: "Ñu = Vá", country: "México" },
    { id: 320, lang: "Apache", text: "Corinthians yá'an", detail: "Yá'an = Vá", country: "Estados Unidos" },
    { id: 321, lang: "Arapaho", text: "Corinthians 'oh'o", detail: "'Oh'o = Vá", country: "Estados Unidos" },
    { id: 322, lang: "Cheyenne", text: "Corinthians hová", detail: "Hová = Vá", country: "Estados Unidos" },
    { id: 323, lang: "Blackfoot", text: "Corinthians náh", detail: "Náh = Vá", country: "Canadá" },
    { id: 324, lang: "Fox", text: "Corinthians naha", detail: "Naha = Vá", country: "Estados Unidos" },
    { id: 325, lang: "Sauk", text: "Corinthians naha", detail: "Naha = Vá", country: "Estados Unidos" },
    { id: 326, lang: "Potawatomi", text: "Corinthians zhyaa", detail: "Zhyaa = Vá", country: "Estados Unidos" },
    { id: 327, lang: "Menominee", text: "Corinthians ahki", detail: "Ahki = Vá", country: "Estados Unidos" },
    { id: 328, lang: "Kickapoo", text: "Corinthians ne", detail: "Ne = Vá", country: "Estados Unidos" },
    { id: 329, lang: "Mi'kmaq", text: "Corinthians el", detail: "El = Vá", country: "Canadá" },
    { id: 330, lang: "Maliseet", text: "Corinthians él", detail: "Él = Vá", country: "Canadá" },
    { id: 331, lang: "Caddo", text: "Corinthians 'e", detail: "'E = Vá", country: "Estados Unidos" },
    { id: 332, lang: "Wichita", text: "Corinthians háwa", detail: "Háwa = Vá", country: "Estados Unidos" },
    { id: 333, lang: "Pawnee", text: "Corinthians kí", detail: "Kí = Vá", country: "Estados Unidos" },
    { id: 334, lang: "Arikara", text: "Corinthians na", detail: "Na = Vá", country: "Estados Unidos" },
    { id: 335, lang: "Siouano", text: "Corinthians yé", detail: "Yé = Vá", country: "Estados Unidos" },
    { id: 336, lang: "Hidatsa", text: "Corinthians ná", detail: "Ná = Vá", country: "Estados Unidos" },
    { id: 337, lang: "Mandan", text: "Corinthians 'an", detail: "'An = Vá", country: "Estados Unidos" },
    { id: 338, lang: "Tlingit", text: "Corinthians at", detail: "At = Vá", country: "Estados Unidos" },
    { id: 339, lang: "Haida", text: "Corinthians áa", detail: "Áa = Vá", country: "Canadá" },
    { id: 340, lang: "Zuni", text: "Corinthians 'e", detail: "'E = Vá", country: "Estados Unidos" },
    { id: 341, lang: "Keresan", text: "Corinthians tsu", detail: "Tsu = Vá", country: "Estados Unidos" },
    { id: 342, lang: "Hopi", text: "Corinthians ya", detail: "Ya = Vá", country: "Estados Unidos" },
    { id: 343, lang: "Kiowa", text: "Corinthians yé", detail: "Yé = Vá", country: "Estados Unidos" },
    { id: 344, lang: "Tiwa", text: "Corinthians ta", detail: "Ta = Vá", country: "Estados Unidos" },
    { id: 345, lang: "Tewa", text: "Corinthians haa", detail: "Haa = Vá", country: "Estados Unidos" },
    { id: 346, lang: "Towa", text: "Corinthians háa", detail: "Háa = Vá", country: "Estados Unidos" },
    { id: 347, lang: "Pomo", text: "Corinthians qa", detail: "Qa = Vá", country: "Estados Unidos" },
    { id: 348, lang: "Yuma", text: "Corinthians cha", detail: "Cha = Vá", country: "Estados Unidos" },
    { id: 349, lang: "Salish", text: "Corinthians č'əx", detail: "Č'əx = Vá", country: "Canadá" },
    { id: 350, lang: "Chinook", text: "Corinthians wá", detail: "Wá = Vá", country: "Estados Unidos" },
    { id: 351, lang: "Coosan", text: "Corinthians ya", detail: "Ya = Vá", country: "Estados Unidos" },
    { id: 352, lang: "Kalapuya", text: "Corinthians yu", detail: "Yu = Vá", country: "Estados Unidos" },
    { id: 353, lang: "Takelma", text: "Corinthians ye", detail: "Ye = Vá", country: "Estados Unidos" },
    { id: 354, lang: "Tsimshian", text: "Corinthians la", detail: "La = Vá", country: "Canadá" },
    { id: 355, lang: "Wakashan", text: "Corinthians yaa", detail: "Yaa = Vá", country: "Canadá" },
    { id: 356, lang: "Na-Dené", text: "Corinthians dego", detail: "Dego = Vá", country: "Canadá" },
    { id: 357, lang: "Chukotka", text: "Коринтианс вак", detail: "Wak = Vá", country: "Rússia" },
    { id: 358, lang: "Koryak", text: "Коринтианс вак", detail: "Wak = Vá", country: "Rússia" },
    { id: 359, lang: "Itelmen", text: "Коринтианс вак", detail: "Wak = Vá", country: "Rússia" },
    { id: 360, lang: "Yukaghir", text: "Коринтианс ий", detail: "Iy = Vá", country: "Rússia" },
    { id: 361, lang: "Enets", text: "Коринтианс ŋa", detail: "ŋa = Vá", country: "Rússia" },
    { id: 362, lang: "Nganasan", text: "Коринтианс ŋa", detail: "ŋa = Vá", country: "Rússia" },
    { id: 363, lang: "Selkup", text: "Коринтианс ŋal", detail: "ŋal = Vá", country: "Rússia" },
    { id: 364, lang: "Khanty", text: "Коринтианс йи", detail: "Yi = Vá", country: "Rússia" },
    { id: 365, lang: "Mansi", text: "Коринтианс йи", detail: "Yi = Vá", country: "Rússia" },
    { id: 366, lang: "Nenets", text: "Коринтианс 'ы", detail: "'Ы = Vá", country: "Rússia" },
    { id: 367, lang: "Komi", text: "Коринтианс мун", detail: "Mun = Vá", country: "Rússia" },
    { id: 368, lang: "Udmurt", text: "Коринтианс мын", detail: "Myn = Vá", country: "Rússia" },
    { id: 369, lang: "Mari", text: "Коринтианс мий", detail: "Mii = Vá", country: "Rússia" },
    { id: 370, lang: "Erzya", text: "Коринтианс чи", detail: "Chi = Vá", country: "Rússia" },
    { id: 371, lang: "Moksha", text: "Коринтианс чи", detail: "Chi = Vá", country: "Rússia" },
    { id: 372, lang: "Livônio", text: "Corinthians lǟ", detail: "Lǟ = Vá", country: "Letônia" },
    { id: 373, lang: "Votic", text: "Corinthians menn", detail: "Menn = Vá", country: "Rússia" },
    { id: 374, lang: "Izhorian", text: "Corinthians menn", detail: "Menn = Vá", country: "Rússia" },
    { id: 375, lang: "Karelian", text: "Corinthians mennä", detail: "Mennä = Vá", country: "Rússia" },
    { id: 376, lang: "Veps", text: "Corinthians me", detail: "Me = Vá", country: "Rússia" },
    { id: 377, lang: "Sami", text: "Corinthians manna", detail: "Manna = Vá", country: "Noruega" },
    { id: 378, lang: "Checheno", text: "Хьажа Коринтианс!", detail: "H'aža = Vá", country: "Rússia" },
    { id: 379, lang: "Ingush", text: "Хьажа Коринтианс!", detail: "H'aža = Vá", country: "Rússia" },
    { id: 380, lang: "Dargwa", text: "Коринтианс ахъ", detail: "Aq' = Vá", country: "Rússia" },
    { id: 381, lang: "Lak", text: "Коринтианс хьу", detail: "Hwu = Vá", country: "Rússia" },
    { id: 382, lang: "Lezgiano", text: "Коринтианс фе", detail: "Fe = Vá", country: "Rússia" },
    { id: 383, lang: "Tabassarã", text: "Коринтианс ухъ", detail: "Uq' = Vá", country: "Rússia" },
    { id: 384, lang: "Agul", text: "Коринтианс фи", detail: "Fi = Vá", country: "Rússia" },
    { id: 385, lang: "Rutul", text: "Коринтианс фи", detail: "Fi = Vá", country: "Rússia" },
    { id: 386, lang: "Tsakhur", text: "Коринтианс фи", detail: "Fi = Vá", country: "Rússia" },
    { id: 387, lang: "Khinalug", text: "Коринтианс фи", detail: "Fi = Vá", country: "Azerbaijão" },
    { id: 388, lang: "Tsez", text: "Коринтианс хьи", detail: "H'i = Vá", country: "Rússia" },
    { id: 389, lang: "Bezhta", text: "Коринтианс хьи", detail: "H'i = Vá", country: "Rússia" },
    { id: 390, lang: "Hinuque", text: "Коринтианс хьи", detail: "H'i = Vá", country: "Rússia" },
    { id: 391, lang: "Kabardiano", text: "Коринтианс к1уэ", detail: "K'wə = Vá", country: "Rússia" },
    { id: 392, lang: "Adyghe", text: "Коринтианс к1о", detail: "K'o = Vá", country: "Rússia" },
    { id: 393, lang: "Abaza", text: "Коринтианс ауа", detail: "Aua = Vá", country: "Rússia" },
    { id: 394, lang: "Abkhaz", text: "Коринтианс аца", detail: "Aca = Vá", country: "Geórgia" },
    { id: 395, lang: "Georgiano", text: "წადი კორინთიანს!", detail: "Tsadi = Vá", country: "Geórgia" },
    { id: 396, lang: "Mingreliano", text: "ულა კორინთიანს", detail: "Ula = Vá", country: "Geórgia" },
    { id: 397, lang: "Laz", text: "გია კორინთიანს", detail: "Gia = Vá", country: "Turquia" },
    { id: 398, lang: "Svan", text: "მიდი კორინთიანს", detail: "Midi = Vá", country: "Geórgia" },
    { id: 399, lang: "Burushaski", text: "Corinthians ye", detail: "Ye = Vá", country: "Paquistão" },
    { id: 400, lang: "Nihali", text: "Corinthians gari", detail: "Gari = Vá", country: "Índia" },
    { id: 401, lang: "Konda", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 402, lang: "Kui", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 403, lang: "Kuvi", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 404, lang: "Malto", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 405, lang: "Kurukh", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 406, lang: "Brahui", text: "Corinthians de", detail: "De = Vá", country: "Paquistão" },
    { id: 407, lang: "Gondi", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 408, lang: "Kolami", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 409, lang: "Naiki", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 410, lang: "Gadaba", text: "Corinthians va", detail: "Va = Vá", country: "Índia" },
    { id: 411, lang: "Toda", text: "Corinthians pō", detail: "Pō = Vá", country: "Índia" },
    { id: 412, lang: "Kota", text: "Corinthians pō", detail: "Pō = Vá", country: "Índia" },
    { id: 413, lang: "Badaga", text: "Corinthians pō", detail: "Pō = Vá", country: "Índia" },
    { id: 414, lang: "Tulu", text: "Corinthians pō", detail: "Pō = Vá", country: "Índia" },
    { id: 415, lang: "Kodava", text: "Corinthians pō", detail: "Pō = Vá", country: "Índia" },
    { id: 416, lang: "Kharia", text: "Corinthians bā", detail: "Bā = Vá", country: "Índia" },
    { id: 417, lang: "Juang", text: "Corinthians bā", detail: "Bā = Vá", country: "Índia" },
    { id: 418, lang: "Ho", text: "Corinthians sen", detail: "Sen = Vá", country: "Índia" },
    { id: 419, lang: "Mundari", text: "Corinthians sen", detail: "Sen = Vá", country: "Índia" },
    { id: 420, lang: "Santali", text: "Corinthians chal", detail: "Chal = Vá", country: "Índia" },
    { id: 421, lang: "Sora", text: "Corinthians ān", detail: "Ān = Vá", country: "Índia" },
    { id: 422, lang: "Savara", text: "Corinthians ān", detail: "Ān = Vá", country: "Índia" },
    { id: 423, lang: "Palaung", text: "Corinthians lò", detail: "Lò = Vá", country: "Mianmar" },
    { id: 424, lang: "Wa", text: "Corinthians wā", detail: "Wā = Vá", country: "Mianmar" },
    { id: 425, lang: "Khmu", text: "Corinthians tɤ", detail: "Tɤ = Vá", country: "Laos" },
    { id: 426, lang: "Mang", text: "Corinthians hō", detail: "Hō = Vá", country: "Vietnã" },
    { id: 427, lang: "Mon", text: "ကော်ရင်သီယန် သွား", detail: "Hwa = Vá", country: "Mianmar" },
    { id: 428, lang: "Semang", text: "Corinthians a", detail: "A = Vá", country: "Malásia" },
    { id: 429, lang: "Senoi", text: "Corinthians ha", detail: "Ha = Vá", country: "Malásia" },
    { id: 430, lang: "Temiar", text: "Corinthians ha", detail: "Ha = Vá", country: "Malásia" },
    { id: 431, lang: "Viet-Muong", text: "Corinthians đi", detail: "Đi = Vá", country: "Vietnã" },
    { id: 432, lang: "Munda", text: "Corinthians sen", detail: "Sen = Vá", country: "Índia" },
    { id: 433, lang: "Nicobarense", text: "Corinthians ka", detail: "Ka = Vá", country: "Índia" },
    { id: 434, lang: "Andamanês", text: "Corinthians 'ō", detail: "'Ō = Vá", country: "Índia" },
    { id: 435, lang: "Austronésio", text: "Corinthians lako", detail: "Lako = Vá", country: "Indonésia" },
    { id: 436, lang: "Bikol", text: "Corinthians padagos", detail: "Padagos = Continue", country: "Filipinas" },
    { id: 437, lang: "Pangasinês", text: "Corinthians la", detail: "La = Vá", country: "Filipinas" },
    { id: 438, lang: "Kapampangan", text: "Corinthians lakad", detail: "Lakad = Vá", country: "Filipinas" },
    { id: 439, lang: "Maranao", text: "Corinthians lalakaw", detail: "Lalakaw = Vá", country: "Filipinas" },
    { id: 440, lang: "Maguindanao", text: "Corinthians lakaw", detail: "Lakaw = Vá", country: "Filipinas" },
    { id: 441, lang: "Tausug", text: "Corinthians layag", detail: "Layag = Vá", country: "Filipinas" },
    { id: 442, lang: "Cuyonon", text: "Corinthians sige", detail: "Sige = Força", country: "Filipinas" },
    { id: 443, lang: "Ivatan", text: "Corinthians uli", detail: "Uli = Vá", country: "Filipinas" },
    { id: 444, lang: "Yogad", text: "Corinthians yali", detail: "Yali = Vá", country: "Filipinas" },
    { id: 445, lang: "Bontoc", text: "Corinthians umey", detail: "Umey = Vá", country: "Filipinas" },
    { id: 446, lang: "Kankanaey", text: "Corinthians umey", detail: "Umey = Vá", country: "Filipinas" },
    { id: 447, lang: "Ifugao", text: "Corinthians umey", detail: "Umey = Vá", country: "Filipinas" },
    { id: 448, lang: "Gaddang", text: "Corinthians uma", detail: "Uma = Vá", country: "Filipinas" },
    { id: 449, lang: "Itawis", text: "Corinthians umali", detail: "Umali = Vá", country: "Filipinas" },
    { id: 450, lang: "Masbateño", text: "Corinthians lakat", detail: "Lakat = Vá", country: "Filipinas" },
    { id: 451, lang: "Romblomanon", text: "Corinthians lakat", detail: "Lakat = Vá", country: "Filipinas" },
    { id: 452, lang: "Aklanon", text: "Corinthians sige", detail: "Sige = Força", country: "Filipinas" },
    { id: 453, lang: "Kinaray-a", text: "Corinthians mag-agto", detail: "Mag-agto = Vá", country: "Filipinas" },
    { id: 454, lang: "Surigaonon", text: "Corinthians dayon", detail: "Dayon = Vá", country: "Filipinas" },
    { id: 455, lang: "Butuanon", text: "Corinthians dayon", detail: "Dayon = Vá", country: "Filipinas" },
    { id: 456, lang: "Yakan", text: "Corinthians lakat", detail: "Lakat = Vá", country: "Filipinas" },
    { id: 457, lang: "Sama-Bajau", text: "Corinthians lakat", detail: "Lakat = Vá", country: "Malásia" },
    { id: 458, lang: "Chamorro", text: "Corinthians fa'tinas", detail: "Fa'tinas = Vá", country: "Guam" },
    { id: 459, lang: "Palauan", text: "Corinthians me", detail: "Me = Vá", country: "Palau" },
    { id: 460, lang: "Woleaiano", text: "Corinthians 'oli", detail: "'Oli = Vá", country: "Micronésia" },
    { id: 461, lang: "Caroliniano", text: "Corinthians 'oli", detail: "'Oli = Vá", country: "Micronésia" },
    { id: 462, lang: "Marshallês", text: "Corinthians 'e", detail: "'E = Vá", country: "Ilhas Marshall" },
    { id: 463, lang: "Kiribati", text: "Corinthians nako", detail: "Nako = Vá", country: "Kiribati" },
    { id: 464, lang: "Nauruan", text: "Corinthians nako", detail: "Nako = Vá", country: "Nauru" },
    { id: 465, lang: "Rotuman", text: "Corinthians lelea", detail: "Lelea = Vá", country: "Fiji" },
    { id: 466, lang: "Tokelauano", text: "Corinthians fano", detail: "Fano = Vá", country: "Tokelau" },
    { id: 467, lang: "Tuvaluano", text: "Corinthians fano", detail: "Fano = Vá", country: "Tuvalu" },
    { id: 468, lang: "Wallisian", text: "Corinthians alu", detail: "Alu = Vá", country: "Wallis e Futuna" },
    { id: 469, lang: "Futunan", text: "Corinthians alu", detail: "Alu = Vá", country: "Wallis e Futuna" },
    { id: 470, lang: "Niueano", text: "Corinthians fano", detail: "Fano = Vá", country: "Niue" },
    { id: 471, lang: "Maori", text: "Haere Corinthians!", detail: "Haere = Vá/Siga", country: "Nova Zelândia" },
    { id: 472, lang: "Rapa Nui", text: "Corinthians haere", detail: "Haere = Vá/Siga", country: "Chile" },
    { id: 473, lang: "Tahitiano", text: "Corinthians haere", detail: "Haere = Vá/Siga", country: "Polinésia Francesa" },
    { id: 474, lang: "Marquesano", text: "Corinthians haere", detail: "Haere = Vá/Siga", country: "Polinésia Francesa" },
    { id: 475, lang: "Tuamotuano", text: "Corinthians haere", detail: "Haere = Vá/Siga", country: "Polinésia Francesa" },
    { id: 476, lang: "Rarotongan", text: "Corinthians aere", detail: "Aere = Vá/Siga", country: "Ilhas Cook" },
    { id: 477, lang: "Samoano", text: "Corinthians alu", detail: "Alu = Vá", country: "Samoa" },
    { id: 478, lang: "Gilbertese", text: "Corinthians nako", detail: "Nako = Vá", country: "Kiribati" },
    { id: 479, lang: "Chuukese", text: "Corinthians 'oli", detail: "'Oli = Vá", country: "Micronésia" },
    { id: 480, lang: "Pohnpeiano", text: "Corinthians koh", detail: "Koh = Vá", country: "Micronésia" },
    { id: 481, lang: "Kosraean", text: "Corinthians koh", detail: "Koh = Vá", country: "Micronésia" },
    { id: 482, lang: "Yapese", text: "Corinthians yo", detail: "Yo = Vá", country: "Micronésia" },
    { id: 483, lang: "Nggela", text: "Corinthians lako", detail: "Lako = Vá", country: "Ilhas Salomão" },
    { id: 484, lang: "Kwaio", text: "Corinthians lako", detail: "Lako = Vá", country: "Ilhas Salomão" },
    { id: 485, lang: "Lau", text: "Corinthians lako", detail: "Lako = Vá", country: "Ilhas Salomão" },
    { id: 486, lang: "Areare", text: "Corinthians lako", detail: "Lako = Vá", country: "Ilhas Salomão" },
    { id: 487, lang: "Bugis", text: "Corinthians lao", detail: "Lao = Vá", country: "Indonésia" },
    { id: 488, lang: "Makasar", text: "Corinthians lao", detail: "Lao = Vá", country: "Indonésia" },
    { id: 489, lang: "Lampung", text: "Corinthians haga", detail: "Haga = Vá", country: "Indonésia" },
    { id: 490, lang: "Minangkabau", text: "Corinthians pai", detail: "Pai = Vá", country: "Indonésia" },
    { id: 491, lang: "Batak", text: "Corinthians lao", detail: "Lao = Vá", country: "Indonésia" },
    { id: 492, lang: "Sunda", text: "Corinthians indit", detail: "Indit = Vá", country: "Indonésia" },
    { id: 493, lang: "Rejang", text: "Corinthians be", detail: "Be = Vá", country: "Indonésia" },
    { id: 494, lang: "Gayo", text: "Corinthians ber", detail: "Ber = Vá", country: "Indonésia" },
    { id: 495, lang: "Sasak", text: "Corinthians lalo", detail: "Lalo = Vá", country: "Indonésia" },
    { id: 496, lang: "Manggarai", text: "Corinthians 'lo", detail: "'Lo = Vá", country: "Indonésia" },
    { id: 497, lang: "Ngaju", text: "Corinthians hagu", detail: "Hagu = Vá", country: "Indonésia" },
    { id: 498, lang: "Iban", text: "Corinthians be", detail: "Be = Vá", country: "Malásia" },
    { id: 499, lang: "Melanau", text: "Corinthians be", detail: "Be = Vá", country: "Malásia" },
    { id: 500, lang: "Kadazan-Dusun", text: "Corinthians bai", detail: "Bai = Vá", country: "Malásia" }
];

// --- 2. VERIFICAÇÃO DE DISPOSITIVO E GATE ---
function checkGate() {
    const width = window.innerWidth;
    const gate = document.getElementById('desktop-gate');
    const app = document.getElementById('app-container');
    const intro = document.getElementById('intro-overlay');

    if (width > 1024) {
        // Modo Desktop - Bloqueado
        gate.style.display = 'flex';
        app.style.display = 'none';
        intro.style.display = 'none'; 
        
        gsap.to("#gate-content", { duration: 1.5, opacity: 1, y: 0, ease: "power3.out", delay: 0.2 });
        gsap.from(".gate-shield", { duration: 2, scale: 0.8, rotationY: 360, repeat: -1, yoyo: true, ease: "sine.inOut" });
    } else {
        gate.style.display = 'none';
        
        if (!appInitialized) {
            startIntroSequence();
        }
    }
}

// --- 3. SEQUÊNCIA DE INTRODUÇÃO (CINEMÁTICA OTIMIZADA) ---
function startIntroSequence() {
    initThreeJS();

    const tl = gsap.timeline({
        onComplete: () => {
            gsap.to("#intro-overlay", { duration: 0.5, opacity: 0, onComplete: () => {
                document.getElementById('intro-overlay').style.display = 'none';
                initApp(); 
            }});
        }
    });

    const textStyle = { opacity: 0, scale: 0.9 };
    const textIn = { duration: 1, opacity: 1, scale: 1, ease: "power2.out" };
    const textOut = { duration: 0.5, opacity: 0, scale: 1.1, ease: "power2.in" };

    // Texto 1
    tl.fromTo("#intro-text-1", textStyle, { ...textIn, text: "A PAIXÃO NÃO TEM FRONTEIRAS" })
      .to("#intro-text-1", textOut, "+=1");

    // Texto 2
    tl.set("#intro-text-1", { text: "EM 500 IDIOMAS..." })
      .fromTo("#intro-text-1", textStyle, textIn)
      .to("#intro-text-1", textOut, "+=1");

    // Texto 3
    tl.set("#intro-text-1", { text: "UM SÓ GRITO." })
      .fromTo("#intro-text-1", textStyle, textIn)
      .to("#intro-text-1", textOut, "+=0.5");

    // CLÍMAX (Logo + Flash + Texto de Impacto)
    tl.addLabel("climax");
    
    // Flash
    tl.to("#flash-effect", { duration: 0.1, opacity: 1, ease: "expo.in" }, "climax");

    // Logo Surge
    tl.to("#intro-logo", { duration: 0.01, opacity: 1 }, "climax");
    tl.fromTo("#intro-logo", 
        { scale: 2, opacity: 0 }, 
        { duration: 1, scale: 1, opacity: 1, ease: "elastic.out(1, 0.5)" }, 
    "climax");

    // Impact Text
    tl.to("#final-impact", { duration: 0.01, opacity: 1 }, "climax");
    tl.fromTo("#final-impact",
        { scale: 2, opacity: 0 },
        { duration: 0.6, scale: 1, opacity: 1, ease: "power4.out" },
    "climax");

    // Fade out flash
    tl.to("#flash-effect", { duration: 1.5, opacity: 0 }, "climax+=0.1");

    // Digitação
    tl.call(() => {
        const impactSpan = document.getElementById('impact-text-span');
        const textToType = "VAI CORINTHIANS";
        let i = 0;
        impactSpan.innerText = "";
        
        function typeIntro() {
            if (i < textToType.length) {
                impactSpan.innerText += textToType.charAt(i);
                i++;
                setTimeout(typeIntro, 80); 
            }
        }
        typeIntro();
    }, null, "climax+=0.2");

    // Hold final
    tl.to({}, { duration: 2.5 });
}

// --- 4. INICIALIZAÇÃO DO APP ---
let appInitialized = false;

function initApp() {
    if (appInitialized) return;
    appInitialized = true;

    const app = document.getElementById('app-container');
    app.style.display = 'flex';
    
    gsap.to("#app-container", { duration: 1, opacity: 1 });

    initLanguageScroll();
}

// --- 5. THREE.JS ---
let scene, camera, renderer, particlesMesh;
let mouseX = 0, mouseY = 0;
let threeInitialized = false;

function initThreeJS() {
    if (threeInitialized) return;
    threeInitialized = true;

    const container = document.getElementById('canvas-container');
    
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.03);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800; 
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 40; 
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6
    });
    particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('touchmove', onDocumentTouchMove, { passive: false });

    animateThree();
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
}

function onDocumentTouchMove(event) {
    if (event.touches.length > 0) {
        mouseX = (event.touches[0].clientX - window.innerWidth / 2) * 0.002;
        mouseY = (event.touches[0].clientY - window.innerHeight / 2) * 0.002;
    }
}

function animateThree() {
    requestAnimationFrame(animateThree);

    if(particlesMesh) {
        particlesMesh.rotation.y += 0.0005;
        particlesMesh.rotation.x += 0.0002;
    }

    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

// --- 6. LÓGICA DE IDIOMAS (SCROLL INFINITO) ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function typeWriter(element, text, callback) {
    let i = 0;
    element.textContent = ""; 
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, Math.random() * 30 + 30); 
        } else {
            if (callback) callback();
        }
    }
    type();
}

function initLanguageScroll() {
    const track = document.getElementById('shout-track');
    
    const shuffled = shuffleArray([...translations]);
    const fullList = [...shuffled, ...shuffled]; // Loop visual

    fullList.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'shout-item';
        
        div.innerHTML = `
            <div style="display:inline-block; min-height: 1.2em;">
                <span class="shout-phrase" data-text="${item.text}"></span><span class="cursor-blink"></span>
            </div>
            <div class="lang-details">
                <span class="lang-country">${item.country}</span>
                <span class="lang-name">${item.lang}</span>
                <span class="lang-pronunciation">${item.detail}</span>
            </div>
        `;
        div.dataset.status = 'waiting';
        track.appendChild(div);
    });

    const totalHeight = track.scrollHeight;
    
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(track, {
        y: -(totalHeight / 2), 
        duration: 1500, // Mais lento para apreciação
        ease: "none"
    });

    setInterval(() => {
        const center = window.innerHeight / 2;
        const items = document.querySelectorAll('.shout-item');
        
        items.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elCenter = rect.top + rect.height / 2;
            
            // Área de ativação aumentada para melhor UX móvel
            const isInCenter = Math.abs(center - elCenter) < 120;
            const isBelow = rect.top > (window.innerHeight + 50); 

            const textEl = el.querySelector('.shout-phrase');
            const cursor = el.querySelector('.cursor-blink');
            const fullText = textEl.dataset.text;

            if (isInCenter) {
                el.classList.add('active');
                if (el.dataset.status === 'waiting') {
                    el.dataset.status = 'typing';
                    if(cursor) cursor.style.display = 'inline-block';
                    
                    typeWriter(textEl, fullText, () => {
                        el.dataset.status = 'typed';
                        if(cursor) cursor.style.display = 'none';
                    });
                }
            } else {
                el.classList.remove('active');
                
                if (isBelow) {
                        if (el.dataset.status !== 'waiting') {
                            textEl.textContent = "";
                            el.dataset.status = 'waiting';
                            if(cursor) cursor.style.display = 'none';
                        }
                }
            }
        });
    }, 50); 
}

window.addEventListener('resize', () => {
    checkGate();
    if (renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// INÍCIO
checkGate();
