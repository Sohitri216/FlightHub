import { blueGrey, red } from "@mui/material/colors";
import styled from "styled-components";
import { styled as Mstyled } from "@mui/material/styles";

export const Wrapper = styled("div")`
  background: #f4f4f8;
  padding: 0 1rem;
`;

export const FlightInfoContainer = styled("div")`
  padding: 1rem 0;
`;

export const ThemeWrapper = Mstyled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    color: blueGrey[100],
  },
  [theme.breakpoints.up("md")]: {
    color: red[200],
  },
}));
