import {applyMiddleware, combineReducers, createStore} from "redux";
import dataReducer from "./data-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    dataState: dataReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store