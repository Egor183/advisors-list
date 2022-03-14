import React, { memo } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckBoxType } from "../../../../types/checkBox.types";

const CheckBox: React.FC<CheckBoxType> = ({ input, name, label }) => {
  return (
    <FormControlLabel
      control={<Checkbox name={name} onChange={input.onChange} />}
      label={label}
    />
  );
};

export default memo(CheckBox);
