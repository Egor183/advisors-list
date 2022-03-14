import React, { memo } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckBoxType } from "../../types/checkBox.types";

const CheckBoxComponent: React.FC<CheckBoxType> = ({
  checked,
  label,
  onChange,
}) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};

export default memo(CheckBoxComponent);
