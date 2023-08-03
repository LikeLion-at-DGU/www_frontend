//App.jsx
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Mainpage from "./pages/mainPage/Mainpage";
import { GlobalStyle } from "./GlobalStyle";
import Login from "./pages/loginPage/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Mainpage />
      {/* <Login /> */}
      <Outlet />
    </>
  );
}

export default App;
