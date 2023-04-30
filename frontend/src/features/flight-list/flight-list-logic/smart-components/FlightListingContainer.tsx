import AIRPORT_DATA from "../../../../common/static/data/airports.json";
import { useFlightList } from "../hooks/api/useFlightList";
import { FlightItinerary, AirportData } from "../../../../types/types";
import { createFilterData } from "../util/createFilterData";

export const FlightListingContainer = ({ render }: Props) => {
  const countryWiseIataCodeDetails: AirportData[] = AIRPORT_DATA;
  const { response, error, loading } = useFlightList({
    origin: "FRA",
    dest: "ROM",
    departureDate: "2023-08-15",
    returnDate: "2023-08-30",
    service: "amadeusBestPrice",
  });

  const createCountryWiseFlightDetails = (flightData: FlightItinerary[]) =>
    flightData.map(
      ({
        uuid,
        origin,
        destination,
        departureDate,
        returnDate,
        price,
        offerType,
        seatAvailability,
      }: FlightItinerary) => {
        const departureDetails = countryWiseIataCodeDetails.find(
          ({ code }) => code === origin
        );
        const returnDetails = countryWiseIataCodeDetails.find(
          (each: AirportData) => each.code === destination
        );

        return {
          uuid,
          depatureDetails: {
            country: departureDetails?.country || "",
            airport: departureDetails?.name || "",
            iataCode: origin,
            date: departureDate.split("-").reverse().join("-"),
          },
          returnDetails: {
            country: returnDetails?.country || "",
            airport: returnDetails?.name || "",
            iataCode: destination,
            date: returnDate.split("-").reverse().join("-"),
          },
          price,
          offerType,
          seatAvailability,
        };
      }
    );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Err! Please try again</div>;
  }

  return render({
    flightList: response?.length && createCountryWiseFlightDetails(response),
    flightFilterOptions: response?.length && createFilterData(response)
  });
};

type Props = {
  render: (props: any) => JSX.Element;
};
