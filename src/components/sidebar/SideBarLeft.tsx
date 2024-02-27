import React from "react";
import AccountIcon from "@mui/icons-material/AccountCircle";

const SideBarLeft = () => {
  return (
    <div className="sidebar-left">
      <div className="server-icon">
        <AccountIcon color="secondary"></AccountIcon>
      </div>
      <div className="server-icon">
        <AccountIcon color="success"></AccountIcon>
      </div>
    </div>
  );
};

export default SideBarLeft;
