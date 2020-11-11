import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeEnhancers)
);

window.store = store;
