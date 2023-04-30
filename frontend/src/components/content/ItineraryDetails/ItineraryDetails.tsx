import * as S from "./ItineraryDetails.styles";
import { useBreakpoint } from "../../../common/hooks/useBreakpoint";
import { SeatLayout } from "../..";
import { JourneyDetailsTemplate } from "../..";

export const ItineraryDetails = ({
  availableSeatCount,
  depatureDetails,
  returnDetails,
}: JourneyType) => {
  const breakpoint = useBreakpoint();

  return (
    <S.JourneyDetailsWrapper>
      {breakpoint === "md" && (
        <SeatLayout availableSeatCount={availableSeatCount} />
      )}
      <S.JourneyWrapper>
        <JourneyDetailsTemplate {...depatureDetails} journeyType="Departure" />
        <JourneyDetailsTemplate {...returnDetails} journeyType="Return" />
      </S.JourneyWrapper>
    </S.JourneyDetailsWrapper>
  );
};

interface JourneyDetais {
  country: string;
  airport: string;
  iataCode: string;
  date: string;
}

type JourneyType = {
  depatureDetails: JourneyDetais;
  returnDetails: JourneyDetais;
  availableSeatCount: string;
};

type JourneyProps = JourneyDetais & {
  journeyType: string;
};
