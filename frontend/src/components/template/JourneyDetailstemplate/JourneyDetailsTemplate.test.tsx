import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { JourneyDetailsTemplate } from "./JourneyDetailsTemplate";
import { screen } from "@testing-library/react";

describe("<JourneyDetailsTemplate /> component should", () => {
  const testProps = {
    journeyType: "Origin",
    country: "Germany",
    airport: "Frankfurt International Airport",
    iataCode: "FRA",
    date: "15-08-2023",
  };
  it("match its snapshot", () => {
    const view = renderWithTheme(<JourneyDetailsTemplate {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("should display journey conatiner sucessfully", () => {
    renderWithTheme(<JourneyDetailsTemplate {...testProps} />);
    expect(screen.getByTestId("jouney-container")).toBeDefined();
  });

  it("should display journey origin details sucessfully", () => {
    renderWithTheme(<JourneyDetailsTemplate {...testProps} />);
    expect(screen.getByText("Origin")).toBeDefined();
    expect(screen.getByText("Germany")).toBeDefined();
    expect(screen.getByText("15-08-2023")).toBeDefined();
    expect(
      screen.getByText("Frankfurt International Airport (FRA)")
    ).toBeDefined();
  });
});
