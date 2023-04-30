import { CheckCircleRounded } from "@mui/icons-material";
import * as S from "./SeatLayout.styles";

export const SeatLayout = ({
  availableSeatCount,
  displayInSummary,
}: FlightSeat) => {
  return (
    <S.FlightSeat>
      <S.Icon>
        <CheckCircleRounded sx={{ fontSize: displayInSummary ? '0.875rem' : '1.125rem' }} />
      </S.Icon>
      <S.AvailableCount>{availableSeatCount} Available Seats</S.AvailableCount>
    </S.FlightSeat>
  );
};

type FlightSeat = {
  availableSeatCount: string;
  displayInSummary?: boolean;
};
