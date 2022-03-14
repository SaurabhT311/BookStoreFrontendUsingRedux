import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { SignUpReducer } from "./SignUpReducer";

export default combineReducers({
    signUp:SignUpReducer,
    logIn:loginReducer
});