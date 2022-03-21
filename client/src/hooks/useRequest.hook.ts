import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { API_METHODS } from "constants/api.constants";
import { setLoading } from "redux/actions/loading.actions";

export const useRequest = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const request = useCallback(
    async (url, method = API_METHODS.GET) => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(url, { method });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        return data;
      } catch (e: any) {
        setError(e.message);
        throw e;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  const clearError = useCallback(() => setError(null), []);

  return { request, error, clearError };
};
