import { ThemeProvider as MThemeProvider } from "@mui/material/styles";
import { Theme } from "./Theme";

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MThemeProvider theme={Theme}>
      <>{children}</>
    </MThemeProvider>
  );
};

type Props = {
  children: JSX.Element;
};
