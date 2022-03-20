import { ReactNode } from "react";

export type SelectType = {
  children: ReactNode;
  labelId: string;
  onChangeSelect: (changingValue: string) => void;
};

export type SelectStatusType = {
  onChange: (changingValue: string) => void;
};
