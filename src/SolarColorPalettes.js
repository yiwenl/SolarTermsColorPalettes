const colorPalettes = [
  {
    name: "立春",
    colors: [
      { name: "黃白遊", value: [255, 247, 153] },
      { name: "松花", value: [255, 238, 111] },
      { name: "緗葉", value: [236, 212, 82] },
      { name: "蒼黃", value: [182, 160, 20] },
    ],
  },
  {
    name: "東風解凍",
    colors: [
      { name: "天縹", value: [213, 235, 225] },
      { name: "滄浪", value: [177, 213, 200] },
      { name: "蒼筤", value: [153, 188, 172] },
      { name: "縹碧", value: [128, 164, 146] },
    ],
  },
  {
    name: "蟄蟲始振",
    colors: [
      { name: "流黃", value: [139, 112, 66] },
      { name: "栗殼", value: [119, 80, 57] },
      { name: "龍戰", value: [95, 67, 33] },
      { name: "青驪", value: [66, 37, 23] },
    ],
  },
  {
    name: "魚陟負冰",
    colors: [
      { name: "海天霞", value: [243, 166, 148] },
      { name: "縉雲", value: [238, 121, 89] },
      { name: "纁黃", value: [186, 81, 64] },
      { name: "珊瑚赫", value: [193, 44, 31] },
    ],
  },
  {
    name: "雨水",
    colors: [
      { name: "盈盈", value: [249, 211, 227] },
      { name: "水紅", value: [236, 176, 193] },
      { name: "蘇梅", value: [221, 118, 148] },
      { name: "紫莖屏風", value: [167, 98, 131] },
    ],
  },
  {
    name: "獺祭魚",
    colors: [
      { name: "葭灰", value: [190, 177, 170] },
      { name: "黃埃", value: [180, 146, 115] },
      { name: "老僧衣", value: [164, 95, 68] },
      { name: "玄天", value: [107, 84, 88] },
    ],
  },
  {
    name: "候雁北",
    colors: [
      { name: "黃河琉璃", value: [229, 168, 75] },
      { name: "庫金", value: [225, 138, 59] },
      { name: "縕韍", value: [152, 79, 49] },
      { name: "紫甌", value: [124, 70, 30] },
    ],
  },
  {
    name: "草木萌動",
    colors: [
      { name: "歐碧", value: [192, 214, 149] },
      { name: "春辰", value: [169, 190, 123] },
      { name: "碧山", value: [119, 150, 73] },
      { name: "青青", value: [79, 111, 70] },
    ],
  },
  {
    name: "驚蟄",
    colors: [
      { name: "赤緹", value: [186, 91, 73] },
      { name: "朱草", value: [166, 64, 54] },
      { name: "綪茷", value: [158, 42, 34] },
      { name: "順聖", value: [124, 25, 30] },
    ],
  },
];

export const getColorPalette = () => {
  console.log("get color palette");
};

export const getRandomColor = () => {
  return colorPalettes[colorPalettes.length - 1];
  return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
};
