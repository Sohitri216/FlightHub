import { CalendarMonth, Flight, Public } from "@mui/icons-material";
import * as S from './JourneyDetailsTemplate.styles';

export const JourneyDetailsTemplate = ({
  journeyType,
  date,
  airport,
  iataCode,
  country,
}: JourneyProps) => {
  return (
    <S.JourneyDetails>
      <S.HeadingLabel>{journeyType}</S.HeadingLabel>
      <S.Section>
        <CalendarMonth />
        <S.Label>{date}</S.Label>
      </S.Section>
      <S.Section>
        <Flight />
        <S.Label>
          {airport} ({iataCode})
        </S.Label>
      </S.Section>
      <S.Section>
        <Public />
        <S.Label>{country}</S.Label>
      </S.Section>
    </S.JourneyDetails>
  );
};

interface JourneyDetais {
  country: string;
  airport: string;
  iataCode: string;
  date: string;
}

type JourneyProps = JourneyDetais & {
  journeyType: string;
};
