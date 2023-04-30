import * as S from "./ItenrayDetails.styles";
import {
  CalendarMonth,
  Flight,
  Public,
} from "@mui/icons-material";
import { useBreakpoint } from "../../../common/hooks/useBreakpoint";
import { SeatLayout } from "../../template/SeatLayout/SeatLayout";

export const ItenaryDetails = ({
  availableSeatCount,
  depatureDetails: {
    airport: departureAirport,
    country: departureCountry,
    iataCode: departureIata,
    date: departureDate,
  },
  arrivalDetails: {
    airport: arrivalAirport,
    country: arrivalCountry,
    iataCode: arrivalIata,
    date: arrivalDate,
  },
}: JourneyType) => {
  const breakpoint = useBreakpoint();
  return (
    <S.JourneyDetailsWrapper>
      {breakpoint === "md" && (
        <SeatLayout availableSeatCount={availableSeatCount} />
      )}
      <S.JourneyWrapper>
        <S.JourneyDetails>
          <S.HeadingLabel>Departure</S.HeadingLabel>
          <S.Section>
            <CalendarMonth />
            <S.Label>{departureDate}</S.Label>
          </S.Section>
          <S.Section>
            <Flight />
            <S.Label>
              {departureAirport} ({departureIata})
            </S.Label>
          </S.Section>
          <S.Section>
            <Public />
            <S.Label>{departureCountry}</S.Label>
          </S.Section>
        </S.JourneyDetails>
        <S.JourneyDetails>
          <S.HeadingLabel>Arrival</S.HeadingLabel>
          <S.Section>
            <CalendarMonth />
            <S.Label>{arrivalDate}</S.Label>
          </S.Section>
          <S.Section>
            <Flight />
            <S.Label>
              {arrivalAirport} ({arrivalIata})
            </S.Label>
          </S.Section>
          <S.Section>
            <Public />
            <S.Label>{arrivalCountry}</S.Label>
          </S.Section>
        </S.JourneyDetails>
      </S.JourneyWrapper>
    </S.JourneyDetailsWrapper>
  );
};

type JourneyDetais = {
  country: string;
  airport: string;
  iataCode: string;
  date: string;
};

type JourneyType = {
  depatureDetails: JourneyDetais;
  arrivalDetails: JourneyDetais;
  availableSeatCount: string;
};
