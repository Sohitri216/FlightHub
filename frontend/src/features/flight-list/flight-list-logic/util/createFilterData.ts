import { FlightItinerary } from "../../../../types/types";

export const createFilterData = (
  flightList: FlightItinerary[]
): FilterOptionsType => {
  const filterItems = {
    originOptions: [],
    returnOptions: [],
  };

  const filterOptions = flightList.reduce(
    (
      acc: { originOptions: string[]; returnOptions: string[] },
      eachItem: FlightItinerary
    ): any => {
      const matchedOrigin = acc.originOptions.find(
          (each) => each === eachItem.origin
        ),
        matchedDestination = acc.returnOptions.find(
          (each) => each === eachItem.destination
        );
      if (!matchedOrigin) {
        acc.originOptions = [...acc.originOptions, eachItem.origin];
      }
      if (!matchedDestination) {
        acc.returnOptions = [...acc.returnOptions, eachItem.destination];
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
