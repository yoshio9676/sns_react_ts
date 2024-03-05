import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import SentimentVerySatisfiedSharpIcon from "@mui/icons-material/SentimentVerySatisfiedSharp";

function MainBottom() {
  return (
    <div className="main-bottom">
      <AddCircleIcon />
      <form action="">
        <input type="text" placeholder="Message" />
        <button type="submit">送信</button>
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
