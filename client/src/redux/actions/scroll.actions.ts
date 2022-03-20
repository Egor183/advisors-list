import { RESET_SCROLL } from "../action-types/scroll.action-types";

export const resetScroll = (resetScroll: boolean) => {
  return { type: RESET_SCROLL, payload: resetScroll };
};
