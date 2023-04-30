import styled, { css } from "styled-components";

export const IternaryContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex: 0 0 100%;
  justify-content: space-between;
`;

export const Section = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
`;

export const ItineraryCode = styled("div")<{ type?: string }>`
  ${(props) =>
    props.type === "airport" &&
    css`
      font-size: 0.725rem;
      font-style: italic;
    `}
`;

export const OfferPrice = styled("div")``;

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
