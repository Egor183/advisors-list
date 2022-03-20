import { useCallback } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { resetScroll } from "../../../../../redux/actions/scroll.actions";
import { changeCurrentAdvisorsList } from "../../../../../redux/actions/advisors.actions";
import { ChangeAdvisorsListFunctionType } from "../../../../../types/advisors.types";

export const useChangeCurrentAdvisorsList = (
  callback: ChangeAdvisorsListFunctionType,
  isDefaultListUsed = true
) => {
  const dispatch = useDispatch();
  const defaultAdvisorsList = useSelector(
    (state: RootStateOrAny) => state.advisors.advisorsList
  );

  const currentAdvisorsList = useSelector(
    (state: RootStateOrAny) => state.advisors.currentAdvisorsList
  );

  const currentList = isDefaultListUsed
    ? defaultAdvisorsList
    : currentAdvisorsList;

  const handleChangeCurrentAdvisorsList = useCallback(
    (changingValue: any) => {
      if (!currentList.length || !changingValue) {
        return;
      }

      dispatch(changeCurrentAdvisorsList(callback(currentList, changingValue)));
      dispatch(resetScroll(true));
    },
    [currentList, callback, dispatch]
  );

  return handleChangeCurrentAdvisorsList;
};
