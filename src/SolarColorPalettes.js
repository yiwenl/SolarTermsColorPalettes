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
  {
    name: "",
    solarTerm: "立夏",
    colors: [
      { name: "", value: [195, 217, 78] },
      { name: "", value: [183, 211, 50] },
      { name: "", value: [158, 188, 25] },
      { name: "", value: [132, 167, 41] },
    ],
  },
  {
    name: "",
    solarTerm: "立夏",
    colors: [
      { name: "", value: [223, 206, 180] },
      { name: "", value: [191, 167, 130] },
      { name: "", value: [180, 155, 127] },
      { name: "", value: [148, 120, 79] },
    ],
  },
  {
    name: "",
    solarTerm: "立夏",
    colors: [
      { name: "", value: [190, 194, 188] },
      { name: "", value: [168, 161, 156] },
      { name: "", value: [146, 137, 123] },
      { name: "", value: [112, 105, 93] },
    ],
  },
  {
    name: "",
    solarTerm: "立夏",
    colors: [
      { name: "", value: [242, 154, 118] },
      { name: "", value: [237, 109, 61] },
      { name: "", value: [233, 72, 41] },
      { name: "", value: [230, 0, 18] },
    ],
  },
  {
    name: "",
    solarTerm: "小滿",
    colors: [
      { name: "", value: [226, 162, 172] },
      { name: "", value: [221, 107, 123] },
      { name: "", value: [194, 81, 96] },
      { name: "", value: [184, 26, 53] },
    ],
  },
  {
    name: "",
    solarTerm: "小滿",
    colors: [
      { name: "", value: [106, 141, 82] },
      { name: "", value: [93, 131, 81] },
      { name: "", value: [79, 121, 74] },
      { name: "", value: [42, 110, 63] },
    ],
  },
  {
    name: "",
    solarTerm: "小滿",
    colors: [
      { name: "", value: [212, 201, 170] },
      { name: "", value: [180, 163, 121] },
      { name: "", value: [158, 131, 88] },
      { name: "", value: [129, 102, 59] },
    ],
  },
  {
    name: "",
    solarTerm: "小滿",
    colors: [
      { name: "", value: [242, 200, 103] },
      { name: "", value: [211, 162, 55] },
      { name: "", value: [208, 134, 53] },
      { name: "", value: [159, 96, 39] },
    ],
  },
  {
    name: "",
    solarTerm: "芒種",
    colors: [
      { name: "", value: [213, 209, 174] },
      { name: "", value: [191, 192, 150] },
      { name: "", value: [169, 168, 134] },
      { name: "", value: [146, 144, 93] },
    ],
  },
  {
    name: "",
    solarTerm: "芒種",
    colors: [
      { name: "", value: [179, 181, 156] },
      { name: "", value: [168, 176, 146] },
      { name: "", value: [169, 167, 115] },
      { name: "", value: [134, 140, 78] },
    ],
  },
  {
    name: "",
    solarTerm: "芒種",
    colors: [
      { name: "", value: [221, 187, 153] },
      { name: "", value: [210, 163, 108] },
      { name: "", value: [190, 148, 87] },
      { name: "", value: [180, 136, 77] },
    ],
  },
  {
    name: "",
    solarTerm: "芒種",
    colors: [
      { name: "", value: [83, 81, 100] },
      { name: "", value: [69, 70, 89] },
      { name: "", value: [52, 48, 65] },
      { name: "", value: [30, 39, 50] },
    ],
  },
  {
    name: "",
    solarTerm: "夏至",
    colors: [
      { name: "", value: [203, 82, 62] },
      { name: "", value: [177, 59, 46] },
      { name: "", value: [149, 48, 46] },
      { name: "", value: [130, 35, 39] },
    ],
  },
  {
    name: "",
    solarTerm: "夏至",
    colors: [
      { name: "", value: [178, 182, 182] },
      { name: "", value: [167, 170, 161] },
      { name: "", value: [122, 123, 120] },
      { name: "", value: [104, 106, 103] },
    ],
  },
  {
    name: "",
    solarTerm: "夏至",
    colors: [
      { name: "", value: [240, 194, 162] },
      { name: "", value: [219, 156, 94] },
      { name: "", value: [217, 136, 61] },
      { name: "", value: [204, 93, 32] },
    ],
  },
  {
    name: "",
    solarTerm: "夏至",
    colors: [
      { name: "", value: [245, 243, 242] },
      { name: "", value: [234, 229, 227] },
      { name: "", value: [223, 224, 217] },
      { name: "", value: [212, 211, 202] },
    ],
  },
  {
    name: "",
    solarTerm: "小暑",
    colors: [
      { name: "", value: [245, 176, 135] },
      { name: "", value: [241, 143, 96] },
      { name: "", value: [239, 132, 93] },
      { name: "", value: [237, 109, 70] },
    ],
  },
  {
    name: "",
    solarTerm: "小暑",
    colors: [
      { name: "", value: [224, 223, 198] },
      { name: "", value: [191, 185, 156] },
      { name: "", value: [169, 159, 112] },
      { name: "", value: [135, 125, 82] },
    ],
  },
  {
    name: "",
    solarTerm: "小暑",
    colors: [
      { name: "", value: [149, 64, 36] },
      { name: "", value: [135, 52, 36] },
      { name: "", value: [102, 43, 31] },
      { name: "", value: [76, 30, 26] },
    ],
  },
  {
    name: "",
    solarTerm: "小暑",
    colors: [
      { name: "", value: [16, 104, 152] },
      { name: "", value: [18, 80, 123] },
      { name: "", value: [6, 67, 111] },
      { name: "", value: [0, 52, 69] },
    ],
  },
  {
    name: "",
    solarTerm: "大暑",
    colors: [
      { name: "", value: [227, 173, 185] },
      { name: "", value: [207, 146, 158] },
      { name: "", value: [178, 119, 119] },
      { name: "", value: [163, 95, 101] },
    ],
  },
  {
    name: "",
    solarTerm: "大暑",
    colors: [
      { name: "", value: [237, 241, 187] },
      { name: "", value: [227, 235, 152] },
      { name: "", value: [216, 222, 138] },
      { name: "", value: [205, 209, 113] },
    ],
  },
  {
    name: "",
    solarTerm: "大暑",
    colors: [
      { name: "", value: [212, 191, 137] },
      { name: "", value: [191, 166, 112] },
      { name: "", value: [170, 142, 89] },
      { name: "", value: [137, 109, 71] },
    ],
  },
  {
    name: "",
    solarTerm: "大暑",
    colors: [
      { name: "", value: [190, 210, 187] },
      { name: "", value: [155, 180, 150] },
      { name: "", value: [129, 163, 128] },
      { name: "", value: [105, 142, 106] },
    ],
  },
  {
    name: "",
    solarTerm: "立秋",
    colors: [
      { name: "", value: [136, 171, 218] },
      { name: "", value: [111, 148, 205] },
      { name: "", value: [89, 118, 186] },
      { name: "", value: [46, 89, 167] },
    ],
  },
  {
    name: "",
    solarTerm: "立秋",
    colors: [
      { name: "", value: [152, 182, 194] },
      { name: "", value: [127, 159, 175] },
      { name: "", value: [102, 143, 139] },
      { name: "", value: [84, 118, 137] },
    ],
  },
  {
    name: "",
    solarTerm: "立秋",
    colors: [
      { name: "", value: [239, 239, 239] },
      { name: "", value: [216, 209, 197] },
      { name: "", value: [198, 190, 177] },
      { name: "", value: [172, 159, 138] },
    ],
  },
  {
    name: "",
    solarTerm: "立秋",
    colors: [
      { name: "", value: [192, 208, 157] },
      { name: "", value: [147, 143, 76] },
      { name: "", value: [127, 117, 76] },
      { name: "", value: [89, 83, 51] },
    ],
  },
  {
    name: "",
    solarTerm: "處暑",
    colors: [
      { name: "", value: [240, 207, 227] },
      { name: "", value: [228, 184, 213] },
      { name: "", value: [206, 147, 192] },
      { name: "", value: [186, 121, 177] },
    ],
  },
  {
    name: "",
    solarTerm: "處暑",
    colors: [
      { name: "", value: [201, 207, 193] },
      { name: "", value: [168, 183, 140] },
      { name: "", value: [144, 160, 125] },
      { name: "", value: [108, 134, 80] },
    ],
  },
  {
    name: "",
    solarTerm: "處暑",
    colors: [
      { name: "", value: [162, 210, 226] },
      { name: "", value: [135, 192, 202] },
      { name: "", value: [90, 164, 174] },
      { name: "", value: [16, 139, 150] },
    ],
  },
  {
    name: "",
    solarTerm: "處暑",
    colors: [
      { name: "", value: [234, 216, 154] },
      { name: "", value: [213, 180, 92] },
      { name: "", value: [191, 156, 70] },
      { name: "", value: [170, 133, 52] },
    ],
  },
  {
    name: "",
    solarTerm: "白露",
    colors: [
      { name: "", value: [245, 242, 233] },
      { name: "", value: [234, 228, 209] },
      { name: "", value: [223, 214, 184] },
      { name: "", value: [213, 200, 160] },
    ],
  },
  {
    name: "",
    solarTerm: "白露",
    colors: [
      { name: "", value: [134, 144, 138] },
      { name: "", value: [107, 125, 115] },
      { name: "", value: [85, 95, 77] },
      { name: "", value: [69, 73, 61] },
    ],
  },
  {
    name: "",
    solarTerm: "白露",
    colors: [
      { name: "", value: [211, 203, 197] },
      { name: "", value: [200, 181, 179] },
      { name: "", value: [146, 129, 135] },
      { name: "", value: [89, 76, 87] },
    ],
  },
  {
    name: "",
    solarTerm: "白露",
    colors: [
      { name: "", value: [196, 183, 152] },
      { name: "", value: [165, 138, 95] },
      { name: "", value: [124, 98, 63] },
      { name: "", value: [100, 77, 49] },
    ],
  },
  {
    name: "",
    solarTerm: "秋分",
    colors: [
      { name: "", value: [213, 227, 212] },
      { name: "", value: [202, 215, 197] },
      { name: "", value: [190, 202, 183] },
      { name: "", value: [179, 189, 169] },
    ],
  },
  {
    name: "",
    solarTerm: "秋分",
    colors: [
      { name: "", value: [192, 173, 94] },
      { name: "", value: [170, 150, 73] },
      { name: "", value: [143, 61, 44] },
      { name: "", value: [104, 54, 50] },
    ],
  },
  {
    name: "",
    solarTerm: "秋分",
    colors: [
      { name: "", value: [74, 148, 196] },
      { name: "", value: [65, 130, 164] },
      { name: "", value: [50, 120, 138] },
      { name: "", value: [0, 109, 135] },
    ],
  },
  {
    name: "",
    solarTerm: "秋分",
    colors: [
      { name: "", value: [234, 238, 241] },
      { name: "", value: [212, 221, 225] },
      { name: "", value: [189, 203, 210] },
      { name: "", value: [178, 191, 195] },
    ],
  },
  {
    name: "",
    solarTerm: "寒露",
    colors: [
      { name: "", value: [166, 186, 177] },
      { name: "", value: [129, 157, 142] },
      { name: "", value: [119, 138, 119] },
      { name: "", value: [95, 118, 106] },
    ],
  },
  {
    name: "",
    solarTerm: "寒露",
    colors: [
      { name: "", value: [221, 176, 120] },
      { name: "", value: [218, 146, 51] },
      { name: "", value: [188, 110, 55] },
      { name: "", value: [159, 82, 33] },
    ],
  },
  {
    name: "",
    solarTerm: "寒露",
    colors: [
      { name: "", value: [139, 163, 199] },
      { name: "", value: [0, 61, 116] },
      { name: "", value: [25, 50, 95] },
      { name: "", value: [26, 40, 71] },
    ],
  },
  {
    name: "",
    solarTerm: "寒露",
    colors: [
      { name: "", value: [236, 217, 199] },
      { name: "", value: [225, 193, 153] },
      { name: "", value: [198, 162, 104] },
      { name: "", value: [179, 147, 75] },
    ],
  },
  {
    name: "",
    solarTerm: "霜降",
    colors: [
      { name: "", value: [209, 41, 32] },
      { name: "", value: [171, 29, 34] },
      { name: "", value: [143, 29, 34] },
      { name: "", value: [99, 18, 22] },
    ],
  },
  {
    name: "",
    solarTerm: "霜降",
    colors: [
      { name: "", value: [189, 178, 178] },
      { name: "", value: [145, 130, 143] },
      { name: "", value: [106, 91, 109] },
      { name: "", value: [92, 79, 85] },
    ],
  },
  {
    name: "",
    solarTerm: "霜降",
    colors: [
      { name: "", value: [248, 198, 181] },
      { name: "", value: [218, 158, 140] },
      { name: "", value: [215, 127, 102] },
      { name: "", value: [177, 90, 67] },
    ],
  },
  {
    name: "",
    solarTerm: "霜降",
    colors: [
      { name: "", value: [223, 215, 194] },
      { name: "", value: [212, 193, 166] },
      { name: "", value: [190, 167, 139] },
      { name: "", value: [153, 128, 108] },
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
