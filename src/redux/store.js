import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

const initValue = {};

const middlewares = [createLogger()];

const store = createStore(reducer, initValue, applyMiddleware(...middlewares));

export default store;
