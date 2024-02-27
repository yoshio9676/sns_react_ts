import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Diversity3Icon from "@mui/icons-material/Diversity3";

type MenuType = {
  id: number;
  name: string;
  icon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
};

export const menus: Array<MenuType> = [
  {
    id: 1,
    name: "フレンド",
    icon: Diversity3Icon,
  },
  {
    id: 2,
    name: "オンライン",
  },
  {
    id: 3,
    name: "全て表示",
  },
  {
    id: 4,
    name: "保留中",
  },
  {
    id: 5,
    name: "ブロック",
  },
];

export default MenuType;
