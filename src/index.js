import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/userContext";

import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
