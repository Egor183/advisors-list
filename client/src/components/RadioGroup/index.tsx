import { RadioGroup, FormControl, FormLabel } from "@mui/material";
import React, { memo, useCallback } from "react";
import { RadioGroupType } from "../../types/radioGroup.types";

const RadioGroupComponent: React.FC<RadioGroupType> = ({
  input,
  label,
  id,
  ...rest
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, currentValue: string) => {
      return input.onChange(currentValue);
    },
    []
  );

  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup {...input} {...rest} onChange={handleChange} />
    </FormControl>
  );
};

export default memo(RadioGroupComponent);
