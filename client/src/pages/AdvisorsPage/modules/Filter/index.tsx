import { MenuItem } from "@mui/material";
import React, { memo } from "react";
import Select from "../../../../components/Select";
import FilterForm from "./modules/FilterForm";

import styles from "./styles.module.css";

const Filter = () => {
  return (
    <div>
      <div>
        <Select label="Sort by" labelId="3" id="3">
          <MenuItem value="moreViews">more views</MenuItem>
          <MenuItem value="fewerViews">fewer views</MenuItem>
        </Select>
      </div>
      <div className={styles.filterFormContainer}>
        <FilterForm onSubmit={(e: any) => console.log(e)} />
      </div>
    </div>
  );
};

export default memo(Filter);
