type BasicActionType<T> = {
  type: string;
  payload: T;
};

export type GetAdvisorsActionType = BasicActionType<string[]>;

export type SetLoadingActionType = BasicActionType<boolean>;
