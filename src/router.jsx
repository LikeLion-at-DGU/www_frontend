import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Main from "./pages/mainpage";
import LogIn from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LogIn />,
  },
]);

export default router;
