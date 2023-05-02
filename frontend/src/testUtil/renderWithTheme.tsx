import { ThemeProvider as MThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import { Theme } from "../theme/Theme";

export const renderWithTheme = (component: JSX.Element) => {
  render(
    <MThemeProvider theme={Theme}>
      <>{component}</>
    </MThemeProvider>
  );
};
