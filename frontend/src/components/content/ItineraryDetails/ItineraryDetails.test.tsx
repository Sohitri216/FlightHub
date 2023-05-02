import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { ItineraryDetails } from "./ItineraryDetails";
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
  availableSeatCount: "31",
};

jest.mock(
  "../../template/JourneyDetailsTemplate/JourneyDetailsTemplate",
  () => {
    return {
      JourneyDetailsTemplate: () => (
        <div>
          <div data-testid="journey-details-template">JourneyDetails</div>
        </div>
      ),
    };
  }
);
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

describe("<ItineraryDetails /> component should", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("match its snapshot", () => {
    const view = renderWithTheme(<ItineraryDetails {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("should render journey details section", () => {
    renderWithTheme(<ItineraryDetails {...testProps} />);
    expect(screen.getByTestId("journey-details")).toBeDefined();
  });

  it("should render seat Layout for medium screen", () => {
    (useBreakpoint as jest.Mock).mockReturnValueOnce("md");
    renderWithTheme(<ItineraryDetails {...testProps} />);
    expect(screen.getByTestId("seat-layout-template")).toBeDefined();
  });

  it("should not render seat Layout for less than medium screen", () => {
    (useBreakpoint as jest.Mock).mockReturnValueOnce("sm");
    renderWithTheme(<ItineraryDetails {...testProps} />);
    expect(
      screen.queryByTestId("seat-layout-template")
    ).not.toBeInTheDocument();
  });

  it("should render departure and return components", () => {
    renderWithTheme(<ItineraryDetails {...testProps} />);
    const testItems = screen.getAllByTestId("journey-details-template");
    expect(testItems).toHaveLength(2);
  });
});
