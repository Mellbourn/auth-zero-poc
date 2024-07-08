import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import authConfig from "./auth_config.json";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { EnterCode } from "./routes/EnterCode";
import { Page1 } from "./routes/page1";
import Page2 from "./routes/page2";
import PleaseHangTight from "./routes/PleaseHangTight";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Root } from "./routes/root";
import Signup from "./routes/signup";

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
      <Router>
        <Switch>
          <Route path="/" exact component={Root} />
          <ProtectedRoute path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/signup" component={Signup} />
          <Route path="/please-hang-tight" component={PleaseHangTight} />
          <Route path="/enter-code" component={EnterCode} />
        </Switch>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
