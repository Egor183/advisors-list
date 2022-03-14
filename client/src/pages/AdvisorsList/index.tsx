import React from "react";
import Filter from "./modules/Filter";

import styles from "./styles.module.css";

function AdvisorsList() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterContainer}>
        <Filter onSubmit={(e: any) => console.log(e)} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.container}>2</div>
        <div className={styles.container}>3</div>
      </div>
    </div>
  );
}

export default AdvisorsList;
