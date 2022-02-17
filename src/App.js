import "./App.scss";
import React from "react";
import {persistor, store} from "./store/store";
import Routers from "./pages/Routers";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {CircularProgress} from "@mui/material";

function App() {

  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={<CircularProgress/>}>
        <Routers />
          </PersistGate>
      </Provider>
  );
}

export default App;
