import authReducer from "./authReducer";
import projectReducer from "./ProjectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer
});

export default rootReducer;