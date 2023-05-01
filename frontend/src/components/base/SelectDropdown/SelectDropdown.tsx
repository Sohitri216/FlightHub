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
    <>
      <S.BoxWrapper>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={journeyRoute}
            label={label}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options?.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </S.BoxWrapper>
    </>
  );
};

type Props = {
  label: string;
  options: string[];
  selectedOption: (args: string, arg1: string) => void;
};
