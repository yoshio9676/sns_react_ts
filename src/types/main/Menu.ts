type MenuType = {
  id: number;
  name: string;
  tab: string;
};

export const menus: Array<MenuType> = [
  {
    id: 1,
    name: "フレンド",
    tab: "friend",
  },
  {
    id: 2,
    tab: "online",
    name: "オンライン",
  },
  {
    id: 3,
    tab: "all_display",
    name: "全て表示",
  },
  {
    id: 4,
    tab: "staying",
    name: "保留中",
  },
  {
    id: 5,
    tab: "block",
    name: "ブロック",
  },
];

export default MenuType;
