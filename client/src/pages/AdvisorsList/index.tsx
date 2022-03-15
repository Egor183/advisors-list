import React, { useCallback, useEffect } from "react";
import { useRequest } from "../../hooks/useRequest.hook";
import Filter from "./modules/Filter";

import styles from "./styles.module.css";

function AdvisorsList() {
  const { loading, error, request } = useRequest();

  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/advisors");
        console.log(data, "dedede");
      } catch (e) {
        //
      }
    })();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterContainer}>
        <Filter />
      </div>
      <div className={styles.contentContainer}>1</div>
    </div>
  );
}

export default AdvisorsList;
