import { GetAdvisorsActionType } from "./../../types/redux.types";
import {
  CHANGE_CURRENT_ADVISORS_LIST,
  LOAD_ADVISORS,
} from "../action-types/advisors.action-types";

const initialState = {
  advisorsList: [],
  currentAdvisorsList: [],
};

export const advisorsReducer = (
  state = initialState,
  action: GetAdvisorsActionType
) => {
  switch (action.type) {
    case LOAD_ADVISORS:
      return {
        ...state,
        advisorsList: action.payload,
        currentAdvisorsList: action.payload,
      };

    case CHANGE_CURRENT_ADVISORS_LIST:
      return {
        ...state,
        currentAdvisorsList: action.payload,
      };

    default:
      return state;
  }
};
