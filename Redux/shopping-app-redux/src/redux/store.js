import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import { thunk } from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* apply middleware akan digunakan untuk bind middleware dengan redux */
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;