import { FlightDetailsType } from "../../../../../types/types";
import { createCountryWiseFlightDetails } from "../createCountryWiseFlightDetails";

describe("Create Country Wise Flight Details", () => {
  const testProps = [
    {
      uuid: "",
      origin: "FRA",
      destination: "FAE",
      departureDate: "2023-08-15",
      returnDate: "2023-08-30",
      seatAvailability: "31",
      price: {
        amount: "200.15",
        currency: "EUR",
      },
      offerType: "BestPrice",
    },
  ];

  it("should include country wise departure details", () => {
    const flightDetails = createCountryWiseFlightDetails(testProps);
    expect(flightDetails.length).toBe(1);
  });

  it("should include departure country airport name", () => {
    const flightDetails = createCountryWiseFlightDetails(testProps);
    expect(
      flightDetails.map(
        (each: FlightDetailsType) => each.depatureDetails.airport
      )[0]
    ).toEqual("Frankfurt International Airport");
  });

  it("should include return country airport name", () => {
    const flightDetails = createCountryWiseFlightDetails(testProps);
    expect(
      flightDetails.map(
        (each: FlightDetailsType) => each.returnDetails.airport
      )[0]
    ).toEqual("Vagar Airport");
  });

  it("should return date in dd-mm-yyyy format", () => {
    const flightDetails = createCountryWiseFlightDetails(testProps);
    expect(
      flightDetails.map(
        (each: FlightDetailsType) => each.depatureDetails.date
      )[0]
    ).toEqual("15-08-2023");
    expect(
      flightDetails.map((each: FlightDetailsType) => each.returnDetails.date)[0]
    ).toEqual("30-08-2023");
  });

  it("should include price", () => {
    const flightDetails = createCountryWiseFlightDetails(testProps);
    expect(
      flightDetails.map((each: FlightDetailsType) => each.price)[0].amount
    ).toEqual("200.15");
  });

  it("should include offer type", () => {
    const flightDetails = createCountryWiseFlightDetails(testProps);
    expect(
      flightDetails.map((each: FlightDetailsType) => each.offerType)[0]
    ).toEqual("BestPrice");
  });
  it("should include available seats", () => {
    const flightDetails = createCountryWiseFlightDetails(testProps);
    expect(
      flightDetails.map((each: FlightDetailsType) => each.seatAvailability)[0]
    ).toEqual("31");
  });
});
