/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import {
  FallbackTemplate,
  FlightDetails,
  FlightFilter,
  LayoutTemplate,
  LoadingOverlay,
} from "../../../../components";
import { FilterOptionsType, FlightDetailsType } from "../../../../types/types";
import { FlightListingContainer } from "../../flight-list-logic/smart-components/FlightListingContainer";
import { createMatchedList } from "../../flight-list-logic/helpers/createMatchedList";

export const FlightListingPage = () => {
  const [filterParams, setFilterParams] = useState<FilterOptionType>({
    originValue: "",
    returnValue: "",
  });
  return (
    <FlightListingContainer
      renderLoading={<LoadingOverlay />}
      renderError={
        <FallbackTemplate displayMessage={"Network Error! Please try again."} />
      }
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
            title={<>FlightHub</>}
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
