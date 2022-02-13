import { Source } from "../../utils/types";
import { convertDateFromUrl } from "../../utils/utils";
import { ButtonProps } from "../Button/Button";
import {
  BodyCard,
  CardBtn,
  CardStyled,
  ImageCard,
  Description,
  Title,
  Row,
  SourceCard,
  DateCard,
} from "./style";

export interface CardProps {
  date: string;
  image: string;
  title: string;
  source: Source;
  description: string;
  tags: string[];
  button: ButtonProps;
}

const Card = (props: CardProps) => {
  return (
    <CardStyled>
      <ImageCard src={props.image} />
      <BodyCard>
        <Row>
          <DateCard>{convertDateFromUrl(props.date)}</DateCard>
        </Row>
        <Title>{props.title}</Title>
        <SourceCard>{props.source.name}</SourceCard>
        <Description>{props.description}</Description>
        <CardBtn {...props.button} />
      </BodyCard>
    </CardStyled>
  );
};

export default Card;
