//【変換表】 ひらがな⇔ローマ字
const convtables = [
	{ // 3文字
		"っきゃ": "kkya",
		"っきぃ": "kkyi",
		"っきゅ": "kkyu",
		"っきぇ": "kkye",
		"っきょ": "kkyo",
		"っぎゃ": "ggya",
		"っぎぃ": "ggyi",
		"っぎゅ": "ggyu",
		"っぎぇ": "ggye",
		"っぎょ": "ggyo",

		"っしゃ": "ssha",
		"っしぃ": "ssyi",
		"っしゅ": "sshu",
		"っしぇ": "sshe",
		"っしょ": "ssho",
		"っじゃ": "jja",
		"っじぃ": "jjyi",
		"っじゅ": "jju",
		"っじぇ": "jje",
		"っじょ": "jjo",

		"っちゃ": "tcha",
		"っちぃ": "ttyi",
		"っちゅ": "tchu",
		"っちぇ": "tche",
		"っちょ": "tcho",
		"っぢゃ": "ddya",
		"っぢぃ": "ddyi",
		"っぢゅ": "ddyu",
		"っぢぇ": "ddye",
		"っぢょ": "ddyo",

		"っひゃ": "hhya",
		"っひい": "hhyi",
		"っひゅ": "hhyu",
		"っひぇ": "hhye",
		"っひょ": "hhyo",
		"っびゃ": "bbya",
		"っびぃ": "bbyi",
		"っびゅ": "bbyu",
		"っびぇ": "bbye",
		"っびょ": "bbyo",
		"っぴゃ": "ppya",
		"っぴぃ": "ppyi",
		"っぴゅ": "ppyu",
		"っぴぇ": "ppye",
		"っぴょ": "ppyo",

		"っふぁ": "ffa",
		"っふぃ": "ffi",
		"っふぇ": "ffe",
		"っふぉ": "ffo",

		"っみゃ": "mmya",
		"っみぃ": "mmyi",
		"っみゅ": "mmyu",
		"っみぇ": "mmye",
		"っみょ": "mmyo",

		"っりゃ": "rrya",
		"っりぃ": "rryi",
		"っりゅ": "rryu",
		"っりぇ": "rrye",
		"っりょ": "rryo",
	},
	{ // 2文字
		// 拗音
		"きゃ": "kya",
		"きぃ": "kyi",
		"きゅ": "kyu",
		"きぇ": "kye",
		"きょ": "kyo",
		"ぎゃ": "gya",
		"ぎぃ": "gyi",
		"ぎゅ": "gyu",
		"ぎぇ": "gye",
		"ぎょ": "gyo",

		"しゃ": "sha",
		"しぃ": "syi",
		"しゅ": "shu",
		"しぇ": "she",
		"しょ": "sho",
		"じゃ": "ja",
		"じぃ": "zyi",
		"じゅ": "ju",
		"じぇ": "je",
		"じょ": "jo",

		"ちゃ": "cha",
		"ちぃ": "tyi",
		"ちゅ": "chu",
		"ちぇ": "che",
		"ちょ": "cho",
		"ぢゃ": "dya",
		"ぢぃ": "dyi",
		"ぢゅ": "dyu",
		"ぢぇ": "dye",
		"ぢょ": "dyo",

		"てゃ": "tha",
		"てぃ": "thi",
		"てゅ": "thu",
		"てぇ": "the",
		"てょ": "tho",

		"にゃ": "nya",
		"にぃ": "nyi",
		"にゅ": "nyu",
		"にぇ": "nye",
		"にょ": "nyo",

		"ひゃ": "hya",
		"ひぃ": "hyi",
		"ひゅ": "hyu",
		"ひぇ": "hye",
		"ひょ": "hyo",
		"びゃ": "bya",
		"びぃ": "byi",
		"びゅ": "byu",
		"びぇ": "bye",
		"びょ": "byo",
		"ぴゃ": "pya",
		"ぴぃ": "pyi",
		"ぴゅ": "pyu",
		"ぴぇ": "pye",
		"ぴょ": "pyo",

		"みゃ": "mya",
		"みぃ": "myi",
		"みゅ": "myu",
		"みぇ": "mye",
		"みょ": "myo",

		"りゃ": "rya",
		"りぃ": "ryi",
		"りゅ": "ryu",
		"りぇ": "rye",
		"りょ": "ryo",

		"うぃ": "wi",
		"うぇ": "we",

		"くぁ": "kwa",
		"くぃ": "kwi",
		"くぅ": "kwu",
		"くぇ": "kwe",
		"くぉ": "kwo",
		"ぐぁ": "gwa",
		"ぐぃ": "gwi",
		"ぐぅ": "gwu",
		"ぐぇ": "gwe",
		"ぐぉ": "gwo",

		"とぁ": "twa",
		"とぃ": "twi",
		"とぅ": "twu",
		"とぇ": "twe",
		"とぉ": "two",
		"どぁ": "dwa",
		"どぃ": "dwi",
		"どぅ": "dwu",
		"どぇ": "dwe",
		"どぉ": "dwo",

		"ふぁ": "fa",
		"ふぃ": "fi",
		"ふぇ": "fe",
		"ふぉ": "fo",

		// 促音
		"っか": "kka",
		"っき": "kki",
		"っく": "kku",
		"っけ": "kke",
		"っこ": "kko",
		"っが": "gga",
		"っぎ": "ggi",
		"っぐ": "ggu",
		"っげ": "gge",
		"っご": "ggo",

		"っさ": "ssa",
		"っし": "sshi",
		"っす": "ssu",
		"っせ": "sse",
		"っそ": "sso",
		"っざ": "zza",
		"っじ": "jji",
		"っず": "zzu",
		"っぜ": "zze",
		"っぞ": "zzo",

		"った": "tta",
		"っち": "tchi",
		"っつ": "ttsu",
		"って": "tte",
		"っと": "tto",
		"っだ": "dda",
		"っぢ": "ddi",
		"っづ": "ddu",
		"っで": "dde",
		"っど": "ddo",

		"っは": "hha",
		"っひ": "hhi",
		"っふ": "ffu",
		"っへ": "hhe",
		"っほ": "hho",
		"っば": "bba",
		"っび": "bbi",
		"っぶ": "bbu",
		"っべ": "bbe",
		"っぼ": "bbo",
		"っぱ": "ppa",
		"っぴ": "ppi",
		"っぷ": "ppu",
		"っぺ": "ppe",
		"っぽ": "ppo",

		"っま": "mma",
		"っみ": "mmi",
		"っむ": "mmu",
		"っめ": "mme",
		"っも": "mmo",

		"っや": "yya",
		"っゆ": "yyu",
		"っよ": "yyo",

		"っら": "rra",
		"っり": "rri",
		"っる": "rru",
		"っれ": "rre",
		"っろ": "rro",

		"っわ": "wwa",
		"っゐ": "wwi",
		"っゑ": "wwe",
		"っを": "wwo",
	},
	{ // 1文字
		"あ": "a",
		"い": "i",
		"う": "u",
		"え": "e",
		"お": "o",
		"ぁ": "xa",
		"ぃ": "xi",
		"ぅ": "xu",
		"ぇ": "xe",
		"ぉ": "xo",

		"か": "ka",
		"き": "ki",
		"く": "ku",
		"け": "ke",
		"こ": "ko",
		"が": "ga",
		"ぎ": "gi",
		"ぐ": "gu",
		"げ": "ge",
		"ご": "go",

		"さ": "sa",
		"し": "shi",
		"す": "su",
		"せ": "se",
		"そ": "so",
		"ざ": "za",
		"じ": "ji",
		"ず": "zu",
		"ぜ": "ze",
		"ぞ": "zo",

		"た": "ta",
		"ち": "chi",
		"つ": "tsu",
		"て": "te",
		"と": "to",
		"っ": "xtsu",
		"だ": "da",
		"ぢ": "di",
		"づ": "du",
		"で": "de",
		"ど": "do",

		"な": "na",
		"に": "ni",
		"ぬ": "nu",
		"ね": "ne",
		"の": "no",

		"は": "ha",
		"ひ": "hi",
		"ふ": "fu",
		"へ": "he",
		"ほ": "ho",
		"ば": "ba",
		"び": "bi",
		"ぶ": "bu",
		"べ": "be",
		"ぼ": "bo",
		"ぱ": "pa",
		"ぴ": "pi",
		"ぷ": "pu",
		"ぺ": "pe",
		"ぽ": "po",

		"ま": "ma",
		"み": "mi",
		"む": "mu",
		"め": "me",
		"も": "mo",

		"や": "ya",
		"ゆ": "yu",
		"よ": "yo",
		"ゃ": "xya",
		"ゅ": "xyu",
		"ょ": "xyo",

		"ら": "ra",
		"り": "ri",
		"る": "ru",
		"れ": "re",
		"ろ": "ro",

		"わ": "wa",
		"ゐ": "wi",
		"ゑ": "we",
		"を": "wo",
		"ゎ": "xwa",

		"ん": "n",

		"ー": "-",
		"、": ",",
		"。": ".",
	},
];

