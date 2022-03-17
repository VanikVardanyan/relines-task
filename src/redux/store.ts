import { combineReducers, createStore} from "redux";
import {UserReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    users: UserReducer
})

export const Store = createStore(rootReducer, composeWithDevTools())