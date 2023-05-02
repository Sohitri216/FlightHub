import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { screen } from "@testing-library/react";
import { FlightFilter } from "./FlightFilter";

const testProps = {
  options: {
    originOptions: ["Frankfurt International Airport (FRA)"],
    returnOptions: ["Vagar Airport (FAE)"],
  },
  selectedOption: () => jest.fn,
};

describe("<FlightList /> component should", () => {
  it("match its snapshot", () => {
    const view = renderWithTheme(<FlightFilter {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("render flight filters", () => {
    renderWithTheme(
      <FlightFilter
        options={testProps.options}
        selectedOption={testProps.selectedOption}
      />
    );
    expect(screen.getByTestId("flight-filter")).toBeDefined();
  });
});
