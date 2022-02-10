import profileReducer from "./profile/reducer";
import {combineReducers, createStore} from "redux";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer
})

export const store = createStore (allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

