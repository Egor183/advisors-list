import { MenuItem } from "@mui/material";
import React, { memo } from "react";
import SelectComponent from "../../../../../../components/Select";
import { SelectStatusType } from "../../../../../../types/select.types";
import { SELECT_VALUES } from "../../constants/constants";

const SelectStatus: React.FC<SelectStatusType> = ({ onChange }) => {
  return (
    <SelectComponent
      label="Reviews"
      labelId="3"
      id="3"
      onChangeSelect={onChange}
    >
      <MenuItem value={SELECT_VALUES.MORE}>more</MenuItem>
      <MenuItem value={SELECT_VALUES.LESS}>less</MenuItem>
    </SelectComponent>
  );
};

export default memo(SelectStatus);
