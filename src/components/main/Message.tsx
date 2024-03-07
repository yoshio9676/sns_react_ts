import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import { MessageType } from "../../types/message/message";

type MessageProp = MessageType;

const Message = ({ message, timestamp, user }: MessageProp) => {
  const date = `${timestamp?.toDate().toLocaleString()}`;
  return (
    <div className="message">
      {user?.photo ? (
        <img src={user.photo} alt="" />
      ) : (
        <FaceIcon className="icon_svg" />
      )}
      <div className="message-info">
        <h4 className="account-info">
          {user?.name ?? "undefined"}
          <span className="timestamp">{date}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
