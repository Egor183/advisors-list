import React, { memo, useEffect, useState } from "react";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";
import { WrappedFieldProps } from "redux-form";

const CheckBox: React.FC<
  WrappedFieldProps & CheckboxProps & FormControlLabelProps
> = ({ input, label }) => {
  const [isChecked, setIsChecked] = useState(input.checked);

  useEffect(() => {
    input.onChange(isChecked);
  }, [isChecked, input]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox {...input} onChange={handleChange} checked={isChecked} />
      }
      label={label}
    />
  );
};

export default memo(CheckBox);
