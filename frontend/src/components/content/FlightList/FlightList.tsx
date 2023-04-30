import { Accordion } from "../../base";
import { FlightDetailsType } from "../../../types/types";
import * as S from "./FlightList.styles";

import { formatCurrency, formatText } from "../../../common/util";
import { ItineraryDetails } from "../ItineraryDetails/ItineraryDetails";
import { ItinerarySummary } from "../ItinerarySummary/ItinerarySummary";

export const FlightDetails = ({ flightList }: Props) => {
  return (
    <S.Wrapper>
      {flightList?.map(
        ({
          uuid,
          price,
          depatureDetails,
          returnDetails,
          offerType,
          seatAvailability,
        }: FlightDetailsType) => (
          <S.FlightInfoContainer key={uuid}>
            <Accordion
              summary={
                <ItinerarySummary
                  depatureDetails={depatureDetails}
                  returnDetails={returnDetails}
                  price={formatCurrency(price)}
                  offerType={formatText(offerType)}
                  availableSeatCount={seatAvailability}
                />
              }
              details={
                <ItineraryDetails
                  depatureDetails={depatureDetails}
                  returnDetails={returnDetails}
                  availableSeatCount={seatAvailability}
                />
              }
            />
          </S.FlightInfoContainer>
        )
      )}
    </S.Wrapper>
  );
};

type Props = {
  flightList: FlightDetailsType[];
};