import styled, { css } from "styled-components";

export const Label = styled("div")<{ type?: string }>`
  ${(props) =>
    props.type === "airport" &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    `}
`;
export const HeadingLabel = styled("div")`
  color: #555;
  font-weight: bold;
`;
export const Section = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  /* height: 100%; */
`;

export const JourneyDetails = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: calc(50% - 1rem);
`;
