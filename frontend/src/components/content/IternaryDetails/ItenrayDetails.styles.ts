import { blueGrey, red } from "@mui/material/colors";
import styled, { css } from "styled-components";
import { styled as Mstyled } from "@mui/material/styles";

export const JourneyDetailsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const JourneyDetails = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: calc(50% - 1rem);

  //ToDo: Take a look;
  /* background-color: #fff;
  padding: 1rem; */
`;
export const Section = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

// export const JourneyWrapper = styled("div")`
//   font-size: 0.875rem;
//   display: grid;
//   grid-gap: 1rem;
//   grid-template-columns: repeat(3, 1fr);
// `;

export const JourneyWrapper = styled("div")`
  font-size: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex: 0 0 100%;
  justify-content: space-between;
`;

export const Label = styled("div")``;
export const HeadingLabel = styled("div")`
  color: #555;
  font-weight: bold;
`;

export const FlightSeat = styled("div")`
  font-weight: 600;
  color: #2a8442;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Icon = styled("div")``;
export const AvailableCount = styled("div")``;

// export const JourneyWrapper = Mstyled("div")(({ theme }) => ({
//   fontSize: "0.875rem",
//   display: "grid",
//   // gridGap: "1rem",
//   // display: grid;
//   // grid-gap: 1rem;
//   [theme.breakpoints.down("md")]: {
//     gridTemplateColumns: 'repeat(1, 1fr)',
//     gridGap: "0.5rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: "0.5rem",
//   },
//   [theme.breakpoints.up("lg")]: {
//     gridTemplateColumns: 'repeat(4, 1fr)',
//     gridGap: "0.5rem",
//   },
//   [theme.breakpoints.up("lg")]: {
//     gridTemplateColumns: 'repeat(5, 1fr)',
//     gridGap: "0.5rem",
//   },
// }));
