import { Source } from "../../utils/types";
import moment from "moment";
import { ButtonProps } from "../Button/Button";
import logo from "../../assets/icons/imageNotFound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isRTL } from "../../utils/utils";

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
import { useEffect, useState } from "react";
import { device } from "../../globalStyle/theme";
import { useMediaQuery } from "react-responsive";

export interface CardProps {
  date: string;
  image: string;
  title: string;
  source: Source;
  description: string;
  tags: string[];
  button: ButtonProps;
  location: { name: string; value: string };
}

const Card = (props: CardProps) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const rtl = (isRTL(props.description) || isRTL(props.title)) ? true : false;
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  return (
    <CardStyled>
      {props.image !== "null" && props.image && !imageError ? (
        <ImageCard>
          <LazyLoadImage
            alt={props.image}
            style={{
              objectFit: "cover",
              borderRadius: isMobileDevice
                ? "20px 20px 0 0"
                : "20px 0px 0px 20px",
            }}
            effect="blur"
            height={"100%"}
            src={props.image}
            width={"100%"}
            onError={(e) => setImageError(true)}
          />
        </ImageCard>
      ) : (
        <ContainerImage>
          <ImageNotFound src={logo} />
          <p>Image not found</p>
        </ContainerImage>
      )}
      <BodyCard dir={rtl ? "rtl" : "ltr"}>
        <Row rtl={rtl}>
          <DateCard>
            {moment.utc(props.date).format("dddd MMM DD, YYYY")}
          </DateCard>
        </Row>
        <Title rtl={rtl}>{props.title}</Title>
        <SourceCard rtl={rtl}>{props.source.name}</SourceCard>
        <Description rtl={rtl}>{props.description}</Description>
        <CardBtn rtl={rtl} {...props.button} />
      </BodyCard>
    </CardStyled>
  );
};

export default Card;
