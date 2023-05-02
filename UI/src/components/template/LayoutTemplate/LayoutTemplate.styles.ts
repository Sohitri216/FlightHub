import styled from "styled-components";

export const LayoutContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const FlightListingContainer = styled("div")`
  font-family: "Open Sans", sans-serif;
  background: #f4f4f8;
  height: calc(100vh - 12rem);
`;

export const FilterContainer = styled("div")`
  font-family: "Open Sans", sans-serif;
  margin: 1rem 0rem;
  padding: 0.5rem 1rem;
  background: rgb(244, 244, 248);
  height: 4rem;
`;

export const Header = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  font-family: "Lobster Two", cursive;
  font-size: 2rem;
  color: #ddd;
  background: linear-gradient(0.35turn, #000, 70%, transparent);
  padding: 1rem;
  height: 3rem;
`;
export const HeaderTitle = styled("div")``;
