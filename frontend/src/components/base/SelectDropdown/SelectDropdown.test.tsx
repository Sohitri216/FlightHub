import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { SelectDropdown } from "./SelectDropdown";

describe("<FlightList /> component should", () => {
  const testProps = {
    label: "Origin",
    options: ["FRA", "FLR"],
    selectedOption: jest.fn(),
  };
  it("match its snapshot", () => {
    const view = renderWithTheme(<SelectDropdown {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("should display drop down input label", () => {
    renderWithTheme(<SelectDropdown {...testProps} />);
    expect(screen.getByTestId("dd-select-label")).toBeDefined();
  });

  it("should display dropdown items on click", async () => {
    renderWithTheme(<SelectDropdown {...testProps} />);
    const dropdownElement = screen.getByTestId("dd-select-element");
    fireEvent.change(dropdownElement, { target: { value: "" } });
    // await screen.findByRole("ul");
  });
});
