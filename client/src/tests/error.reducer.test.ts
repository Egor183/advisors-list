import { errorReducer } from "./../redux/reducers/error.reducer";
import { setError } from "../redux/actions/error.actions";

const state = {
  hasError: false,
};

it("error set", () => {
  const action = setError(true);
  const newState = errorReducer(state, action);
  expect(newState.hasError).toBe(true);
});
