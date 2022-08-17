import { legacy_createStore, combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { castomerReducer } from "./castomerReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    castomers: castomerReducer,
})

export const store  = legacy_createStore(rootReducer);