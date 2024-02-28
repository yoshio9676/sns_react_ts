import "./App.scss";
import Main from "./components/main/Main";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <>
      <div className="content">
        <SideBar></SideBar>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
