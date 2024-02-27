import React from "react";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";

const SideBarFooter = () => {
  return (
    <>
      <div className="sidebar-footer">
        <div className="icon">
          <SportsBasketballIcon />
        </div>
        <div className="icon">
          <MicIcon />
        </div>
        <div className="icon">
          <SettingsIcon />
        </div>
      </div>
    </>
  );
};

export default SideBarFooter;
