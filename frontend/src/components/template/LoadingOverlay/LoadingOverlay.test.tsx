import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { LoadingOverlay } from "./LoadingOverlay";
import { screen } from "@testing-library/react";

describe("<Loading OverLay /> component should", () => {
  it("match its snapshot", () => {
    const view = renderWithTheme(<LoadingOverlay />);
    expect(view).toMatchSnapshot();
  });

  it("should display loading overlay sucessfully", () => {
    renderWithTheme(<LoadingOverlay />);
    expect(screen.getByTestId("loading")).toBeDefined();
  });
});
