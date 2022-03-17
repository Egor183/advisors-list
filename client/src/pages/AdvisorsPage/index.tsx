import classNames from "classnames";
import React, { memo } from "react";
import AdvisorsList from "./modules/AdvisorsList";
import Filter from "./modules/Filter";

import styles from "./styles.module.css";

function AdvisorsPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={classNames(styles.filterContainer, styles.container)}>
        <Filter />
      </div>
      <div>
        <AdvisorsList />
      </div>
    </div>
  );
}

export default memo(AdvisorsPage);
