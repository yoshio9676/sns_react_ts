import React from "react";
import "../../assets/sass/sidebar/SideBar.scss";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <SideBarLeft></SideBarLeft>
        <SideBarRight></SideBarRight>
      </div>
    </>
  );
};

export default SideBar;
