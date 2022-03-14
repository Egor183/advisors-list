import { GetAdvisorsActionType } from "./../../types/redux.types";
import { LOAD_ADVISORS } from "./../types/advisors.types";
const initialState = {
  advisors: [],
};

export const advisorsReducer = (
  state = initialState,
  action: GetAdvisorsActionType
) => {
  switch (action.type) {
    case LOAD_ADVISORS:
      return { ...state, advisors: action.payload };

    default:
      return state;
  }
};
