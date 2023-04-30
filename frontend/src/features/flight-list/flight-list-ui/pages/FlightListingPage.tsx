/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import {
  FlightDetails,
  FlightFilter,
  LayoutTemplate,
} from "../../../../components";
import { FilterOptionsType, FlightDetailsType } from "../../../../types/types";
import { FlightListingContainer } from "../../flight-list-logic/smart-components/FlightListingContainer";
import { createMatchedList } from "../../flight-list-logic/util/createMatchedList";

export const FlightListingPage = () => {
  const [filterParams, setFilterParams] = useState<FilterOptionType>({
    originValue: "",
    returnValue: "",
  });
  return (
    <FlightListingContainer
      render={({ flightList, flightFilterOptions }: FlightListingType) => {
        const selectedFilterOption = (item: any, label: any) => {
          setFilterParams({
            ...filterParams,
            originValue: label === "Origin" ? item : filterParams.originValue,
            returnValue: label === "Return" ? item : filterParams.returnValue,
          });
        };

        return (
          <LayoutTemplate
            title={<div>Welcome to Flighthub</div>}
            filter={
              <FlightFilter
                options={flightFilterOptions}
                selectedOption={(item, label) =>
                  selectedFilterOption(item, label)
                }
              />
            }
            flightList={
              <FlightDetails
                flightList={createMatchedList(flightList, filterParams) || []}
              />
            }
          />
        );
      }}
    />
  );
};

type FlightListingType = {
  flightList: FlightDetailsType[];
  flightFilterOptions: FilterOptionsType;
};

type FilterOptionType = {
  originValue: string;
  returnValue: string;
};
