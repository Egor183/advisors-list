import { loadAdvisors } from "../../../../../redux/actions/advisors.actions";
import { API_ROUTES } from "../../../../../constants/api.constants";
import { useCallback, useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRequest } from "../../../../../hooks/useRequest.hook";

export const useLoadAdvisors = () => {
  const { request } = useRequest();
  const dispatch = useDispatch();
  const advisors = useSelector(
    (state: RootStateOrAny) => state.advisors.currentAdvisorsList
  );
  const isLoading = useSelector(
    (state: RootStateOrAny) => state.loading.isLoading
  );

  const handleLoadAdvisors = useCallback(async () => {
    const data = await request(API_ROUTES.ADVISORS);
    dispatch(loadAdvisors(data));
  }, [dispatch, request]);

  useEffect(() => {
    (async () => {
      sessionStorage.removeItem("scrollPosition");
      await handleLoadAdvisors();
    })();
  }, [handleLoadAdvisors]);

  return { advisors, isLoading, handleLoadAdvisors };
};
