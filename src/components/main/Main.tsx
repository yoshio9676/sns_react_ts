import React from "react";
import "../../assets/sass/main/Main.scss";
import MainTop from "./MainTop";
import MainContent from "./MainContent";

const Main = () => {
  return (
    <div className="main-content">
      <MainTop />
      <MainContent />
    </div>
  );
};

export default Main;
