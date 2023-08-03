//App.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Mainpage from "./pages/mainPage/Mainpage";
import { GlobalStyle } from "./GlobalStyle";
import Login from "./pages/loginPage/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Mainpage />
      {/* <Login /> */}
      <Outlet />
    </>
  );
}

export default App;
