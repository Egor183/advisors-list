import { MenuItem } from "@mui/material";
import React, { memo } from "react";
import Select from "../../../../../../components/Select";
import { SELECT_VALUES } from "../../constants/constants";
import { useChangeCurrentAdvisorsList } from "../../hooks/useChangeCurrentAdvisorsList";
import { handleChangeSelect } from "./helpers/helpers";

const SelectComponent = () => {
  const handleChangeCurrentAdvisorsList =
    useChangeCurrentAdvisorsList(handleChangeSelect);

  return (
    <Select
      label="Reviews"
      labelId="3"
      id="3"
      onChange={handleChangeCurrentAdvisorsList}
    >
      <MenuItem value={SELECT_VALUES.MORE}>more</MenuItem>
      <MenuItem value={SELECT_VALUES.LESS}>less</MenuItem>
    </Select>
  );
};

export default memo(SelectComponent);
