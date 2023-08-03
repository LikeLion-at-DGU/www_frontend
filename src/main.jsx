import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import router from "./router";

const clientId = import.meta.env.VITE_PUBLIC_GOOGLE_API_KEY;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <RouterProvider router={router}>
      {clientId && (
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      )}
    </RouterProvider>
  </React.StrictMode>
);
