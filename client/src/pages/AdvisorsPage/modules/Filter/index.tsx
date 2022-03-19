import React, { memo } from "react";
import FilterForm from "./modules/FilterForm";
import SelectComponent from "./modules/SelectComponent";

import styles from "./styles.module.css";

const Filter = () => {
  return (
    <div>
      <div>
        <SelectComponent />
      </div>
      <div className={styles.filterFormContainer}>
        <FilterForm onSubmit={(e: any) => console.log(e)} />
      </div>
    </div>
  );
};

export default memo(Filter);
