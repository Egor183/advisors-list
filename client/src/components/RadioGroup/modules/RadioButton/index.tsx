import React, { memo } from "react";
import { FormControlLabel, FormControlLabelProps } from "@mui/material";

const RadioButton: React.FC<FormControlLabelProps> = ({
  value,
  label,
  control,
}) => {
  return <FormControlLabel value={value} control={control} label={label} />;
};

export default memo(RadioButton);
