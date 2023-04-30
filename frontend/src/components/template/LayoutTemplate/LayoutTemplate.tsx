import { Typography } from "@mui/material";
import * as S from "./LayoutTemplate.styles";
import { AirplaneTicket } from "@mui/icons-material";

export const LayoutTemplate = ({ title, filter, flightList }: Props) => {
  return (
    <Typography component={"div"}>
      <S.LayoutContainer>
        <S.Header>
          <AirplaneTicket style={{ fontSize: '2rem'}} />
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.Header>
        <S.FilterContainer>{filter}</S.FilterContainer>
        <S.FlightListingContainer>{flightList}</S.FlightListingContainer>
      </S.LayoutContainer>
    </Typography>
  );
};

type Props = {
  title: JSX.Element;
  filter: JSX.Element;
  flightList: JSX.Element;
};
