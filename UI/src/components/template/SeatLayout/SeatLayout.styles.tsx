import styled, { css } from "styled-components";

const flexlayout = css`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const FlightSeat = styled("div")`
  font-weight: 600;
  font-size: 0.875rem;
`;

export const Icon = styled("div")`
  display: flex;
  align-items: center;
`;
export const AvailableCount = styled("div")``;

export const SeatAvailableSection = styled("div")`
  ${flexlayout};
  color: #2a8442;
`;
export const BookedSection = styled("div")`
  ${flexlayout};
  color: #d0342c;
`;
