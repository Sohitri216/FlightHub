import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 672,
      lg: 1056,
      xl: 1312
    },
  },
});
