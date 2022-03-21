import { useEffect, useRef } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { resetScroll } from "redux/actions/scroll.actions";
import { AdvisorsListType } from "types/advisors.types";

export const useHandleScroll = (
  advisors: AdvisorsListType,
  handleLoadAdvisors: () => void
) => {
  const listInnerRef = useRef<HTMLDivElement>(null);
  const scrollTopCurrentPosition = sessionStorage.getItem("scrollPosition");
  const isNeedToResetScroll = useSelector(
    (state: RootStateOrAny) => state.scroll.resetScroll
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!listInnerRef.current) {
      return;
    }

    if (isNeedToResetScroll) {
      sessionStorage.removeItem("scrollPosition");
      dispatch(resetScroll(false));
    }

    listInnerRef.current.scrollTop = Number(scrollTopCurrentPosition);
  }, [scrollTopCurrentPosition, advisors, dispatch, isNeedToResetScroll]);

  const handleScroll = () => {
    if (!listInnerRef.current) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

    if (scrollTop + clientHeight !== scrollHeight) {
      return;
    }

    if (scrollTop) {
      sessionStorage.setItem("scrollPosition", `${scrollTop}`);
    }

    handleLoadAdvisors();
  };

  return { listInnerRef, handleScroll };
};
