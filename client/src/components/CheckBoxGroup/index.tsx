import React, { memo } from "react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import { CheckBoxGroupType } from "../../types/checkBox.types";

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
