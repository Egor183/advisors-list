import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { advisorsReducer } from "../reducers/advisors.reducers";
import { loadingReducer } from "../reducers/loading.reducers";

const rootReducer = combineReducers({
  advisors: advisorsReducer,
  form: formReducer,
  loading: loadingReducer,
});

export default createStore(rootReducer);
