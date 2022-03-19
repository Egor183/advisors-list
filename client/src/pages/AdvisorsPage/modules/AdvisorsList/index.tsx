import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useRequest } from "../../../../hooks/useRequest.hook";
import { loadAdvisors } from "../../../../redux/actions/advisors.actions";
import { AdvisorDataType } from "../../../../types/advisors.types";
import Advisor from "./modules/Advisor";

import styles from "./styles.module.css";

const AdvisorsList = () => {
  const { loading, error, request } = useRequest();

  const dispatch = useDispatch();

  const advisors = useSelector(
    (state: RootStateOrAny) => state.advisors.currentAdvisorsList
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/advisors");
        dispatch(loadAdvisors(data));
      } catch (e) {
        //
      }
    })();
  }, [dispatch, request]);

  return (
    <div className={styles.container}>
      {advisors.map((item: AdvisorDataType) => (
        <Advisor {...item} key={item.id} />
      ))}
    </div>
  );
};

export default memo(AdvisorsList);
