import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { API_METHODS } from "constants/api.constants";
import { setLoading } from "redux/actions/loading.actions";
import { setError } from "redux/actions/error.actions";

export const useRequest = () => {
  const dispatch = useDispatch();

  const request = useCallback(
    async (url, method = API_METHODS.GET) => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(url, { method });
        const data = await response.json();

        return data;
      } catch (e: any) {
        dispatch(setError(true));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  return request;
};
