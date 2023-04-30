import { Typography } from "@mui/material";
import * as S from "./LayoutTemplate.styles";

export const LayoutTemplate = ({ title, filter, flightList }: Props) => {
  return (
    <Typography component={"div"}>
      <S.LayoutContainer>
        <div>{title}</div>
        <div>{filter}</div>
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
