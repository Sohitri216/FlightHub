import * as S from "./LayoutTemplate.styles";

export const LayoutTemplate = ({
  title,
  subtitle,
  filter,
  flightList,
}: Props) => {
  return (
    <S.LayoutContainer>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{filter}</div>
      <div>{flightList}</div>
    </S.LayoutContainer>
  );
};

type Props = {
  title: JSX.Element;
  subtitle: JSX.Element;
  filter: JSX.Element;
  flightList: JSX.Element;
};
