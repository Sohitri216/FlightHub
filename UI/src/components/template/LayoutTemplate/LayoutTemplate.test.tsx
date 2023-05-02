import { renderWithTheme } from "../../../testUtil/renderWithTheme";
import { LayoutTemplate } from "./LayoutTemplate";
import { screen } from "@testing-library/react";

const testProps = {
  title: <div>Page Title</div>,
  filter: <div>Page Filter Section</div>,
  main: <div>Main Container</div>,
};

describe("<LayoutTemplate /> component should", () => {
  it("match its snapshot", () => {
    const view = renderWithTheme(<LayoutTemplate {...testProps} />);
    expect(view).toMatchSnapshot();
  });

  it("should render title section if present", () => {
    renderWithTheme(<LayoutTemplate {...testProps} />);
    expect(screen.getByTestId("title")).toBeDefined();
  });

  it("should render filter section if present", () => {
    renderWithTheme(<LayoutTemplate {...testProps} />);
    expect(screen.getByTestId("filter")).toBeDefined();
  });
  it("should render main section if present", () => {
    renderWithTheme(<LayoutTemplate {...testProps} />);
    expect(screen.getByTestId("main")).toBeDefined();
  });
});
