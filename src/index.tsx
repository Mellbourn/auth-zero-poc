import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Page1 } from "./routes/page1";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Page2 from "./routes/page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
