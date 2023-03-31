import { compose, applyMiddleware  } from "redux";
import { legacy_createStore as createStore } from "redux"
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];  //logger included in middleware.

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);

