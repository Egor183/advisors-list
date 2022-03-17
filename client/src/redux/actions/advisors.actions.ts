import { AdvisorsListType } from "../../types/advisors.types";
import { LOAD_ADVISORS } from "../action-types/advisors.action-types";

export const loadAdvisors = (advisorsList: AdvisorsListType) => {
  return { type: LOAD_ADVISORS, payload: advisorsList };
};
