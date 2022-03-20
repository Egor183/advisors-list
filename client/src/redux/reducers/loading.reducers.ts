import { SET_LOADING } from "../action-types/loading.action-types";
import { SetLoadingActionType } from "../../types/redux.types";

const initialState = {
  isLoading: false,
};

export const loadingReducer = (
  state = initialState,
  action: SetLoadingActionType
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
