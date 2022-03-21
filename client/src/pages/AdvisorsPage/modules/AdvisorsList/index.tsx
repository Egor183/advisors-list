import React, { memo } from "react";
import { AdvisorDataType } from "types/advisors.types";
import logo from "assets/loader.gif";
import Advisor from "./modules/Advisor";
import { useLoadAdvisors } from "./hooks/useLoadAdvisors.hook";
import { useHandleScroll } from "./hooks/useHandleScroll.hook";

import styles from "./styles.module.css";

const AdvisorsList = () => {
  const { advisors, isLoading, handleLoadAdvisors } = useLoadAdvisors();
  const { handleScroll, listInnerRef } = useHandleScroll(
    advisors,
    handleLoadAdvisors
  );

  return (
    <>
      {!isLoading ? (
        <div
          className={styles.container}
          onScroll={handleScroll}
          ref={listInnerRef}
        >
          {advisors.map((item: AdvisorDataType) => (
            <Advisor {...item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className={styles.loaderContainer}>
          <img src={logo} className={styles.loader} />
        </div>
      )}
    </>
  );
};

export default memo(AdvisorsList);
