import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import SentimentVerySatisfiedSharpIcon from "@mui/icons-material/SentimentVerySatisfiedSharp";
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

function MainBottom() {
  const [inputMessage, setInputMessage] = useState<string>("");
  const channelId = useAppSelector((state) => state.channelState.channelId);
  const user = useAppSelector((state) => state.userState.user);

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!inputMessage || !channelId) {
      alert("チャンネルを選択してください");
      return;
    }

    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages",
    );

    await addDoc(collectionRef, {
      message: inputMessage,
      timestamp: serverTimestamp(),
      user,
    });
  };

  return (
    <div className="main-bottom">
      <AddCircleIcon />
      <form action="">
        <input
          type="text"
          placeholder="Message"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputMessage(e.target.value)
          }
        />
        <button
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            sendMessage(e)
          }
        >
          送信
        </button>
      </form>
      <div className="main-bottom-icons">
        <CardGiftcardIcon />
        <GifBoxIcon />
        <SentimentVerySatisfiedSharpIcon />
      </div>
    </div>
  );
}

export default MainBottom;
