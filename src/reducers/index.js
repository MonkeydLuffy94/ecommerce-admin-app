import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import registerReducer from "./register.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
});

export default rootReducer;
