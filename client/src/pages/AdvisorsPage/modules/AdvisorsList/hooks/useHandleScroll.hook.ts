import { AdvisorsListType } from "../../../../../types/advisors.types";
import { useEffect, useRef } from "react";

export const useHandleScroll = (
  advisors: AdvisorsListType,
  handleLoadAdvisors: () => void
) => {
  const listInnerRef = useRef<HTMLDivElement>(null);
  const scrollTopCurrentPosition = sessionStorage.getItem("scrollPosition");

  useEffect(() => {
    if (!listInnerRef.current) {
      return;
    }

    listInnerRef.current.scrollTop = Number(scrollTopCurrentPosition);
  }, [scrollTopCurrentPosition, advisors]);

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
