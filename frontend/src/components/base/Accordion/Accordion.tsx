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
    <MAccordion id="accordion">
      <S.AccordionLabel
        data-testid="accordion-label"
        expandIcon={
          expanded ? (
            <RemoveIcon data-testid="expanded" />
          ) : (
            <AddIcon data-testid="collapsed" />
          )
        }
        onClick={handleClick}
      >
        {summary}
      </S.AccordionLabel>

      <S.AccordionContent data-testid="accordion-details">
        {details}
      </S.AccordionContent>
    </MAccordion>
  );
};

type Props = {
  summary: JSX.Element;
  details: JSX.Element;
};
