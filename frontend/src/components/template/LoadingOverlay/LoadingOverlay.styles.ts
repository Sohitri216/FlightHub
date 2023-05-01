import styled from "styled-components";
import { Box } from "@mui/material";

export const LoadingOverlay = styled("div")`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ddd;
`;

export const BoxWrapper = styled(Box)`
  width: 100%;
`;
