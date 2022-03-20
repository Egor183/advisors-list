import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { scrollReducer } from "../reducers/scroll.reducer";
import { advisorsReducer } from "../reducers/advisors.reducers";
import { loadingReducer } from "../reducers/loading.reducers";

const rootReducer = combineReducers({
  advisors: advisorsReducer,
  form: formReducer,
  loading: loadingReducer,
  scroll: scrollReducer,
});

export default createStore(rootReducer);
