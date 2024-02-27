import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideBarChannels = () => {
  return (
    <div className="sidebar-channels">
      <div className="channels-header">
        <div className="left">
          <ExpandMoreIcon className="icon"></ExpandMoreIcon>
          <p>チャンネル一覧</p>
        </div>
        <AddIcon className="right"></AddIcon>
      </div>
      <div className="channels">
        {channels.map((c) => {
          return (
            <p className="channel" key={c.id}>
              <span className="channel-hash">#</span>
              {c.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SideBarChannels;

type ChannelType = {
  id: number;
  name: string;
};
const channels: ChannelType[] = [
  {
    id: 1,
    name: "チャンネル1",
  },
  {
    id: 2,
    name: "チャンネル2",
  },
  {
    id: 3,
    name: "チャンネル3",
  },
];
