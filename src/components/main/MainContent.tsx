import React from "react";
import Message from "./Message";
import { useAppSelector } from "../../app/hooks";

const MainContent = () => {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <>
      <div className="contents">
        <Message user={user} />
        <Message user={user} />
        <Message user={user} />
        <Message user={user} />
        <Message user={user} />
      </div>
    </>
  );
};

export default MainContent;
