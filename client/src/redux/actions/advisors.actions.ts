import { LOAD_ADVISORS } from "./../types/advisors.types";
export const loadAdvisors = () => {
  return { type: LOAD_ADVISORS, payload: [] };
};
