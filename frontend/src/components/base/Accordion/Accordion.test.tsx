import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { screen, fireEvent } from "@testing-library/react";
import { Accordion } from "./Accordion";

const testProps = {
  summary: <div>Accordion Summary</div>,
  details: <div>Accordion Details</div>,
};

describe("<FlightList /> component should", () => {
  it("match its snapshot", () => {
    const view = renderWithTheme(<Accordion {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("should render accordion label", () => {
    renderWithTheme(<Accordion {...testProps} />);
    expect(screen.getByTestId("accordion-label")).toBeDefined();
  });

  it("should render accordion details", () => {
    renderWithTheme(<Accordion {...testProps} />);
    expect(screen.getByTestId("accordion-details")).toBeDefined();
  });

  it("should render accordion collapsed icon initially", () => {
    renderWithTheme(<Accordion {...testProps} />);
    expect(screen.getByTestId("collapsed")).toBeDefined();
  });

  it("should not render accordion expanded icon initially", () => {
    renderWithTheme(<Accordion {...testProps} />);
    expect(screen.queryByTestId("expanded")).not.toBeInTheDocument();
  });

  it("should toggle accordion state on Click", async () => {
    renderWithTheme(<Accordion {...testProps} />);
    const accordionElement = screen.getByTestId("accordion-label");
    fireEvent.click(accordionElement);
    await screen.findByTestId("expanded");
    fireEvent.click(accordionElement);
    await screen.findByTestId("collapsed");
  });
});
