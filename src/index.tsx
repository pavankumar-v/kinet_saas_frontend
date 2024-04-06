import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import AUTH0_CONFIG from "@/config/auth";
import { Provider } from "react-redux";
import store from "@/store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={AUTH0_CONFIG.DOMAIN}
        clientId={AUTH0_CONFIG.CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}

      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
