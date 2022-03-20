import {
  RadioGroup,
  FormControl,
  FormLabel,
  RadioGroupProps,
  FormControlLabelProps,
} from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { WrappedFieldProps } from "redux-form";

const RadioGroupComponent: React.FC<
  WrappedFieldProps & RadioGroupProps & FormControlLabelProps
> = ({ input, label, id, ...rest }) => {
  const [value, setValue] = useState(input.value);

  useEffect(() => {
    input.onChange(value);
  }, [value, input]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup {...input} {...rest} onChange={handleChange} value={value} />
    </FormControl>
  );
};

export default memo(RadioGroupComponent);
