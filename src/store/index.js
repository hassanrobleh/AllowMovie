import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const appReducer = combineReducers(reducers);

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
