import { Source } from "../../utils/types";
import { convertDateFromUrl } from "../../utils/utils";
import moment from 'moment';
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
import {  useState } from "react";

export interface CardProps {
  date: string;
  image: string;
  title: string;
  source: Source;
  description: string;
  tags: string[];
  button: ButtonProps;
  rtl: boolean;
}

const Card = (props: CardProps) => {
  
  const [imageUrl, setImageUrl] = useState<null | string>(props.image);
 
  return (
    <CardStyled rtl={props.rtl} dir={props.rtl ? "rtl" : "ltr"}>
      {imageUrl !== "null" && imageUrl ? (
        <ImageCard rtl={props.rtl} src={props.image} onError={(e) => setImageUrl(null)} />
      ) : (
        <ContainerImage rtl={props.rtl}>
          <ImageNotFound src={logo} />
          <p>Image not found</p>
        </ContainerImage>
      )}
      <BodyCard>
        <Row rtl={props.rtl}>
          <DateCard>{moment.utc(props.date).format("dddd MMM DD, YYYY")}</DateCard>
        </Row>
        <Title rtl={props.rtl}>{props.title}</Title>
        <SourceCard rtl={props.rtl}>{props.source.name}</SourceCard>
        <Description rtl={props.rtl}>{props.description}</Description>
        <CardBtn {...props.button} />
      </BodyCard>
    </CardStyled>
  );
};

export default Card;
