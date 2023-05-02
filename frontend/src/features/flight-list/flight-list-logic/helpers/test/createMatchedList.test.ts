import { createMatchedList } from "../createMatchedList";

describe("Create filtered list", () => {
  it("should return the filter list when journey origin value matches", () => {
    const flightList = [
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
      {
        depatureDetails: {
          country: "Germany",
          airport: "Dortmund Airport",
          iataCode: "DTM",
          date: "15-08-2023",
        },
        offerType: "BestPrice",
        price: { amount: "200.15", currency: "EUR" },
        returnDetails: {
          country: "Italy",
          airport: "Florence Airport",
          iataCode: "FLR",
          date: "30-08-2023",
        },
        seatAvailability: "30",
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
      },
    ];

    const filterParams = {
      originValue: "Dortmund Airport (DTM)",
      returnValue: "",
    };
    const filteredList = createMatchedList(flightList, filterParams);
    expect(filteredList.length).toEqual(1);
    expect(filteredList.map((each) => each.depatureDetails.airport)[0]).toEqual(
      "Dortmund Airport"
    );
  });

  it("should return the filter list when journey return value matches", () => {
    const flightList = [
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
          country: "Italy",
          airport: "Florence Airport",
          iataCode: "FLR",
          date: "30-08-2023",
        },
        seatAvailability: "31",
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
      },
      {
        depatureDetails: {
          country: "Germany",
          airport: "Dortmund Airport",
          iataCode: "DTM",
          date: "15-08-2023",
        },
        offerType: "BestPrice",
        price: { amount: "200.15", currency: "EUR" },
        returnDetails: {
          country: "Italy",
          airport: "Florence Airport",
          iataCode: "FLR",
          date: "30-08-2023",
        },
        seatAvailability: "30",
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
      },
    ];

    const filterParams = {
      originValue: "",
      returnValue: "Florence Airport (FLR)",
    };
    const filteredList = createMatchedList(flightList, filterParams);
    expect(filteredList.length).toEqual(2);
    expect(filteredList.map((each) => each.returnDetails.airport)[0]).toEqual(
      "Florence Airport"
    );
  });
  it("should return the filter list when both journey origin value and return value matches", () => {
    const flightList = [
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
          country: "Italy",
          airport: "Florence Airport",
          iataCode: "FLR",
          date: "30-08-2023",
        },
        seatAvailability: "31",
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
      },
      {
        depatureDetails: {
          country: "Germany",
          airport: "Dortmund Airport",
          iataCode: "DTM",
          date: "15-08-2023",
        },
        offerType: "BestPrice",
        price: { amount: "200.15", currency: "EUR" },
        returnDetails: {
          country: "Italy",
          airport: "Florence Airport",
          iataCode: "FLR",
          date: "30-08-2023",
        },
        seatAvailability: "30",
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
      },
    ];

    const filterParams = {
      originValue: "Frankfurt International Airport (FRA)",
      returnValue: "Florence Airport (FLR)",
    };
    const filteredList = createMatchedList(flightList, filterParams);
    expect(filteredList.length).toEqual(1);
    expect(filteredList.map((each) => each.depatureDetails.airport)[0]).toEqual(
      "Frankfurt International Airport"
    );
    expect(filteredList.map((each) => each.returnDetails.airport)[0]).toEqual(
      "Florence Airport"
    );
  });
  it("should return empty filtered list when journey origin or destination none matches", () => {
    const flightList = [
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
          country: "Italy",
          airport: "Florence Airport",
          iataCode: "FLR",
          date: "30-08-2023",
        },
        seatAvailability: "31",
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
      },
      {
        depatureDetails: {
          country: "Germany",
          airport: "Dortmund Airport",
          iataCode: "DTM",
          date: "15-08-2023",
        },
        offerType: "BestPrice",
        price: { amount: "200.15", currency: "EUR" },
        returnDetails: {
          country: "Italy",
          airport: "Florence Airport",
          iataCode: "FLR",
          date: "30-08-2023",
        },
        seatAvailability: "30",
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa8b",
      },
    ];

    const filterParams = {
      originValue: "Dublin Airport (DUB)",
      returnValue: "Florence Airport (FLR)",
    };
    const filteredList = createMatchedList(flightList, filterParams);
    expect(filteredList.length).toEqual(0);
  });
});
