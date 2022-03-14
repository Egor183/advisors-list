import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { advisorsReducer } from "../reducers/advisors.reducers";

const rootReducer = combineReducers({
  advisors: advisorsReducer,
  form: formReducer,
});

export default createStore(rootReducer);
