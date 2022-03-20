import { AdvisorsListType } from "../../../../../../../types/advisors.types";
import { SELECT_VALUES } from "../../../constants/constants";

export const handleChangeSelect = (
  advisorsList: AdvisorsListType,
  selectedValue: string
) => {
  switch (selectedValue) {
    case SELECT_VALUES.MORE: {
      return [...advisorsList.sort((a, b) => b.reviews - a.reviews)];
    }

    case SELECT_VALUES.LESS: {
      return [...advisorsList.sort((a, b) => a.reviews - b.reviews)];
    }

    default:
      return advisorsList;
  }
};
