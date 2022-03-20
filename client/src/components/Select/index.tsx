import React, { memo, useState } from "react";
import Select, { SelectProps } from "@mui/material/Select";
import { useCallback } from "react";
import {
  FormControl,
  FormControlProps,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { SelectType } from "../../types/select.types";

const SelectComponent: React.FC<
  FormControlProps & SelectType & SelectProps
> = ({ label, children, id, labelId, onChangeSelect }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const currentValue = event.target.value;
      setValue(currentValue);
      onChangeSelect(currentValue);
    },
    [onChangeSelect]
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
