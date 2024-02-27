import React from "react";
import MenuType, { menus } from "../../types/main/Menu";

const MainTop = () => {
  const items = menus.map((menu: MenuType) => {
    return (
      <p className="menu" key={menu.id}>
        {menu.name}
      </p>
    );
  });
  return <div className="main-top">{items}</div>;
};

export default MainTop;
