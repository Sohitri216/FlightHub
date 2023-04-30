import {
  FlightDetails,
  FlightFilter,
  LayoutTemplate,
} from "../../../../components";
import { FlightDetailsType } from "../../../../types/types";
import { FlightListingContainer } from "../../flight-list-logic/smart-components/FlightListingContainer";

export const FlightListingPage = () => {
  return (
    <FlightListingContainer
      render={(flightData: FlightListingType) => {
        console.log("rendered data:", flightData);
        return (
          <LayoutTemplate
            title={<div>Welcome to Flighthub</div>}
            filter={<FlightFilter />}
            flightList={
              <FlightDetails flightList={flightData?.flightList || []} />
            }
          />
        );
      }}
    />
  );
};

type FlightListingType = {
  flightList: FlightDetailsType[];
};
