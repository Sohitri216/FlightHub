import { blueGrey, red } from "@mui/material/colors";
import styled, { css } from "styled-components";
import { styled as Mstyled } from "@mui/material/styles";

export const Wrapper = styled("div")<{ count?: boolean }>`
  padding: 0 1rem;
  ${(props) =>
    props.count &&
    css`
      background: #f4f4f8;
    `}
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
