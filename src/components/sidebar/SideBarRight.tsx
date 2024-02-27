import React from "react";
import SideBarChannels from "./SideBarChannels";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SideBarFooter from "./SideBarFooter";

const SideBarRight = () => {
  return (
    <div className="sidebar-right">
      <div className="sidebar-right-content">
        <div className="sidebar-top">
          <h3>SNS</h3>
          <ExpandMoreIcon className="icon"></ExpandMoreIcon>
        </div>
        <SideBarChannels></SideBarChannels>
      </div>
      <SideBarFooter></SideBarFooter>
    </div>
  );
};

export default SideBarRight;
