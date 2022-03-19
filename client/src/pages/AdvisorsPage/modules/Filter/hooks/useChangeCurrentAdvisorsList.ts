import { useCallback } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { changeCurrentAdvisorsList } from "../../../../../redux/actions/advisors.actions";
import { ChangeAdvisorsListFunctionType } from "../../../../../types/advisors.types";

export const useChangeCurrentAdvisorsList = (
  callback: ChangeAdvisorsListFunctionType
) => {
  const dispatch = useDispatch();
  const defaultAdvisorsList = useSelector(
    (state: RootStateOrAny) => state.advisors.advisorsList
  );

  const handleChangeCurrentAdvisorsList = useCallback(
    (changingValue: string) => {
      if (!defaultAdvisorsList.length || !changingValue) {
        return;
      }

      dispatch(
        changeCurrentAdvisorsList(callback(defaultAdvisorsList, changingValue))
      );
    },
    [defaultAdvisorsList, callback, dispatch]
  );

  return handleChangeCurrentAdvisorsList;
};
