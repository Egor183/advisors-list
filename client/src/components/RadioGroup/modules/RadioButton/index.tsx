import React, { memo } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { RadioButtonType } from "../../../../types/radioGroup.types";

const RadioButton: React.FC<RadioButtonType> = ({ value, label }) => {
  return <FormControlLabel value={value} control={<Radio />} label={label} />;
};

export default memo(RadioButton);
