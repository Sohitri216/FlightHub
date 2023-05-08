import { useMemo, useState } from "react";
import { SelectedFilterProps } from "../../flight-list-ui/pages/FlightListingPage";
import { createMatchedList } from "../helpers/createMatchedList";

export const LayoutContainer = ({ flightListData, render }: Props) => {
  const [filterParams, setFilterParams] = useState<SelectedFilterProps>({
    originValue: "",
    returnValue: "",
  });
  const selectedFilterOption = (item: string, label: string) => {
    setFilterParams({
      ...filterParams,
      originValue: label === "Origin" ? item : filterParams.originValue,
      returnValue: label === "Return" ? item : filterParams.returnValue,
    });
  };
  const memoisedList = useMemo(() => {
    return createMatchedList(flightListData, filterParams);
  }, [filterParams, flightListData]);

  console.log("memoised List:", memoisedList, filterParams, flightListData);
  
  return render({
    filteredFinalList: memoisedList,
    selectedFilterOption: selectedFilterOption,
  });
};

type Props = {
  flightListData: any;
  render: (args: any) => JSX.Element;
};
