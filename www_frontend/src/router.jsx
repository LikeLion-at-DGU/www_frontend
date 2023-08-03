import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Main from "./pages/Main";
// import NotFoundError from "./pages/error/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Main />
            }
        ],
        // errorElement: <NotFoundError />
    },
]);

export default router;
