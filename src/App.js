import "./App.scss";
import React from "react";
import {store} from "./store/store";
import Routers from "./pages/Routers";
import {Provider} from "react-redux";

function App() {

  return (
      <Provider store={store}>
        <Routers />
      </Provider>
  );
}

export default App;
