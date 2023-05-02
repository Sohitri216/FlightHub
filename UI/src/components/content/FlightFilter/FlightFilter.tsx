import { FilterOptionsType } from "../../../types/types";
import { SelectDropdown } from "../../base";
import * as S from "./FlightFilter.styles";

export const FlightFilter = ({
  options: { originOptions, returnOptions },
  selectedOption,
}: Props) => {
  return (
    <S.FilterContainer data-testid="flight-filter">
      <SelectDropdown
        label="Origin"
        options={originOptions}
        selectedOption={selectedOption}
      />
      <SelectDropdown
        label="Return"
        options={returnOptions}
        selectedOption={selectedOption}
      />
    </S.FilterContainer>
  );
};

type Props = {
  options: FilterOptionsType;
  selectedOption: (item: string, label: string) => void;
};
