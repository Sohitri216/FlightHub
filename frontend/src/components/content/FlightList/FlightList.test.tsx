import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { FlightList } from "./FlightList";
import { screen } from "@testing-library/react";

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

jest.mock("../../base/Accordion/Accordion", () => {
  return {
    Accordion: () => {
      return <div data-testid="flight-item">Flight List Accordion</div>;
    },
  };
});

jest.mock("../../template/FallbackTemplate/FallbackTemplate", () => {
  return {
    FallbackTemplate: () => {
      return <div data-testid="fallback-template">No items found</div>;
    },
  };
});

describe("<FlightList /> component should", () => {
  it("match its snapshot", () => {
    const view = renderWithTheme(<FlightList flightList={testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("render list of flights successfully for a non-empty list", () => {
    renderWithTheme(<FlightList flightList={testProps} />);
    expect(screen.getByTestId("flight-item-list")).toBeDefined();
  });

  it("should match the item count for a non empty list", () => {
    const listTestProps = [
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
        uuid: "0d8e125a-db32-432b-beba-db4f9520aa83",
      },
    ];
    renderWithTheme(<FlightList flightList={listTestProps} />);
    const testItems = screen.getAllByTestId("flight-item");
    expect(testItems.length).toBe(2);
  });

  it("should not render list of flights for an empty list", () => {
    renderWithTheme(<FlightList flightList={[]} />);
    expect(screen.queryByTestId("flight-item-list")).not.toBeInTheDocument();
  });

  it("should render fallback template for empty list", () => {
    renderWithTheme(<FlightList flightList={[]} />);
    expect(screen.getByTestId("fallback-template")).toBeDefined();
  });
});
