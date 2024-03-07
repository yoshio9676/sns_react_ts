import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";
import { useAppSelector } from "../../app/hooks";

const MainTop = () => {
  const channelName: string | null = useAppSelector(
    (state) => state.channelState.channelName,
  );
  return (
    <>
      <div className="main-top">
        <div className="main-top-left">
          <span className="main-top-left-hash">#</span>
          <span className="main-top-left-channelname">
            {channelName ?? "undefined"}
          </span>
        </div>
        <div className="main-top-right">
          <div className="main-top-right-icon">
            <NotificationsActiveIcon />
          </div>
          <div className="main-top-right-icon">
            <PushPinIcon />
          </div>
          <div className="main-top-right-icon">
            <PeopleIcon />
          </div>
          <div className="main-top-right-search">
            <input type="text" placeholder="検索" />
            <div className="main-top-right-search-icon">
              <SearchIcon />
            </div>
          </div>
          <div className="main-top-right-icon">
            <SendIcon />
          </div>
          <div className="main-top-right-icon">
            <HelpIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTop;
