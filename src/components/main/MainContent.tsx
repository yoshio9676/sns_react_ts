import React, { useEffect, useRef } from "react";
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

  // メッセージ送信後に最新メッセージが表示されるように最下層にスクロール
  const endOfMessages = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (endOfMessages.current) {
      endOfMessages.current.scrollIntoView(false);
    }
  }, [messages]);

  return (
    <>
      <div className="contents">
        {messageList}
        <div ref={endOfMessages}></div>
      </div>
    </>
  );
};

export default MainContent;
