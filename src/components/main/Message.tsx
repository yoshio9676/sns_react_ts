import React from "react";
import FaceIcon from "@mui/icons-material/Face";

const Message = () => {
  return (
    <div className="message">
      <FaceIcon />
      <div className="message-info">
        <h4 className="account-info">
          yoshimasa
          <span className="timestamp">2024/3/5 12:00</span>
        </h4>
        <p>Message Content</p>
      </div>
    </div>
  );
};

export default Message;
