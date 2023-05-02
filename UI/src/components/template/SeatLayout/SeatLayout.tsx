import { CheckCircleRounded, Lock } from "@mui/icons-material";
import * as S from "./SeatLayout.styles";

export const SeatLayout = ({ availableSeatCount }: FlightSeat) => {
  return (
    <S.FlightSeat>
      {Number(availableSeatCount) > 0 ? (
        <S.SeatAvailableSection data-testid="available-section">
          <S.Icon>
            <CheckCircleRounded />
          </S.Icon>
          <S.AvailableCount data-testid="seat-count">
            {availableSeatCount} Available Seats
          </S.AvailableCount>
        </S.SeatAvailableSection>
      ) : (
        <S.BookedSection data-testid="booked">
          <S.Icon>
            <Lock />
          </S.Icon>
          <S.AvailableCount>Fully Booked</S.AvailableCount>
        </S.BookedSection>
      )}
    </S.FlightSeat>
  );
};

type FlightSeat = {
  availableSeatCount: string;
};
