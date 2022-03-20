import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { API_ROUTES } from "../../../../constants/api.constants";
import { useRequest } from "../../../../hooks/useRequest.hook";
import { loadAdvisors } from "../../../../redux/actions/advisors.actions";
import { AdvisorDataType } from "../../../../types/advisors.types";
import Advisor from "./modules/Advisor";
import logo from "src/assets/loader.gif";

import styles from "./styles.module.css";

const AdvisorsList = () => {
  const { request } = useRequest();
  const dispatch = useDispatch();
  const advisors = useSelector(
    (state: RootStateOrAny) => state.advisors.currentAdvisorsList
  );
  const isLoading = useSelector(
    (state: RootStateOrAny) => state.loading.isLoading
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await request(API_ROUTES.ADVISORS);
        dispatch(loadAdvisors(data));
      } catch (e) {
        //
      }
    })();
  }, [dispatch, request]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <img src={logo} className={styles.loader} />
        </div>
      ) : (
        advisors.map((item: AdvisorDataType) => (
          <Advisor {...item} key={item.id} />
        ))
      )}
    </div>
  );
};

export default memo(AdvisorsList);
