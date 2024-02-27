import "./App.scss";
import Main from "./components/main/Main";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <>
      <div className="content">
        {/* sidebar */}
        <SideBar></SideBar>
        {/* main */}
        <Main></Main>
      </div>
    </>
  );
}

export default App;
