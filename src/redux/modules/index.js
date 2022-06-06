import { combineReducers } from "redux";
import post from "./post";
import user from "./user"
import likes from "./likes"

const rootReducer = combineReducers({
    user,
    post,
    likes
});

export default rootReducer;