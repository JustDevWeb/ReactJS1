import "./App.scss";
import React from "react";
import { persistor, store } from "./store/store";
import Routers from "./pages/Routers";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@mui/material";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        {/*<PersistGate persistor={persistor} loading={<CircularProgress/>}>*/}
        <Routers />
        {/*</PersistGate>*/}
      </AuthProvider>
    </Provider>
  );
}

export default App;
