import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import { UserState } from "../../types/user/initialUserState";

type MessageProp = {
  user: null | UserState;
};

const Message = ({ user }: MessageProp) => {
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
          <span className="timestamp">2024/3/5 12:00</span>
        </h4>
        <p>Message Content</p>
      </div>
    </div>
  );
};

export default Message;
