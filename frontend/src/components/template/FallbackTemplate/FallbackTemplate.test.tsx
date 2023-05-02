import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { FallbackTemplate } from "./FallbackTemplate";
import { screen } from "@testing-library/react";

describe("<Fallback Template /> component should", () => {
  const testProps = {
    displayMessage: "Error Message",
  };
  it("match its snapshot", () => {
    const view = renderWithTheme(<FallbackTemplate {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("should display loading overlay sucessfully", () => {
    renderWithTheme(<FallbackTemplate {...testProps} />);
    expect(screen.getByTestId("error-section")).toBeDefined();
  });

  it("should display error message successfully", () => {
    renderWithTheme(<FallbackTemplate {...testProps} />);
    expect(screen.getByText("Error Message")).toBeDefined();
  });
});
