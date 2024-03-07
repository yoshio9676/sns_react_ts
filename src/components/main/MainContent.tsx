import React from "react";
import Message from "./Message";
import { MessageType } from "../../types/message/message";

type MainContentProp = {
  messages: MessageType[];
};

const MainContent = ({ messages }: MainContentProp) => {
  const messageList = messages.map((message: MessageType) => {
    return (
      <Message
        user={message.user}
        timestamp={message.timestamp}
        message={message.message}
        id={message.id}
        key={message.id}
      />
    );
  });

  return (
    <>
      <div className="contents">{messageList}</div>
    </>
  );
};

export default MainContent;
