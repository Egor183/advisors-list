import { MenuItem } from "@mui/material";
import React, { memo } from "react";
import SelectComponent from "../../../../../../components/Select";
import { FORMS_IDS } from "../../../../../../constants/forms.constants";
import { SelectStatusType } from "../../../../../../types/select.types";
import { MENU_ITEMS } from "./constants/constants";

const SelectStatus: React.FC<SelectStatusType> = ({ onChange }) => {
  return (
    <SelectComponent
      label="Reviews"
      labelId={FORMS_IDS.ID_2}
      id={FORMS_IDS.ID_2}
      onChangeSelect={onChange}
    >
      {MENU_ITEMS.map((item) => (
        <MenuItem value={item.value} key={item.key}>
          {item.label}
        </MenuItem>
      ))}
    </SelectComponent>
  );
};

export default memo(SelectStatus);
