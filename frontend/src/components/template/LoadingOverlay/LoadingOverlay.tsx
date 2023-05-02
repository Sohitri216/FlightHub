import { LinearProgress } from "@mui/material";
import * as S from "./LoadingOverlay.styles";

export const LoadingOverlay = () => {
  return (
    <S.LoadingOverlay data-testid="loading">
      <S.BoxWrapper>
        <LinearProgress color="inherit" />
      </S.BoxWrapper>
    </S.LoadingOverlay>
  );
};
