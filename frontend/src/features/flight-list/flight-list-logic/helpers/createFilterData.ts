import { FlightDetailsType } from "../../../../types/types";

export const createFilterData = (
  flightList: FlightDetailsType[]
): FilterOptionsType => {
  const filterItems = {
    originOptions: [],
    returnOptions: [],
  };

  const filterOptions = flightList.reduce(
    (
      acc: { originOptions: string[]; returnOptions: string[] },
      { depatureDetails, returnDetails }: FlightDetailsType
    ): FilterOptionsType => {
      const matchedOrigin = acc.originOptions.find(
          (each) =>
            each === depatureDetails.airport + ` (${depatureDetails.iataCode})`
        ),
        matchedDestination = acc.returnOptions.find(
          (each) =>
            each === returnDetails.airport + ` (${returnDetails.iataCode})`
        );
      if (!matchedOrigin) {
        acc.originOptions = [
          ...acc.originOptions,
          depatureDetails.airport + ` (${depatureDetails.iataCode})`,
        ];
      }
      if (!matchedDestination) {
        acc.returnOptions = [
          ...acc.returnOptions,
          returnDetails.airport + ` (${returnDetails.iataCode})`,
        ];
      }
      return acc;
    },
    filterItems
  );
  return filterOptions;
};

type FilterOptionsType = {
  originOptions: string[];
  returnOptions: string[];
};
