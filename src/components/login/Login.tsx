import React from "react";
import "../../assets/sass/login/Login.scss";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      console.error(err.message);
    });
  };

  return (
    <div className="login-content">
      <div className="login-logo">
        <img src="/discordIcon.png" alt="" />
      </div>
      <Button className="login-button" onClick={signIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
