import React, { memo } from "react";
import Select from "@mui/material/Select";
import { useCallback } from "react";
import { SelectType } from "../../types/select.types";

const SelectComponent: React.FC<SelectType> = ({ label, children, id }) => {
  const handleChange = useCallback((event) => event.target.value, []);

  return (
    <Select id={id} label={label} onChange={handleChange}>
      {children}
    </Select>
  );
};

export default memo(SelectComponent);
