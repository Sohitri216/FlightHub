import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { ItinerarySummary } from "./ItinerarySummary";
import { screen } from "@testing-library/react";
import { useBreakpoint } from "../../../common/hooks/useBreakpoint";

const testProps = {
  depatureDetails: {
    country: "Germany",
    airport: "Frankfurt International Airport",
    iataCode: "FRA",
    date: "15-08-2023",
  },
  returnDetails: {
    country: "Faroe Islands",
    airport: "Vagar Airport",
    iataCode: "FAE",
    date: "30-08-2023",
  },
  offerType: "BestPrice",
  price: "€200.15",
  availableSeatCount: "31",
};

jest.mock("../../template/SeatLayout/SeatLayout", () => {
  return {
    SeatLayout: () => (
      <div>
        <div data-testid="seat-layout-template">Seat Arranagement</div>
      </div>
    ),
  };
});

jest.mock("../../../common/hooks/useBreakpoint");

describe("<ItinerarySummary /> component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("match its snapshot", () => {
    const view = renderWithTheme(<ItinerarySummary {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("should display flight take off icon and flight landing icon", () => {
    renderWithTheme(<ItinerarySummary {...testProps} />);
    expect(screen.getByTestId("takeoff-icon")).toBeDefined();
  });
  it("should display offer price", () => {
    renderWithTheme(<ItinerarySummary {...testProps} />);
    expect(screen.getByTestId("offer-price")).toBeDefined();
  });

  it("should display location name and location code for screen size larger than medium", () => {
    (useBreakpoint as jest.Mock).mockReturnValueOnce("lg");
    renderWithTheme(<ItinerarySummary {...testProps} />);
    expect(screen.getAllByTestId("journey-location")).toBeDefined();
    expect(screen.getAllByTestId("landing-icon")).toBeDefined();
  });

  it("should display seat Layout for greater than small screen", () => {
    (useBreakpoint as jest.Mock).mockReturnValueOnce("lg");
    renderWithTheme(<ItinerarySummary {...testProps} />);
    expect(screen.getByTestId("seat-layout-template")).toBeDefined();
  });

  it("should not render seat Layout for greater than mediumscreen", () => {
    (useBreakpoint as jest.Mock).mockReturnValueOnce("sm");
    renderWithTheme(<ItinerarySummary {...testProps} />);
    expect(
      screen.queryByTestId("seat-layout-template")
    ).not.toBeInTheDocument();
  });
});
