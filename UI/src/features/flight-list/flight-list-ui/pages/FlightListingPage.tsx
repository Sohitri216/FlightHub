/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import {
  FallbackTemplate,
  FlightList,
  FlightFilter,
  LayoutTemplate,
  LoadingOverlay,
} from "../../../../components";
import { FilterOptionsType, FlightDetailsType } from "../../../../types/types";
import { FlightListingContainer } from "../../flight-list-logic/smart-components/FlightListingContainer";
import { createMatchedList } from "../../flight-list-logic/helpers/createMatchedList";

export const FlightListingPage = () => {
  const [filterParams, setFilterParams] = useState<SelectedFilterProps>({
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
        const selectedFilterOption = (item: string, label: string) => {
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
            main={
              <FlightList
                flightList={createMatchedList(flightList, filterParams) || []}
              />
            }
          />
        );
      }}
    />
  );
};

export type SelectedFilterProps = {
  originValue: string;
  returnValue: string;
};

export type FlightListingType = {
  flightList: FlightDetailsType[];
  flightFilterOptions: FilterOptionsType;
};
