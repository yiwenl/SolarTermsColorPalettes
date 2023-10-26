const colorPalettes = [
  {
    name: "立春",
    solarTerm: "",
    colors: [
      { name: "黃白遊", value: [255, 247, 153] },
      { name: "松花", value: [255, 238, 111] },
      { name: "緗葉", value: [236, 212, 82] },
      { name: "蒼黃", value: [182, 160, 20] },
    ],
  },
  {
    name: "東風解凍",
    solarTerm: "",
    colors: [
      { name: "天縹", value: [213, 235, 225] },
      { name: "滄浪", value: [177, 213, 200] },
      { name: "蒼筤", value: [153, 188, 172] },
      { name: "縹碧", value: [128, 164, 146] },
    ],
  },
  {
    name: "蟄蟲始振",
    solarTerm: "",
    colors: [
      { name: "流黃", value: [139, 112, 66] },
      { name: "栗殼", value: [119, 80, 57] },
      { name: "龍戰", value: [95, 67, 33] },
      { name: "青驪", value: [66, 37, 23] },
    ],
  },
  {
    name: "魚陟負冰",
    solarTerm: "",
    colors: [
      { name: "海天霞", value: [243, 166, 148] },
      { name: "縉雲", value: [238, 121, 89] },
      { name: "纁黃", value: [186, 81, 64] },
      { name: "珊瑚赫", value: [193, 44, 31] },
    ],
  },
  {
    name: "雨水",
    solarTerm: "",
    colors: [
      { name: "盈盈", value: [249, 211, 227] },
      { name: "水紅", value: [236, 176, 193] },
      { name: "蘇梅", value: [221, 118, 148] },
      { name: "紫莖屏風", value: [167, 98, 131] },
    ],
  },
  {
    name: "獺祭魚",
    solarTerm: "",
    colors: [
      { name: "葭灰", value: [190, 177, 170] },
      { name: "黃埃", value: [180, 146, 115] },
      { name: "老僧衣", value: [164, 95, 68] },
      { name: "玄天", value: [107, 84, 88] },
    ],
  },
  {
    name: "候雁北",
    solarTerm: "",
    colors: [
      { name: "黃河琉璃", value: [229, 168, 75] },
      { name: "庫金", value: [225, 138, 59] },
      { name: "縕韍", value: [152, 79, 49] },
      { name: "紫甌", value: [124, 70, 30] },
    ],
  },
  {
    name: "草木萌動",
    solarTerm: "",
    colors: [
      { name: "歐碧", value: [192, 214, 149] },
      { name: "春辰", value: [169, 190, 123] },
      { name: "碧山", value: [119, 150, 73] },
      { name: "青青", value: [79, 111, 70] },
    ],
  },
  {
    name: "驚蟄",
    solarTerm: "",
    colors: [
      { name: "赤緹", value: [186, 91, 73] },
      { name: "朱草", value: [166, 64, 54] },
      { name: "綪茷", value: [158, 42, 34] },
      { name: "順聖", value: [124, 25, 30] },
    ],
  },
  {
    name: "桃始華",
    solarTerm: "",
    colors: [
      { name: "桃夭", value: [246, 190, 200] },
      { name: "楊妃", value: [240, 145, 160] },
      { name: "長春", value: [220, 107, 130] },
      { name: "牙緋", value: [195, 92, 93] },
    ],
  },
  {
    name: "倉庚鳴",
    solarTerm: "",
    colors: [
      { name: "黃栗留", value: [254, 220, 94] },
      { name: "梔子", value: [250, 192, 61] },
      { name: "黃不老", value: [219, 155, 52] },
      { name: "柘黃", value: [198, 121, 21] },
    ],
  },
  {
    name: "鷹化為鳩",
    solarTerm: "",
    colors: [
      { name: "青鸞", value: [154, 167, 177] },
      { name: "菘監", value: [107, 121, 142] },
      { name: "青黛", value: [69, 70, 94] },
      { name: "紺蝶", value: [44, 47, 59] },
    ],
  },
  {
    name: "春分",
    solarTerm: "",
    colors: [
      { name: "皦玉", value: [235, 238, 232] },
      { name: "吉量", value: [235, 237, 223] },
      { name: "韶粉", value: [224, 224, 208] },
      { name: "霜地", value: [199, 198, 182] },
    ],
  },
  {
    name: "玄鳥至",
    solarTerm: "",
    colors: [
      { name: "夏籥", value: [210, 175, 157] },
      { name: "紫磨金", value: [188, 131, 107] },
      { name: "檀色", value: [178, 109, 93] },
      { name: "赭羅", value: [154, 102, 85] },
    ],
  },
  {
    name: "雷乃發聲",
    solarTerm: "",
    colors: [
      { name: "黃丹", value: [234, 85, 20] },
      { name: "洛神珠", value: [210, 57, 24] },
      { name: "丹雘", value: [200, 22, 29] },
      { name: "水華朱", value: [167, 33, 38] },
    ],
  },
  {
    name: "始電",
    solarTerm: "",
    colors: [
      { name: "青冥", value: [50, 113, 174] },
      { name: "青雘", value: [0, 113, 117] },
      { name: "青緺", value: [40, 72, 82] },
      { name: "騏驎", value: [18, 38, 79] },
    ],
  },
  {
    name: "清明",
    solarTerm: "",
    colors: [
      { name: "紫蒲", value: [166, 85, 157] },
      { name: "赬紫", value: [138, 24, 116] },
      { name: "齊紫", value: [108, 33, 109] },
      { name: "凝夜紫", value: [66, 34, 86] },
    ],
  },
  {
    name: "桐始華",
    solarTerm: "",
    colors: [
      { name: "凍縹", value: [190, 194, 179] },
      { name: "春碧", value: [157, 157, 130] },
      { name: "執大象", value: [145, 145, 119] },
      { name: "苔古", value: [121, 131, 108] },
    ],
  },
  {
    name: "田鼠化為鴑",
    solarTerm: "",
    colors: [
      { name: "香爐紫煙", value: [211, 204, 214] },
      { name: "紫菂", value: [155, 142, 169] },
      { name: "拂紫綿", value: [126, 82, 127] },
      { name: "三公子", value: [102, 61, 116] },
    ],
  },
  {
    name: "虹始見",
    solarTerm: "",
    colors: [
      { name: "琅玕紫", value: [203, 92, 131] },
      { name: "紅躑躅", value: [184, 53, 112] },
      { name: "魏紅", value: [167, 55, 102] },
      { name: "魏紫", value: [144, 55, 84] },
    ],
  },
  {
    name: "穀雨",
    solarTerm: "",
    colors: [
      { name: "昌榮", value: [220, 199, 225] },
      { name: "紫薄汗", value: [187, 161, 203] },
      { name: "茈藐", value: [166, 126, 183] },
      { name: "紫紶", value: [125, 82, 132] },
    ],
  },
  {
    name: "萍始生",
    solarTerm: "",
    colors: [
      { name: "蒼葭", value: [168, 191, 143] },
      { name: "庭蕪綠", value: [104, 148, 92] },
      { name: "翠微", value: [76, 128, 69] },
      { name: "翠虯", value: [68, 106, 55] },
    ],
  },
  {
    name: "鳴鳩拂其羽",
    solarTerm: "",
    colors: [
      { name: "碧落", value: [174, 208, 238] },
      { name: "挼藍", value: [110, 155, 197] },
      { name: "青雀頭黛", value: [53, 78, 107] },
      { name: "螺子黛", value: [19, 57, 62] },
    ],
  },
  {
    name: "戴勝降於桑",
    solarTerm: "",
    colors: [
      { name: "露褐", value: [189, 130, 83] },
      { name: "檀褐", value: [148, 86, 53] },
      { name: "緅絺", value: [128, 76, 46] },
      { name: "目童子", value: [91, 50, 34] },
    ],
  },
  {
    name: "",
    solarTerm: "立春",
    colors: [
      { name: "黃白遊", value: [255, 247, 155] },
      { name: "松花", value: [255, 238, 111] },
      { name: "緗葉", value: [236, 212, 82] },
      { name: "蒼黃", value: [182, 160, 20] },
    ],
  },
  {
    name: "",
    solarTerm: "立春",
    colors: [
      { name: "天縹", value: [213, 235, 225] },
      { name: "滄浪", value: [177, 213, 200] },
      { name: "蒼筤", value: [153, 188, 172] },
      { name: "縹碧", value: [128, 164, 146] },
    ],
  },
  {
    name: "",
    solarTerm: "立春",
    colors: [
      { name: "流黃", value: [139, 112, 66] },
      { name: "栗殼", value: [119, 80, 57] },
      { name: "龍戰", value: [95, 67, 33] },
      { name: "青驪", value: [66, 37, 23] },
    ],
  },
  {
    name: "",
    solarTerm: "立春",
    colors: [
      { name: "海天霞", value: [243, 166, 148] },
      { name: "縉雲", value: [238, 121, 89] },
      { name: "纁黃", value: [186, 81, 64] },
      { name: "珊瑚赫", value: [193, 44, 31] },
    ],
  },
  {
    name: "",
    solarTerm: "雨水",
    colors: [
      { name: "盈盈", value: [249, 211, 227] },
      { name: "水紅", value: [236, 176, 193] },
      { name: "蘇梅", value: [221, 118, 148] },
      { name: "紫莖屏風", value: [167, 98, 131] },
    ],
  },
  {
    name: "",
    solarTerm: "雨水",
    colors: [
      { name: "葭灰", value: [190, 177, 170] },
      { name: "黃埃", value: [180, 146, 115] },
      { name: "老僧衣", value: [164, 95, 68] },
      { name: "玄天", value: [107, 84, 88] },
    ],
  },
  {
    name: "",
    solarTerm: "雨水",
    colors: [
      { name: "黃河琉璃", value: [229, 168, 75] },
      { name: "庫金", value: [225, 138, 59] },
      { name: "縕韍", value: [152, 79, 49] },
      { name: "紫甌", value: [124, 70, 30] },
    ],
  },
  {
    name: "",
    solarTerm: "雨水",
    colors: [
      { name: "歐碧", value: [192, 214, 149] },
      { name: "春辰", value: [169, 190, 123] },
      { name: "碧山", value: [119, 150, 73] },
      { name: "青青", value: [79, 111, 70] },
    ],
  },
  {
    name: "",
    solarTerm: "驚蟄",
    colors: [
      { name: "赤緹", value: [186, 91, 73] },
      { name: "朱草", value: [166, 64, 54] },
      { name: "綪䒫", value: [158, 42, 34] },
      { name: "順聖", value: [124, 25, 30] },
    ],
  },
  {
    name: "",
    solarTerm: "驚蟄",
    colors: [
      { name: "桃夭", value: [246, 190, 200] },
      { name: "楊妃", value: [240, 145, 160] },
      { name: "長春", value: [220, 107, 130] },
      { name: "牙緋", value: [195, 92, 93] },
    ],
  },
  {
    name: "",
    solarTerm: "驚蟄",
    colors: [
      { name: "黃栗留", value: [254, 220, 94] },
      { name: "梔子", value: [250, 192, 61] },
      { name: "黃不老", value: [219, 155, 52] },
      { name: "柘黃", value: [198, 121, 21] },
    ],
  },
  {
    name: "",
    solarTerm: "驚蟄",
    colors: [
      { name: "青鸞", value: [154, 167, 177] },
      { name: "菘藍", value: [107, 121, 142] },
      { name: "青黛", value: [69, 70, 94] },
      { name: "紺蝶", value: [44, 47, 59] },
    ],
  },
  {
    name: "",
    solarTerm: "春分",
    colors: [
      { name: "皦玉", value: [235, 238, 232] },
      { name: "吉量", value: [235, 237, 223] },
      { name: "韶粉", value: [224, 224, 208] },
      { name: "霜地", value: [199, 198, 182] },
    ],
  },
  {
    name: "",
    solarTerm: "春分",
    colors: [
      { name: "夏籥", value: [210, 175, 157] },
      { name: "紫磨金", value: [188, 131, 107] },
      { name: "檀色", value: [178, 109, 93] },
      { name: "赭羅", value: [154, 102, 85] },
    ],
  },
  {
    name: "",
    solarTerm: "春分",
    colors: [
      { name: "黃丹", value: [234, 85, 20] },
      { name: "洛神珠", value: [210, 57, 24] },
      { name: "丹雘", value: [200, 22, 29] },
      { name: "水華朱", value: [167, 33, 38] },
    ],
  },
  {
    name: "",
    solarTerm: "春分",
    colors: [
      { name: "青冥", value: [50, 113, 174] },
      { name: "青雘", value: [0, 113, 117] },
      { name: "青縞", value: [40, 72, 82] },
      { name: "騏驎", value: [18, 38, 79] },
    ],
  },
  {
    name: "",
    solarTerm: "清明",
    colors: [
      { name: "紫蒲", value: [166, 85, 157] },
      { name: "赬紫", value: [138, 24, 116] },
      { name: "齊紫", value: [108, 33, 109] },
      { name: "凝夜紫", value: [66, 34, 86] },
    ],
  },
  {
    name: "",
    solarTerm: "清明",
    colors: [
      { name: "凍縹", value: [190, 194, 179] },
      { name: "春碧", value: [157, 157, 130] },
      { name: "執大象", value: [145, 145, 119] },
      { name: "苔古", value: [121, 131, 108] },
    ],
  },
  {
    name: "",
    solarTerm: "清明",
    colors: [
      { name: "香爐紫煙", value: [211, 204, 214] },
      { name: "紫菂", value: [155, 142, 169] },
      { name: "拂紫綿", value: [126, 82, 127] },
      { name: "三公子", value: [102, 61, 116] },
    ],
  },
  {
    name: "",
    solarTerm: "清明",
    colors: [
      { name: "琅玕紫", value: [203, 92, 131] },
      { name: "紅躑躅", value: [184, 53, 112] },
      { name: "魏紅", value: [167, 55, 102] },
      { name: "魏紫", value: [144, 55, 84] },
    ],
  },
  {
    name: "",
    solarTerm: "穀雨",
    colors: [
      { name: "昌榮", value: [220, 199, 225] },
      { name: "紫薄汗", value: [187, 161, 203] },
      { name: "茈藐", value: [166, 126, 183] },
      { name: "紫紶", value: [125, 82, 132] },
    ],
  },
  {
    name: "",
    solarTerm: "穀雨",
    colors: [
      { name: "蒼葭", value: [168, 191, 143] },
      { name: "庭蕪綠", value: [104, 148, 92] },
      { name: "翠微", value: [76, 128, 69] },
      { name: "翠虯", value: [68, 106, 55] },
    ],
  },
  {
    name: "",
    solarTerm: "穀雨",
    colors: [
      { name: "碧落", value: [174, 208, 238] },
      { name: "挼藍", value: [110, 155, 197] },
      { name: "青雀頭黛", value: [53, 78, 107] },
      { name: "螺子黛", value: [19, 57, 62] },
    ],
  },
  {
    name: "",
    solarTerm: "穀雨",
    colors: [
      { name: "露褐", value: [189, 130, 83] },
      { name: "檀褐", value: [148, 86, 53] },
      { name: "緅絺", value: [128, 76, 46] },
      { name: "目童子", value: [91, 50, 34] },
    ],
  },
];

export default colorPalettes;

export const getColorPalette = () => {
  console.log("get color palette");
};

export const getRandomPalette = () => {
  console.log(colorPalettes.length);
  return colorPalettes[colorPalettes.length - 1];
  return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
};
