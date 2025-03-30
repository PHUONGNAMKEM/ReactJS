import { ReactNode } from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 30px;
`;

interface CardListProps {
  children?: ReactNode;
}

function CardList(props: CardListProps) {
  return <StyledCardList>{props.children}</StyledCardList>;
}

export default CardList;
