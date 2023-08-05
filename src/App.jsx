//App.jsx
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Mainpage from "./pages/mainPage/Mainpage";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
