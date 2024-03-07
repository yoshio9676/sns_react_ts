import "./App.scss";
import Main from "./components/main/Main";
import SideBar from "./components/sidebar/SideBar";
import Login from "./components/login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useAppSelector((state) => state.userState.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            name: loginUser.displayName ?? "",
            email: loginUser.email ?? "",
            photo: loginUser.photoURL ?? "",
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="content">
        {user ? (
          <>
            <SideBar></SideBar>
            <Main></Main>
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </>
  );
}

export default App;
