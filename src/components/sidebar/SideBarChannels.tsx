import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { JSX } from "@emotion/react/jsx-runtime";
import { Channel } from "../../hooks/useCollection";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../../firebase";

type SideBarChannelsProp = {
  channels: Channel[];
};

const SideBarChannels = ({ channels }: SideBarChannelsProp) => {
  const channelList: JSX.Element[] = channels.map((c: Channel) => {
    return (
      <p className="channel" key={c.id}>
        <span className="channel-hash">#</span>
        {c.channel.channelName}
      </p>
    );
  });

  const addChannel = async () => {
    const newChannelName: string | null = prompt("Add new channel");
    if (newChannelName) {
      await addDoc(collection(db, "channels"), {
        channelName: newChannelName,
      });
    }
  };

  return (
    <div className="sidebar-channels">
      <div className="channels-header">
        <div className="left">
          <ExpandMoreIcon className="icon" />
          <p>チャンネル一覧</p>
        </div>
        <AddIcon className="right" onClick={() => addChannel()} />
      </div>
      <div className="channels">{channelList}</div>
    </div>
  );
};

export default SideBarChannels;
