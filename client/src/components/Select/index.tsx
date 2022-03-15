import React, { memo } from "react";
import Select from "@mui/material/Select";
import { useCallback } from "react";
import { SelectType } from "../../types/select.types";
import { FormControl, InputLabel } from "@mui/material";

const SelectComponent: React.FC<SelectType> = ({
  label,
  children,
  id,
  labelId,
}) => {
  const handleChange = useCallback((event) => event.target.value, []);

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select labelId={labelId} id={id} label={label} onChange={handleChange}>
        {children}
      </Select>
    </FormControl>
  );
};

export default memo(SelectComponent);
