import { RadioGroup } from "@mui/material";
import React, { memo, useCallback } from "react";
import { CheckBoxType } from "../../types/checkBox.types";

const RadioButtonComponent: React.FC<CheckBoxType> = () => {
  const handleChange = useCallback((event) => {
    event.target.value;
  }, []);

  return (
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      onChange={handleChange}
    />
  );
};

export default memo(RadioButtonComponent);
