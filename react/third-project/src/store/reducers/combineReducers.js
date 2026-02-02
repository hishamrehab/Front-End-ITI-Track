import { combineReducers } from "redux";
import languageReducer from "./language";
import loaderReducer from "./loader";

const combinedReducers = combineReducers({
    language: languageReducer,
    loader: loaderReducer
})

export default combinedReducers;