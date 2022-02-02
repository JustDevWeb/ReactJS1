import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Routers from "./pages/Routers";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

        <Routers />

    </Provider>
    {/*<App />*/}
  </React.StrictMode>,
  document.getElementById("root")
);
