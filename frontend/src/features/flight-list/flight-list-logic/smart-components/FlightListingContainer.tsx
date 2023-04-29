import AIRPORT_DATA from "../../../../common/static/data/airports.json";
import { useFlightList } from "../hooks/useFlightList";
import { createDefaultDate } from "../../../../common/util";

export const FlightListingContainer = ({ render }: Props) => {
  const countryWiseIataCodeDetails: AirportInfoType[] = AIRPORT_DATA;
  const { response, error, loading } = useFlightList({
    origin: "FRA",
    dest: "ROM",
    departureDate: createDefaultDate(),
    arrivalDate: createDefaultDate(),
    service: "bestprice",
  });

  const createCountryWiseFlightDetails = (flightData: FlightDataType[]) => {
    return flightData.map((eachFlight: FlightDataType) => {
      const departureDetails = countryWiseIataCodeDetails.find(
        ({ code }) => code === eachFlight.origin
      );
      const arrivalDetails = countryWiseIataCodeDetails.find(
        (each: AirportInfoType) => each.code === eachFlight.destination
      );
      const { country: departureCountryName, name: departureAirportName } =
        departureDetails as AirportInfoType;
      const { country: arrivalCountryName, name: arrivalAirportName } =
        arrivalDetails as AirportInfoType;
      return {
        ...eachFlight,
        depatureDetails: {
          departureCountryName,
          departureAirportName,
          iataCode: eachFlight.origin,
        },
        arrivalDetails: {
          arrivalCountryName,
          arrivalAirportName,
          iataCode: eachFlight.destination,
        },
      };
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Err! Please try again</div>;

  return render({
    flightDetails: response?.length && createCountryWiseFlightDetails(response),
  });
};

type Props = {
  render: (props: any) => JSX.Element;
};

type FlightDataType = {
  uuid: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  seatAvailability: string;
  price: {
    amount: string;
    currency: string;
  };
  offerType: string;
};

type AirportInfoType = {
  code: string;
  lat: string;
  lon: string;
  name: string;
  city: string;
  state: string | null;
  country: string;
  woeid: string;
  tz: string;
  phone: string;
  type: string;
  email: string;
  url: string;
  runway_length: string | null;
  elev: string | null;
  icao: string;
  direct_flights: string;
  carriers: string;
};
