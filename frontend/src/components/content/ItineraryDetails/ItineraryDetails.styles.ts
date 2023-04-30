import styled from "styled-components";

export const JourneyDetailsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;


export const JourneyWrapper = styled("div")`
  font-size: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex: 0 0 100%;
  justify-content: space-between;
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
