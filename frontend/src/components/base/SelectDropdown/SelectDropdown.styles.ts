import { Box } from "@mui/material";
import styled from "styled-components";
import { styled as Mstyled } from "@mui/system";


export const DropdownContainer = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const BoxWrapper = Mstyled(Box)(({ theme }) => ({
  background: '#fff',
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    minWidth: "8.5rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "17rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "20rem",
  },
}));
