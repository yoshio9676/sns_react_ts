import React from "react";
import MenuType, { menus } from "../../types/main/Menu";
import { JSX } from "@emotion/react/jsx-runtime";

type MainTopProp = {
  currentTab: MenuType["tab"];
  changeTab: (t: MenuType["tab"]) => void;
};
const MainTop = ({ currentTab, changeTab }: MainTopProp) => {
  const items: JSX.Element[] = menus.map((menu: MenuType) => {
    const currentTabClass: string =
      currentTab === menu.tab ? "active menu" : "menu";
    return (
      <p
        className={currentTabClass}
        key={menu.id}
        onClick={() => changeTab(menu.tab)}
      >
        {menu.name}
      </p>
    );
  });
  return <div className="main-top">{items}</div>;
};

export default MainTop;
