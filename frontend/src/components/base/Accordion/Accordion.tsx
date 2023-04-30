import { Accordion as MAccordion } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import * as S from "./Accordion.styles";

export const Accordion = ({ summary, details }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <S.Wrapper>
      <MAccordion id="accordion">
        <S.AccordionLabel
          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
          onClick={handleClick}
        >
          {summary}
        </S.AccordionLabel>
        <S.AccordionContent>{details}</S.AccordionContent>
      </MAccordion>
    </S.Wrapper>
  );
};

type Props = {
  summary: JSX.Element;
  details: JSX.Element;
};
