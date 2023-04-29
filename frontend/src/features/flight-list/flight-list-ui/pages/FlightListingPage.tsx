import {
  FlightDetails,
  FlightFilter,
  LayoutTemplate,
} from "../../../../components";
import { FlightListingContainer } from "../../flight-list-logic/smart-components/FlightListingContainer";

export const FlightListingPage = () => {
  return (
    <FlightListingContainer
      render={(data) => {
        console.log("rendered data:", data);
        return (
          <LayoutTemplate
            title={<div>Page Title</div>}
            subtitle={<div>Page subtitle</div>}
            filter={<FlightFilter />}
            flightList={<FlightDetails />}
          />
        );
      }}
    />
  );
};
