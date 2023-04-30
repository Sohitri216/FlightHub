import { Accordion } from "../../base";
import { FlightDetailsType } from "../../../types/types";
import * as S from "./FlightList.styles";

import { formatCurrency, formatText } from "../../../common/util/formatItem";
import { ItenaryDetails } from "../IternaryDetails/ItenaryDetails";
import { ItenarySummary } from "../ItenarySummary/ItenarySummary";

export const FlightDetails = ({ flightList }: Props) => {
  return (
    <S.Wrapper>
      {flightList?.map(
        ({
          uuid,
          price,
          depatureDetails,
          arrivalDetails,
          offerType,
          seatAvailability,
        }: FlightDetailsType) => (
          <S.FlightInfoContainer key={uuid}>
            <Accordion
              summary={
                <ItenarySummary
                  depatureDetails={depatureDetails}
                  arrivalDetails={arrivalDetails}
                  price={formatCurrency(price)}
                  offerType={formatText(offerType)}
                  availableSeatCount={seatAvailability}
                />
              }
              details={
                <ItenaryDetails
                  depatureDetails={depatureDetails}
                  arrivalDetails={arrivalDetails}
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