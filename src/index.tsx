import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import authConfig from "./auth_config.json";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Page1 } from "./routes/page1";
import Page2 from "./routes/page2";
import PleaseHangTight from "./routes/PleaseHangTight";
import { Root } from "./routes/root";
import Signup from "./routes/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
  { path: "/signup", element: <Signup /> },
  { path: "/please-hang-tight", element: <PleaseHangTight /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
