import { Source } from "../../utils/types";
import { convertDateFromUrl } from "../../utils/utils";
import { ButtonProps } from "../Button/Button";
import logo from "../../assets/icons/imageNotFound.svg";
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
  ImageNotFound,
  ContainerImage,
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
  console.log(props.image)
  return (
    <CardStyled>
      {props.image != "null" && props.image ? (
        <ImageCard src={props.image} />
      ) : (
        <ContainerImage>
          <ImageNotFound src={logo} />
          <p>Image not found</p>
        </ContainerImage>
      )}
      <BodyCard>
        <Row>
          <DateCard>{convertDateFromUrl(props.date)}</DateCard>
        </Row>
        <Title>{props.title}</Title>
        <SourceCard>{props.source.name}</SourceCard>
        <Description>{props.description}...</Description>
        <CardBtn {...props.button} />
      </BodyCard>
    </CardStyled>
  );
};

export default Card;
