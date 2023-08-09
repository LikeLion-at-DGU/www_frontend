import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/loginPage/Login";
import Input from "./pages/loginPage/Input";
import Record from "./pages/recordPage/Record";
import Detail from "./pages/recordPage/Detail";
import Companion from "./pages/companionPage/Companion";
import Archive from "./pages/archivePage/Archive";
import NotFound from "./pages/NotFound";
import Mainpage from "./pages/mainPage/Mainpage";
import { Test } from "./pages/Test";
import Write from "./pages/writePage/Write";
import Search from "./pages/searchPage/Search";
import BeforeSearch from "./pages/searchPage/BeforeSearch"

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
        path: "record/write",
        element: <Write />,
      },
      {
        path: "record/:detailId",
        element: <Detail />,
      },
      {
        path: "record/search/before",
        element: <BeforeSearch />,
      },
      {
        path: "record/search/result",
        element: <Search />,
      },
      {
        path: "record",
        element: <Record />,
      },
      {
        path: "companion",
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
]);

export default Router;
