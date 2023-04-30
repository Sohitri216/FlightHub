import AIRPORT_DATA from "../../../../common/static/data/airports.json";
import { useFlightList } from "../hooks/useFlightList";
import { createDefaultDate } from "../../../../common/util";
import { FlightIntenary, AirportData } from "../../../../types/types";

export const FlightListingContainer = ({ render }: Props) => {
  const countryWiseIataCodeDetails: AirportData[] = AIRPORT_DATA;
  const { response, error, loading } = useFlightList({
    origin: "FRA",
    dest: "ROM",
    departureDate: createDefaultDate(),
    arrivalDate: createDefaultDate(),
    service: "bestprice",
  });

  const createCountryWiseFlightDetails = (flightData: FlightIntenary[]) =>
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
      }: FlightIntenary) => {
        const departureDetails = countryWiseIataCodeDetails.find(
          ({ code }) => code === origin
        );
        const arrivalDetails = countryWiseIataCodeDetails.find(
          (each: AirportData) => each.code === destination
        );

        return {
          uuid,
          depatureDetails: {
            country: departureDetails?.country || "",
            airport: departureDetails?.name || "",
            iataCode: origin,
            date: departureDate,
          },
          arrivalDetails: {
            country: arrivalDetails?.country || "",
            airport: arrivalDetails?.name || "",
            iataCode: destination,
            date: returnDate,
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
  });
};

type Props = {
  render: (props: any) => JSX.Element;
};
