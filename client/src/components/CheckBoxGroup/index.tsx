import React, { memo, ReactNode } from "react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";

type CheckBoxGroupType = {
  children: ReactNode[];
  label: string;
  id: string;
};

const CheckBoxGroup: React.FC<CheckBoxGroupType> = ({
  children,
  label,
  id,
}) => {
  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <FormGroup>{children}</FormGroup>
    </FormControl>
  );
};

export default memo(CheckBoxGroup);
