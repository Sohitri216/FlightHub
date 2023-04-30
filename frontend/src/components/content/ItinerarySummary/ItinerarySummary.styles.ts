import styled, { css } from "styled-components";
import { styled as Mstyled } from "@mui/system";

export const IternaryContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex: 0 0 100%;
  justify-content: space-between;
`;

export const Section = Mstyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "0.25rem",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: "9.375rem",
  },
}));
// export const Section = styled("div")`
//   display: flex;
//   flex-direction: row;
//   gap: 0.25rem;
//   align-items: center;
//   width: 9.375rem;

// `;

export const ItineraryCode = styled("div")<{ type?: string }>`
  ${(props) =>
    props.type === "airport" &&
    css`
      font-size: 0.725rem;
      font-style: italic;
    `}
`;

export const OfferPrice = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
`;

export const Price = styled("div")``;

export const Offer = styled("div")`
  font-style: italic;
  font-size: 0.675rem;
`;

export const JourneyDetailsWrapper = styled("div")``;
export const JourneyDetails = styled("div")``;

export const JourneyRouteBlock = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Test = styled('div')`
  

`;
export const AnotherTest = styled('div')`
  

`;