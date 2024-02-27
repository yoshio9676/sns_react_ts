import React from "react";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const SideBarFooter = () => {
  return (
    <>
      <div className="sidebar-footer">
        <div className="account">
          <SportsBasketballIcon />
          <div className="account-names">
            <h4>Yoshimasa</h4>
            <span>@yoshi76</span>
          </div>
        </div>
        <div className="mic">
          <div className="icon">
            <MicIcon />
          </div>
          <div className="icon">
            <HeadsetMicIcon />
          </div>
          <div className="icon">
            <SettingsIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarFooter;
