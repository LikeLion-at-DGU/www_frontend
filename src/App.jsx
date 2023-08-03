//App.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Mainpage from "./pages/mainPage/Mainpage";

function App() {
  return (
    <>
      <Header />
      <Mainpage />
      {/* <Login /> */}
      <Outlet />
    </>
  );
}

export default App;
