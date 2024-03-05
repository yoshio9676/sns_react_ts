import React from "react";
import "../../assets/sass/main/Main.scss";
import MainTop from "./MainTop";
import MainContent from "./MainContent";
import MainBottom from "./MainBottom";

const Main = () => {
  return (
    <div className="main-content">
      <MainTop />
      <MainContent />
      <MainBottom />
    </div>
  );
};

export default Main;
