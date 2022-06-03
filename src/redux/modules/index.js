import { combineReducers } from "redux";
import post from "./post";


// counter, todo reducer 들을 이렇게 합침
const rootReducer = combineReducers({
    post
});

export default rootReducer;