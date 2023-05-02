import {
  AirportData,
  FlightDetailsType,
  FlightItinerary,
} from "../../../../types/types";
import AIRPORT_DATA from "../../../../common/static/data/airports.json";
const countryWiseIataCodeDetails: AirportData[] = AIRPORT_DATA;

export const createCountryWiseFlightDetails = (
  flightData: FlightItinerary[]
): FlightDetailsType[] =>
  flightData?.map(
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
          country: departureDetails?.country || "-",
          airport: departureDetails?.name || "-",
          iataCode: origin || "-",
          date: departureDate.split("-").reverse().join("-"),
        },
        returnDetails: {
          country: returnDetails?.country || "-",
          airport: returnDetails?.name || "-",
          iataCode: destination || "-",
          date: returnDate.split("-").reverse().join("-"),
        },
        price,
        offerType,
        seatAvailability,
      };
    }
  );
