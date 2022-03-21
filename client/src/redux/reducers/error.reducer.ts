import { SetErrorActionType } from "types/redux.types";
import { SET_ERROR } from "../action-types/error.action-types";

const initialState = {
  hasError: false,
};

export const errorReducer = (
  state = initialState,
  action: SetErrorActionType
) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        hasError: action.payload,
      };

    default:
      return state;
  }
};
