import styled from "styled-components";
import { styled as Mstyled } from "@mui/system";

export const Layout = Mstyled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
}));

export const ErrorWrapper = Mstyled("div")(({ theme }) => ({
  fontFamily: "'Open Sans', sans-serif",
  margin: "1rem auto",
  padding: "0.5rem",
  boxShadow: "0.1rem 0.1rem 0.3rem #888",
  backgroundColor: "#f4f4f8",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  }
}));

export const Text = styled("div")`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
