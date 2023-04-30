import { FlightTakeoff } from "@mui/icons-material";
import { useBreakpoint } from "../../../common/hooks/useBreakpoint";
import { SeatLayout } from "../../template/SeatLayout/SeatLayout";
import * as S from "./ItinerarySummary.styles";

export const ItinerarySummary = ({
  depatureDetails: { iataCode: departureIataCode, airport: departureAirport },
  returnDetails: { iataCode: returnIataCode, airport: returnAirport },
  availableSeatCount,
  price,
  offerType,
}: ItineraryType) => {
  const breakpoint = useBreakpoint();

  const DisplayJourneyRoute = ({ iataCode, airport }: JourneyRoute) => {
    return breakpoint === "lg" || breakpoint === "xlg" ? (
      <S.JourneyRouteBlock>
        <S.ItineraryCode>{iataCode}</S.ItineraryCode>
        <S.ItineraryCode type="airport">({airport})</S.ItineraryCode>
      </S.JourneyRouteBlock>
    ) : (
      <S.Section>
        <S.ItineraryCode>{iataCode}</S.ItineraryCode>
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

      {(breakpoint === "lg" || breakpoint === "xlg") && (
        <S.Section>
          <SeatLayout availableSeatCount={availableSeatCount} />
        </S.Section>
      )}

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

type ItineraryType = {
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
