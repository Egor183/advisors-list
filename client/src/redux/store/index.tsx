import { createStore, combineReducers } from "redux";
import { advisorsReducer } from "../reducers/advisors.reducers";

const rootReducer = () =>
  combineReducers({
    advisors: advisorsReducer,
  });

export default createStore(rootReducer);
