import { combineReducers } from "redux";
import createAccountReducer from "./createAccount";
import routerReducer from "../../routing/reducer";

const rootReducer = combineReducers({
  createAccountForm: createAccountReducer,
  router: routerReducer
});

export default rootReducer;
