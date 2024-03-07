import React from "react";
import SideBarChannels from "./SideBarChannels";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SideBarFooter from "./SideBarFooter";
import useCollection from "../../hooks/useCollection";

const SideBarRight = () => {
  const { documents } = useCollection("channels");

  return (
    <div className="sidebar-right">
      <div className="sidebar-top">
        <h3>SNS</h3>
        <ExpandMoreIcon className="icon"></ExpandMoreIcon>
      </div>
      <SideBarChannels channels={documents}></SideBarChannels>
      <SideBarFooter></SideBarFooter>
    </div>
  );
};

export default SideBarRight;
