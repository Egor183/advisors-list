import React, { memo } from "react";
import { useChangeCurrentAdvisorsList } from "./hooks/useChangeCurrentAdvisorsList";
import FilterForm from "./modules/FilterForm";
import { handleChangeSelect, handleFilterForm } from "./helpers/helpers";
import SelectStatus from "./modules/SelectStatus";

import styles from "./styles.module.css";

const Filter = () => {
  const handleSelectCurrentAdvisorsList = useChangeCurrentAdvisorsList(
    handleChangeSelect,
    false
  );

  const handleFilterCurrentAdvisorsList =
    useChangeCurrentAdvisorsList(handleFilterForm);

  return (
    <div>
      <div>
        <SelectStatus onChange={handleSelectCurrentAdvisorsList} />
      </div>
      <div className={styles.filterFormContainer}>
        <FilterForm onSubmit={handleFilterCurrentAdvisorsList} />
      </div>
    </div>
  );
};

export default memo(Filter);
