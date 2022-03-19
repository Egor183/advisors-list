import React, { memo, useState } from "react";
import Select from "@mui/material/Select";
import { useCallback } from "react";
import { SelectType } from "../../types/select.types";
import { FormControl, InputLabel } from "@mui/material";

const SelectComponent: React.FC<SelectType> = ({
  label,
  children,
  id,
  labelId,
  onChange,
}) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (event) => {
      const currentValue = event.target.value;
      setValue(currentValue);
      onChange(currentValue);
    },
    [onChange]
  );

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        label={label}
        onChange={handleChange}
        value={value}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default memo(SelectComponent);
