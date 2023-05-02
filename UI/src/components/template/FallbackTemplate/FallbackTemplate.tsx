import * as S from "./FallbackTemplate.styles";

export const FallbackTemplate = ({ displayMessage }: Props) => {
  return (
    <S.ErrorWrapper data-testid="error-section">
      <S.Text>{displayMessage}</S.Text>
    </S.ErrorWrapper>
  );
};

type Props = {
  displayMessage: string;
};
