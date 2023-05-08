import {
  FallbackTemplate,
  FlightList,
  FlightFilter,
  LayoutTemplate,
  LoadingOverlay,
} from "../../../../components";
import { FilterOptionsType, FlightDetailsType } from "../../../../types/types";
import { FlightListingContainer } from "../../flight-list-logic/smart-components/FlightListingContainer";
import { LayoutContainer } from "../../flight-list-logic/smart-components/LayoutContainer";

export const FlightListingPage = () => {
  return (
    <FlightListingContainer
      renderLoading={<LoadingOverlay />}
      renderError={
        <FallbackTemplate displayMessage={"Network Error! Please try again."} />
      }
      render={({ flightList, flightFilterOptions }: FlightListingType) => {
        return (
          <LayoutContainer
            flightListData={flightList}
            render={({ filteredFinalList, selectedFilterOption }) => {
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
                  main={<FlightList flightList={filteredFinalList || []} />}
                />
              );
            }}
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
