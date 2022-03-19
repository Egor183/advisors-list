import { CHANGE_CURRENT_ADVISORS_LIST } from "./../action-types/advisors.action-types";
import { AdvisorsListType } from "../../types/advisors.types";
import { LOAD_ADVISORS } from "../action-types/advisors.action-types";

export const loadAdvisors = (advisorsList: AdvisorsListType) => {
  return { type: LOAD_ADVISORS, payload: advisorsList };
};

export const changeCurrentAdvisorsList = (
  currentAdvisorsList: AdvisorsListType
) => {
  return { type: CHANGE_CURRENT_ADVISORS_LIST, payload: currentAdvisorsList };
};
