import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/loginPage/Login";
import Join from "./pages/loginPage/Join";
import Detail from "./pages/loginPage/Detail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "join",
    element: <Join />,
  },
  {
    path: "detail",
    element: <Detail />,
  },
]);

export default Router;
