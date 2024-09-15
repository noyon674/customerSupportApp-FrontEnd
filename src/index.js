import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { persistor, store } from "./redux/store"; // Import your Redux store and persistor
import "./styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Auth0Provider
          domain="dev-13ab8326ul3dyxpi.us.auth0.com"
          clientId="QhftGyO49C5TmWolX4bIKSVV4UEsd4VQ"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
