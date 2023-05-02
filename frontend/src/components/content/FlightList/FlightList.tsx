import { Accordion } from "../../base";
import { FlightDetailsType } from "../../../types/types";
import * as S from "./FlightList.styles";

import { formatCurrency, formatText } from "../../../common/util";
import { ItineraryDetails } from "../ItineraryDetails/ItineraryDetails";
import { ItinerarySummary } from "../ItinerarySummary/ItinerarySummary";
import { FallbackTemplate } from "../../template/FallbackTemplate/FallbackTemplate";

export const FlightList = ({ flightList }: Props) => {
  return (
    <S.Wrapper>
      {flightList.length ? (
        flightList.map(
          ({
            uuid,
            price,
            depatureDetails,
            returnDetails,
            offerType,
            seatAvailability,
          }: FlightDetailsType) => (
            <S.FlightInfoContainer key={uuid} data-testid="flight-item-list">
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
        )
      ) : (
        <FallbackTemplate displayMessage="No results found for this route" />
      )}
    </S.Wrapper>
  );
};

type Props = {
  flightList: FlightDetailsType[];
};
