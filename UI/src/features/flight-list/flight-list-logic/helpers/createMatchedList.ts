import { FlightDetailsType } from "../../../../types/types";

export const createMatchedList = (
  flightList: FlightDetailsType[],
  { originValue, returnValue }: FilterOptionType
) => {
  console.log('inside:');
  if (originValue === "" && returnValue === "") {
    return flightList;
  } else if (originValue !== "" && returnValue === "") {
    return flightList.filter(
      (eachItem) =>
        eachItem.depatureDetails.airport +
          ` (${eachItem.depatureDetails.iataCode})` ===
        originValue
    );
  } else if (originValue === "" && returnValue !== "") {
    return flightList.filter(
      (eachItem) =>
        eachItem.returnDetails.airport +
          ` (${eachItem.returnDetails.iataCode})` ===
        returnValue
    );
  } else {
    return flightList.filter(
      (eachItem) =>
        eachItem.depatureDetails.airport +
          ` (${eachItem.depatureDetails.iataCode})` ===
          originValue &&
        eachItem.returnDetails.airport +
          ` (${eachItem.returnDetails.iataCode})` ===
          returnValue
    );
  }
};

type FilterOptionType = {
  originValue: string;
  returnValue: string;
};
