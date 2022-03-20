import React, { memo } from "react";
import Advisor from "./modules/Advisor";
import logo from "src/assets/loader.gif";
import { useLoadAdvisors } from "./hooks/useLoadAdvisors.hook";
import { useHandleScroll } from "./hooks/useHandleScroll.hook";
import { AdvisorDataType } from "../../../../types/advisors.types";

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
