import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChannelType, { channels } from "../../types/sidebar/Channel";
import { JSX } from "@emotion/react/jsx-runtime";

const SideBarChannels = () => {
  // useContextで管理した方がよい？
  const [currentChannel, setCurrentChannel] = useState<ChannelType["id"]>(
    channels[0].id,
  );

  const handleCurrentChannel = (channelId: ChannelType["id"]): void => {
    setCurrentChannel(channelId);
  };

  const channelList: JSX.Element[] = channels.map((c: ChannelType) => {
    const currentChannelClass =
      currentChannel === c.id ? "active channel" : "channel";
    return (
      <p
        className={currentChannelClass}
        key={c.id}
        onClick={() => handleCurrentChannel(c.id)}
      >
        <span className="channel-hash">#</span>
        {c.name}
      </p>
    );
  });

  return (
    <div className="sidebar-channels">
      <div className="channels-header">
        <div className="left">
          <ExpandMoreIcon className="icon" />
          <p>チャンネル一覧</p>
        </div>
        <AddIcon className="right" />
      </div>
      <div className="channels">{channelList}</div>
    </div>
  );
};

export default SideBarChannels;
