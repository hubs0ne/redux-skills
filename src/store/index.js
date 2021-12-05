import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cashReducer } from "./reducers/cashReducer";
import { customerReducer } from "./reducers/customerReducer";

const rootReducer = combineReducers({
    cashReducer,
    customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))