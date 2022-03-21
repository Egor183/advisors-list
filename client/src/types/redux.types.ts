import { AdvisorsListType } from "./advisors.types";
type BasicActionType<T> = {
  type: string;
  payload: T;
};

export type GetAdvisorsActionType = BasicActionType<AdvisorsListType>;

export type SetLoadingActionType = BasicActionType<boolean>;

export type ResetScrollActionType = BasicActionType<boolean>;

export type SetErrorActionType = BasicActionType<boolean>;
