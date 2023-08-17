import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/loginPage/Login";
import Input from "./pages/loginPage/Input";
import Record from "./pages/recordPage/Record";
import Detail from "./pages/detailPage/Detail";
import Companion from "./pages/companionPage/Companion";
import Archive from "./pages/archivePage/Archive";
import NotFound from "./pages/NotFound";
import Mainpage from "./pages/mainPage/Mainpage";
import Write from "./pages/writePage/Write";
import Search from "./pages/searchPage/Search";
import CompanionDetail from "./pages/detailPage/CompanionDetail";
import CompanionWrite from "./pages/writePage/CompanionWrite";
import Test from "./pages/Test";
import TestLogin from "./pages/loginPage/TestLogin";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Mainpage />,
      },
      {
        path: "records/write",
        element: <Write />,
      },
      {
        path: "records/:detailId",
        element: <Detail />,
      },
      {
        path: "records/search",
        element: <Search />,
      },
      {
        path: "records",
        element: <Record />,
      },
      {
        path: "companions/write",
        element: <CompanionWrite />,
      },
      {
        path: "companions/:detailId",
        element: <CompanionDetail />,
      },
      {
        path: "companions",
        element: <Companion />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
    errorElement: <NotFound />,
  },
  // 이 아래 라우터는 연결 되긴 하는데 글로벌 스타일이 적용 안됨 ..

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "input",
    element: <Input />,
  },
  {
    path: "testlogin",
    element: <TestLogin />,
  },
]);

export default Router;
