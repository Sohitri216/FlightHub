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
  returnDetails: {
    airport: returnAirport,
    country: returnCountry,
    iataCode: returnIata,
    date: returnDate,
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
          <S.HeadingLabel>Return</S.HeadingLabel>
          <S.Section>
            <CalendarMonth />
            <S.Label>{returnDate}</S.Label>
          </S.Section>
          <S.Section>
            <Flight />
            <S.Label>
              {returnAirport} ({returnIata})
            </S.Label>
          </S.Section>
          <S.Section>
            <Public />
            <S.Label>{returnCountry}</S.Label>
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
  returnDetails: JourneyDetais;
  availableSeatCount: string;
};
