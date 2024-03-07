import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { auth } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

const SideBarFooter = () => {
  const user = useAppSelector((state) => state.userState.user);

  const userIcon = () => {
    return (
      <>
        {user?.photo ? (
          <img src={user?.photo} onClick={() => auth.signOut()} />
        ) : (
          <FaceIcon onClick={() => auth.signOut()} />
        )}
      </>
    );
  };

  return (
    <>
      <div className="sidebar-footer">
        <div className="account">
          {userIcon()}
          <div className="account-names">
            <h4>{user?.name}</h4>
            <span>#{user?.uid.substring(0, 4)}</span>
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
