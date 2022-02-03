import profileReducer from "./profile/profileReducer";
import {createStore} from "redux";

export const store = createStore (profileReducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())