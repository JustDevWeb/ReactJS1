import {applyMiddleware, combineReducers, compose, createStore} from "redux";
// import createSagaMiddleware from "redux-saga"
// import mySaga from "./sagas";
// import storage from 'redux-persist/lib/storage'
// import {persistStore, persistReducer} from "redux-persist";

import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import gistsReducer from "./gists/reducer";
import profileReducer from "./profile/reducer";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//     key: 'root',
//     storage,
// }
const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    gists: gistsReducer
})

// const persistedReducer = persistReducer(persistConfig, allReducers);


export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

// sagaMiddleware.run(mySaga)

// export const persistor = persistStore(store);