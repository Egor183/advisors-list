import { AdvisorsListType } from "types/advisors.types";
import { SELECTED_VALUES } from "../constants/filter.constants";

export const handleFilterForm = (
  advisorsList: AdvisorsListType,
  selectedValue: any
) => {
  const { status, languages } = selectedValue;
  const isLanguageChecked = Object.values(languages).includes(true);
  const isStatusBoth = status === "both";

  return advisorsList.filter((item) => {
    const hasDesiredLanguage = !!item.languages.find(
      (languageItem) => languages[languageItem]
    );

    if (isStatusBoth && !isLanguageChecked) {
      return true;
    } else if (isStatusBoth && isLanguageChecked) {
      return hasDesiredLanguage;
    } else if (!isLanguageChecked) {
      return item.status === status;
    } else {
      return item.status === status && hasDesiredLanguage;
    }
  });
};

export const handleChangeSelect = (
  advisorsList: AdvisorsListType,
  selectedValue: string
) => {
  switch (selectedValue) {
    case SELECTED_VALUES.MORE: {
      return [...advisorsList.sort((a, b) => b.reviews - a.reviews)];
    }

    case SELECTED_VALUES.LESS: {
      return [...advisorsList.sort((a, b) => a.reviews - b.reviews)];
    }

    default:
      return advisorsList;
  }
};
