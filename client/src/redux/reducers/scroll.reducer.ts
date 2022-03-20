import { RESET_SCROLL } from "../action-types/scroll.action-types";
import { ResetScrollActionType } from "../../types/redux.types";

const initialState = {
  resetScroll: false,
};

export const scrollReducer = (
  state = initialState,
  action: ResetScrollActionType
) => {
  switch (action.type) {
    case RESET_SCROLL:
      return {
        ...state,
        resetScroll: action.payload,
      };

    default:
      return state;
  }
};
