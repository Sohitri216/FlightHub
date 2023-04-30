import { FlightDetailsType } from "../../../../types/types";

export const createMatchedList = (
  flightList: FlightDetailsType[],
  { originValue, returnValue }: FilterOptionType
) => {
  if (originValue === "" && returnValue === "") {
    return flightList;
  } else if (originValue !== "" && returnValue === "") {
    return flightList.filter(
      (eachItem) => eachItem.depatureDetails.iataCode === originValue
    );
  } else if (originValue === "" && returnValue !== "") {
    return flightList.filter(
      (eachItem) => eachItem.returnDetails.iataCode === returnValue
    );
  } else {
    return flightList.filter(
      (eachItem) =>
        eachItem.depatureDetails.iataCode === originValue &&
        eachItem.returnDetails.iataCode === returnValue
    );
  }
};

type FilterOptionType = {
  originValue: string;
  returnValue: string;
};
