import React, { useEffect, useState } from "react";
import "../../assets/sass/main/Main.scss";
import MainTop from "./MainTop";
import MainContent from "./MainContent";
import MainBottom from "./MainBottom";
import { useAppSelector } from "../../app/hooks";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../../firebase";
import { MessageType } from "../../types/message/message";

const Main = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const channelId = useAppSelector((state) => state.channelState.channelId);

  useEffect(() => {
    const collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages",
    );
    const queryRef = query(collectionRef, orderBy("timestamp", "asc"));
    onSnapshot(queryRef, (snapShot) => {
      const result: MessageType[] = [];
      snapShot.docs.forEach((doc) => {
        result.push({
          id: doc.id,
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(result);
    });
  }, [channelId]);

  return (
    <div className="main-content">
      <MainTop />
      <MainContent messages={messages} />
      <MainBottom />
    </div>
  );
};

export default Main;
