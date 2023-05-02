import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { SeatLayout } from "./SeatLayout";
import { screen } from "@testing-library/react";

const testProps = {
  availableSeatCount: "31",
};

describe("<SeatLayout /> component should", () => {
  it("match its snapshot", () => {
    const view = renderWithTheme(<SeatLayout {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("should display seat count if seat availability is greater than zero", () => {
    renderWithTheme(<SeatLayout {...testProps} />);
    expect(screen.getByTestId("seat-count")).toBeDefined();
    expect(screen.getByText("31 Available Seats")).toBeDefined();
  });

  it("should not display seat count if seat availability is less than zero", () => {
    const seatTestProps = {
      availableSeatCount: "0",
    };
    renderWithTheme(<SeatLayout {...seatTestProps} />);
    expect(screen.queryByTestId("seat-count")).not.toBeInTheDocument();
  });

  it("should display fully booked message if seat availability less than zero", () => {
    const seatTestProps = {
      availableSeatCount: "0",
    };
    renderWithTheme(<SeatLayout {...seatTestProps} />);
    expect(screen.getByTestId("booked")).toBeDefined();
  });
});
