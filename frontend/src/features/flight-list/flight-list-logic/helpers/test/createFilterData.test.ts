import { createFilterData } from "../createFilterData";

describe("Create filter data function", () => {
  const testProps = [
    {
      depatureDetails: {
        country: "Germany",
        airport: "Frankfurt International Airport",
        iataCode: "FRA",
        date: "15-08-2023",
      },
      offerType: "BestPrice",
      price: { amount: "200.15", currency: "EUR" },
      returnDetails: {
        country: "Faroe Islands",
        airport: "Vagar Airport",
        iataCode: "FAE",
        date: "30-08-2023",
      },
      seatAvailability: "31",
      uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
    },
  ];
  it("should return airport code wise filter items", () => {
    const filterItems = createFilterData(testProps);
    expect(filterItems.originOptions.length).toEqual(1);
  });

  it("should have the iata code and airport name in the returned filter item for origin journey", () => {
    const filterItems = createFilterData(testProps);
    expect(filterItems.originOptions[0]).toEqual(
      "Frankfurt International Airport (FRA)"
    );
  });

  it("should have the iata code and airport name in the returned filter item for return journey", () => {
    const filterItems = createFilterData(testProps);
    expect(filterItems.returnOptions[0]).toEqual("Vagar Airport (FAE)");
  });

  it("should have only one item for same iata code entry", () => {
    const filterTestProps = [
      ...testProps,
      {
        depatureDetails: {
          country: "Germany",
          airport: "Frankfurt International Airport",
          iataCode: "FRA",
          date: "15-08-2023",
        },
        offerType: "BestPrice",
        price: { amount: "200.15", currency: "EUR" },
        returnDetails: {
          country: "Faroe Islands",
          airport: "Vagar Airport",
          iataCode: "FAE",
          date: "30-08-2023",
        },
        seatAvailability: "31",
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
      },
    ];
    const filterItems = createFilterData(filterTestProps);
    expect(filterItems.originOptions.length).toEqual(1);
  });
});
