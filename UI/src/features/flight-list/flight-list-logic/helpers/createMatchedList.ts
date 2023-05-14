import { FlightDetailsType } from "../../../../types/types";

export const createMatchedList = (
  flightList: FlightDetailsType[],
  { originValue, returnValue }: FilterOptionType
) => {
  let result = flightList;
  if (originValue && returnValue) {
    result = flightList.filter(
      (eachItem) =>
        eachItem.depatureDetails.airport +
          ` (${eachItem.depatureDetails.iataCode})` ===
          originValue &&
        eachItem.returnDetails.airport +
          ` (${eachItem.returnDetails.iataCode})` ===
          returnValue
    );
  } else if (originValue || returnValue) {
    result = originValue
      ? flightList.filter(
          (eachItem) =>
            eachItem.depatureDetails.airport +
              ` (${eachItem.depatureDetails.iataCode})` ===
            originValue
        )
      : flightList.filter(
          (eachItem) =>
            eachItem.returnDetails.airport +
              ` (${eachItem.returnDetails.iataCode})` ===
            returnValue
        );
  }
  return result;
};

type FilterOptionType = {
  originValue: string;
  returnValue: string;
};
