import styled from "styled-components";
import { styled as Mstyled } from "@mui/system";

export const Label = styled("div")``;
export const HeadingLabel = styled("div")`
  color: #555;
  font-weight: bold;
`;
export const Section = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export const JourneyDetails = Mstyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    width: "calc(50% - 1rem)",
  },
}));
