import { AdvisorsListType } from "../../../../../../../types/advisors.types";

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
    } else {
      return item.status === status && hasDesiredLanguage;
    }
  });
};
