import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/loginPage/Login";
import Input from "./pages/loginPage/Input";
import Record from "./pages/recordPage/Record";
import Detail from "./pages/recordPage/Detail";
import Discussion from "./pages/discussionPage/Discussion";
import Archive from "./pages/archivePage/Archive";
import NotFound from "./pages/NotFound";
import Mainpage from "./pages/mainPage/Mainpage";

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
        path: "record/:detailId",
        element: <Detail />,
      },
      {
        path: "record",
        element: <Record />,
      },
      {
        path: "discussion",
        element: <Discussion />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
      {
        path: "login",
        element: <Login />,
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
