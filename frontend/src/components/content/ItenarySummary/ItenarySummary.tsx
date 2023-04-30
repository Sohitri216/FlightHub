import { FlightLand, FlightTakeoff } from "@mui/icons-material";
import { useBreakpoint } from "../../../common/hooks/useBreakpoint";
import { SeatLayout } from "../../template/SeatLayout/SeatLayout";
import * as S from "./ItenarySummary.styles";

export const ItenarySummary = ({
  depatureDetails: { iataCode: departureIataCode, airport: departureAirport },
  returnDetails: { iataCode: returnIataCode, airport: returnAirport },
  availableSeatCount,
  price,
  offerType,
}: ItenaryType) => {
  const breakpoint = useBreakpoint();

  const DisplayJourneyRoute = ({ iataCode, airport }: JourneyRoute) => {
    return breakpoint === "lg" || breakpoint === "xlg" ? (
      <S.JourneyRouteBlock>
        <S.ItenaryCode>{iataCode}</S.ItenaryCode>
        <S.ItenaryCode type="airport">({airport})</S.ItenaryCode>
      </S.JourneyRouteBlock>
    ) : (
      <S.Section>
        <S.ItenaryCode>{iataCode}</S.ItenaryCode>
      </S.Section>
    );
  };

  return (
    <S.IternaryContainer>
      <S.Section>
        <FlightTakeoff />
        <DisplayJourneyRoute
          iataCode={departureIataCode}
          airport={departureAirport}
        />
      </S.Section>
      <S.Section>
        <FlightTakeoff style={{ transform: "scale(-1,1" }} />
        <DisplayJourneyRoute
          iataCode={returnIataCode}
          airport={returnAirport}
        />
      </S.Section>
      <S.Section>
        {(breakpoint === "lg" || breakpoint === "xlg") && (
          <SeatLayout availableSeatCount={availableSeatCount} />
        )}
      </S.Section>
      <S.OfferPrice>
        <S.Price>{price}</S.Price>
        <S.Offer>{offerType} offer</S.Offer>
      </S.OfferPrice>
    </S.IternaryContainer>
  );
};
type JourneyDetais = {
  country: string;
  airport: string;
  iataCode: string;
  date: string;
};

type ItenaryType = {
  depatureDetails: JourneyDetais;
  returnDetails: JourneyDetais;
  price: string;
  offerType: string;
  availableSeatCount: string;
};

type JourneyRoute = {
  airport: string;
  iataCode: string;
};
