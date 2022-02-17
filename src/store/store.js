import profileReducer from "./profile/reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import mySaga from "./sagas";
import storage from 'redux-persist/lib/storage'
import {persistStore,persistReducer} from "redux-persist";

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
}
const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer
})

const persistedReducer = persistReducer(persistConfig, allReducers);



export const store = createStore (persistedReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga)

export const persistor= persistStore(store);