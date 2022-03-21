export type AdvisorDataType = {
  name: string;
  reviews: number;
  status: string;
  image: string;
  languages: string[];
  id: string;
};

export type AdvisorsListType = AdvisorDataType[];

export type ChangeAdvisorsListFunctionType = (
  advisorsList: AdvisorsListType,
  selectedValue: any
) => AdvisorsListType;
