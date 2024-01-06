import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import './index.css';
import store from "./redux/store";
import App from "./app";

const container = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
