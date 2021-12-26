
import { SIZE_TYPE, Source } from '../../types';
import { ButtonProps } from '../Button/Button';
import { BodyCard, CardBtn, CardStyled, ImageCard, Description, Title, TagsContainer, Tag, Row, SourceCard, DateCard } from './style';

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
    const convertDate = () => {
        const date = new Date(props.date);
        const day = date.toLocaleString("en-US", { "weekday": "long" });
        const newDate = date.toDateString();
        const arr = newDate.split(" ");
        arr[0] = day;
        arr[2]=arr[2]+',';
        return (arr.join(' '))
    }
    return (
      <CardStyled>
          <ImageCard src={props.image} />
          <BodyCard>
            <Row>
              <DateCard>{convertDate()}</DateCard>
              <TagsContainer>
                  {props.tags.map((tag) => {
                     return <Tag>{tag}</Tag>
                   })}
              </TagsContainer>
            </Row> 
            <Title>{props.title}</Title>
            <SourceCard>{props.source.name}</SourceCard>
            <Description>{props.description}</Description>
            <CardBtn {...props.button}/>
          </BodyCard>
      </CardStyled>
    );
  };
  
  export default Card;