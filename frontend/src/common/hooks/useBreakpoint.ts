import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useBreakpoint = () => {
  const theme = useTheme();
  let screenSize;
  console.log(useMediaQuery(theme.breakpoints.up("sm")))
  const md = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const lg = useMediaQuery(theme.breakpoints.up("md"));
  const xlg = useMediaQuery(theme.breakpoints.up("lg"));

  if (md) {
    screenSize = "md";
  } else if (lg) {
    screenSize = "lg";
  } else if (xlg) {
    screenSize = "lg";
  } else {
    screenSize = "";
  }
  console.log('screensize:', screenSize);
  return screenSize;
};
