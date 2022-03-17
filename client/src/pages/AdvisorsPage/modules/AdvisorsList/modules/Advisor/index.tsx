import classNames from "classnames";
import React, { memo } from "react";
import { AdvisorDataType } from "../../../../../../types/advisors.types";

import styles from "./styles.module.css";

const Advisor: React.FC<AdvisorDataType> = ({
  name,
  reviews,
  status,
  languages,
  image,
}) => {
  return (
    <div className={styles.advisorContainer}>
      <div className={styles.container}>
        <img src={image} className={styles.image} />
      </div>

      <div className={styles.container}>
        <h3 className={classNames(styles.name, styles.fontFamily)}>{name}</h3>
        <p className={classNames(styles.description, styles.fontFamily)}>
          status: {status}
        </p>
        <p className={classNames(styles.description, styles.fontFamily)}>
          reviews: {reviews}
        </p>
        <p className={classNames(styles.description, styles.fontFamily)}>
          languages: {languages.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default memo(Advisor);
