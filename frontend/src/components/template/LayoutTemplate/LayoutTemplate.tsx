import { Typography } from "@mui/material";
import * as S from "./LayoutTemplate.styles";
import { AirplaneTicket } from "@mui/icons-material";

export const LayoutTemplate = ({ title, filter, main }: Props) => {
  return (
    <Typography component={"div"}>
      <S.LayoutContainer>
        <S.Header data-testid="title">
          <AirplaneTicket style={{ fontSize: "2rem" }} />
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.Header>
        <S.FilterContainer data-testid="filter">{filter}</S.FilterContainer>
        <S.FlightListingContainer data-testid="main">
          {main}
        </S.FlightListingContainer>
      </S.LayoutContainer>
    </Typography>
  );
};

type Props = {
  title: JSX.Element;
  filter: JSX.Element;
  main: JSX.Element;
};
