import { ReactNode } from "react";

export type SelectType = {
  children: ReactNode;
  label: string;
  id: string;
  labelId: string;
  onChange: (changingValue: string) => void;
};
