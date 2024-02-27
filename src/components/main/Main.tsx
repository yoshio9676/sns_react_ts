import React, { useState } from "react";
import "../../assets/sass/main/Main.scss";
import MainTop from "./MainTop";
import MainContent from "./MainContent";
import MenuType, { menus } from "../../types/main/Menu";

const Main = () => {
  const [tab, setTab] = useState<MenuType["tab"]>(menus[0].tab);

  const handleTab = (t: MenuType["tab"]): void => {
    setTab(t);
  };

  return (
    <div className="main-content">
      <MainTop currentTab={tab} changeTab={handleTab} />
      <MainContent />
    </div>
  );
};

export default Main;
