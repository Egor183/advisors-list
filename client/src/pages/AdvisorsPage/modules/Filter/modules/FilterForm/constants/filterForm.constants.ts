import { STATUS_VALUES } from "../../../constants/filter.constants";

export const RADIO_BUTTON_ITEMS = [
  { value: STATUS_VALUES.BOTH, label: "Both", key: 0 },
  { value: STATUS_VALUES.ONLINE, label: "Online", key: 1 },
  { value: STATUS_VALUES.OFFLINE, label: "Offline", key: 2 },
];

export const CHECKBOX_ITEMS = [
  { language: "English", key: 0 },
  { language: "Spanish", key: 1 },
  { language: "France", key: 2 },
  { language: "German", key: 3 },
];
