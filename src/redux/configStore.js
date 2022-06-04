import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from './modules';

// 생성
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);
export default store;