/**
 * ひらがな→ローマ字変換
 * @param {string} hiragana ひらがな
 * @return {string} ローマ字
 */
function hiragana2romaji(hiragana)
{
	let romaji = "";
	let index = 0;
	const length = hiragana.length;

convert:
	while(index < length)
	{
		// 文字数の多いものから変換
		for(const convtable of convtables)
		{
			const partLength = Object.keys(convtable)[0].length;
			const partString = hiragana.substr(index, partLength);
			if(!convtable.hasOwnProperty(partString))
			{
				continue;
			}

			// 変換テーブルと一致したらローマ字変換
			romaji += convtable[partString];
			index += partLength;
			continue convert;
		}

		// 一致しなければ1文字取り出す
		romaji += hiragana[index++];
	}
	return romaji;
}


//【一覧】言葉
const wordObject = [
    { word: "ありがとう", romaji: "arigatou", vowels: "aiou" },
    { word: "さくら", romaji: "sakura", vowels: "aua" },
    { word: "こんにちは", romaji: "konnichiwa", vowels: "oiia" },
    { word: "ねこ", romaji: "neko", vowels: "eo" },
    { word: "おはよう", romaji: "ohayou", vowels: "oaou" },
    { word: "すみません", romaji: "sumimasen", vowels: "uiae" },
    { word: "よろしく", romaji: "yoroshiku", vowels: "ooi" },
    { word: "いただきます", romaji: "itadakimasu", vowels: "iaaiu" },
    { word: "ごめんなさい", romaji: "gomen nasai", vowels: "oeaa" },
    { word: "さくらんぼ", romaji: "sakuranbo", vowels: "aauo" },
    { word: "いぬ", romaji: "inu", vowels: "iu" },
    { word: "ねずみ", romaji: "nezumi", vowels: "eui" },
    { word: "あめ", romaji: "ame", vowels: "ae" },
    { word: "かい", romaji: "kai", vowels: "ai" },
    { word: "うみ", romaji: "umi", vowels: "ui" },
    { word: "ひこうき", romaji: "hikouki", vowels: "iooi" },
    { word: "こい", romaji: "koi", vowels: "oi" },
    { word: "たまご", romaji: "tamago", vowels: "aao" },
    { word: "みかん", romaji: "mikan", vowels: "ia" },
    { word: "りんご", romaji: "ringo", vowels: "io" },
    { word: "ぶどう", romaji: "budou", vowels: "uoo" },
    { word: "かぼちゃ", romaji: "kabocha", vowels: "aoa" },
    { word: "たけ", romaji: "take", vowels: "ae" },
    { word: "はな", romaji: "hana", vowels: "aa" },
    { word: "ねこ", romaji: "neko", vowels: "eo" },
    { word: "いちご", romaji: "ichigo", vowels: "ioo" },
    { word: "とうもろこし", romaji: "toumorokoshi", vowels: "ouoo" },
    { word: "おとうさん", romaji: "otousan", vowels: "ooa" },
    { word: "おかあさん", romaji: "okaasan", vowels: "oaa" },
    { word: "かんがえる", romaji: "kangaeru", vowels: "aaeu" },
    { word: "あんまり", romaji: "anmari", vowels: "aai" },
    { word: "かき", romaji: "kaki", vowels: "ai" },
    { word: "しゅくだい", romaji: "shukudai", vowels: "uai" },
    { word: "かんじ", romaji: "kanji", vowels: "ai" },
    { word: "えんぴつ", romaji: "enpitsu", vowels: "ei" },
    { word: "ほん", romaji: "hon", vowels: "o" },
    { word: "あか", romaji: "aka", vowels: "aa" },
    { word: "まんが", romaji: "manga", vowels: "aa" },
    { word: "とうふ", romaji: "toufu", vowels: "ouu" },
    { word: "たけやま", romaji: "takeyama", vowels: "aeea" },
    { word: "おにぎり", romaji: "onigiri", vowels: "oii" },
    { word: "たまねぎ", romaji: "tamanegi", vowels: "aaei" },
    { word: "しゅうり", romaji: "shuuri", vowels: "uui" },
    { word: "ちず", romaji: "chizu", vowels: "iu" },
    { word: "すいか", romaji: "suika", vowels: "uia" },
    { word: "ひよこ", romaji: "hiyoko", vowels: "ioo" },
    { word: "かんたん", romaji: "kantan", vowels: "aa" },
    { word: "あんこ", romaji: "anko", vowels: "ao" },
    { word: "ふろ", romaji: "furo", vowels: "uo" },
    { word: "ふうせん", romaji: "fuusen", vowels: "uue" },
    { word: "えき", romaji: "eki", vowels: "ei" },
    { word: "すいとう", romaji: "suitou", vowels: "uio" },
    { word: "あさ", romaji: "asa", vowels: "aa" },
    { word: "さむい", romaji: "samui", vowels: "aui" },
    { word: "きんぎょ", romaji: "kingyo", vowels: "iio" },
    { word: "にんじん", romaji: "ninjin", vowels: "ii" },
    { word: "きつね", romaji: "kitsune", vowels: "iu" },
    { word: "かえる", romaji: "kaeru", vowels: "aeu" },
    { word: "はし", romaji: "hashi", vowels: "ai" },
    { word: "みず", romaji: "mizu", vowels: "iu" },
    { word: "つき", romaji: "tsuki", vowels: "ui" },
    { word: "とり", romaji: "tori", vowels: "oi" },
    { word: "ひかり", romaji: "hikari", vowels: "iai" },
    { word: "きれい", romaji: "kirei", vowels: "ie" },
    { word: "けいざい", romaji: "keizai", vowels: "eai" },
    { word: "きいろ", romaji: "kiiro", vowels: "iio" },
    { word: "やま", romaji: "yama", vowels: "aa" },
    { word: "いえ", romaji: "ie", vowels: "ie" },
    { word: "ふくろ", romaji: "fukuro", vowels: "uoo" },
    { word: "ちょうちょう", romaji: "chouchou", vowels: "ooou" },
    { word: "ゆうえんち", romaji: "yuuenchi", vowels: "ueei" },
    { word: "せんせい", romaji: "sensei", vowels: "eei" },
    { word: "とけい", romaji: "tokei", vowels: "oei" },
    { word: "えいが", romaji: "eiga", vowels: "ei" },
    { word: "しんぶん", romaji: "shinbun", vowels: "iu" },
    { word: "つばき", romaji: "tsubaki", vowels: "uai" },
    { word: "こうえん", romaji: "kouen", vowels: "oe" },
    { word: "ひらがな", romaji: "hiragana", vowels: "iaaa" },
    { word: "カメラ", romaji: "kamera", vowels: "ae" },
    { word: "カバン", romaji: "kaban", vowels: "aa" },
    { word: "シャツ", romaji: "shatsu", vowels: "a" },
    { word: "スプーン", romaji: "supuun", vowels: "uu" },
    { word: "スカート", romaji: "sukaato", vowels: "aa" },
    { word: "トマト", romaji: "tomato", vowels: "oa" },
    { word: "バナナ", romaji: "banana", vowels: "aa" },
    { word: "メロン", romaji: "meron", vowels: "eo" },
    { word: "ゼリー", romaji: "zeri", vowels: "ei" },
    { word: "イチゴ", romaji: "ichigo", vowels: "iio" },
    { word: "ハンバーガー", romaji: "hanbaagaa", vowels: "aa" },
    { word: "ポテト", romaji: "poteto", vowels: "oeo" }
];


// 検索ボタンのクリックイベント local strage へひらがなとローマ字をセット
document.getElementById("search").addEventListener('click', function() {
    const key = document.getElementById("key").value; 
    const vowels = hiragana2romaji(key).replace(/[^aeiou]/gi,'');; // aiueo以外の文字を大文字小文字問わず空白にする
    console.log(vowels);
    const value = [hiragana2romaji(key), vowels];
    localStorage.setItem(key, JSON.stringify(value)); // 配列をJSON文字列に変換して保存

    // ローカルストレージからインデックス1の値を取得
    const index1Value = localStorage.getItem(localStorage.key(1));

    // wordObjectから一致するwordを探す
    const matchingWords = wordObject
        .filter(item => item.vowels === index1Value)
        .map(item => item.word);

    // 結果を返す
    console.log(matchingWords); // 一致するwordの配列を表示
  
});






