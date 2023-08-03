// app.jsx
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { GoogleLogin } from "@react-oauth/google";
import LogIn from "./pages/login";
import Main from "./pages/mainpage";

function App() {
  return (
    <>
      <Header />
      <LogIn />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
