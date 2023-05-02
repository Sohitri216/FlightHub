import { renderWithTheme } from "../../../../testUtil/renderWithTheme";
import { FlightListingPage } from "./FlightListingPage";
import { screen } from "@testing-library/react";

jest.mock(
  "../../flight-list-logic/smart-components/FlightListingContainer",
  () => {
    return {
      FlightListingContainer: () => <div data-testid="listing-container">Flight Listing Container</div>,
    };
  }
);

describe("<Flight Lisiting Page /> component should", () => {
  it("match its snapshot", () => {
    const view = renderWithTheme(<FlightListingPage />);
    expect(view).toMatchSnapshot();
  });

  it('should render flight listing container successfully', () => {
    renderWithTheme(<FlightListingPage />);
    expect(screen.getByTestId('listing-container')).toBeDefined();
  })
});
