import { craeteStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./reducers";
import { createLogger } "redux-logger";

const log = createLgoger({ diff: true, collapsed: true});
export default (initialState = {}) => {
  const middleware = [thunk, log];
  const enhancers = [];


  const store = createStore (
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware), ...enhancers
    )
  );
  return store;
};
