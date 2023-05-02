import * as S from "./SelectDropdown.styles";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

export const SelectDropdown = ({ label, options, selectedOption }: Props) => {
  const [journeyRoute, setJourneyRoute] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setJourneyRoute(event.target.value as string);
    selectedOption(event.target.value, label);
  };
  return (
    <S.BoxWrapper>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" data-testid="dd-select-label">
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          inputProps={{ "data-testid": "dd-select-element" }}
          // data-testid="dd-select-element"
          value={journeyRoute}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="" data-testid="menu-items">
            <em>None</em>
          </MenuItem>
          {options?.map((option, index) => (
            <MenuItem data-testid="menu-items" key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.BoxWrapper>
  );
};

type Props = {
  label: string;
  options: string[];
  selectedOption: (args: string, arg1: string) => void;
};
