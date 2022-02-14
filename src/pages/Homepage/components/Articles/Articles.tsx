import { Key } from "react";
import Card from "../../../../components/Card/Card";
import { Article, SIZE_TYPE, VARIANT } from "../../../../utils/types";
import { ArticleContainer, Container, ContainerError, Text } from "./style";
import InfiniteScroll from "react-infinite-scroll-component";
import notFoundIcon from "../../../../assets/icons/not-found.svg";
import SkeletonCard from "../Skeleton/SkeletonCard";

export interface ArticlesProps {
  error: string;
  firstLoad: boolean;
  results: number;
  articles: Article[];
  hasMore: boolean;
  fetchMoreData: () => void;
}

const Articles = (props: ArticlesProps) => {
  const cards = new Array(4);
  for (let i = 0; i < 4; i++) {
    cards.push(<SkeletonCard key={i} />);
  }
  return props.error ? (
    <ContainerError>
      <Text>{props.error} </Text>
    </ContainerError>
  ) : props.firstLoad ? (
    <ArticleContainer>
      {cards.map((card) => card)}
      <SkeletonCard />
    </ArticleContainer>
  ) : props.results ? (
    <ArticleContainer>
      <InfiniteScroll
        dataLength={props.articles.length}
        next={props.fetchMoreData}
        hasMore={props.hasMore}
        loader={<SkeletonCard />}
        scrollThreshold="100%"
        height={850}
        endMessage={<Text>You have seen it all!</Text>}
      >
        {props.articles.map((article: Article, i: Key) => {
          return (
            <Card
              key={i}
              image={article.urlToImage}
              title={article.title}
              source={article.source}
              description={article.description}
              tags={[]}
              button={{
                onClick: () => {
                  window.open(article.url, "_blank");
                },
                icon: true,
                variant: VARIANT.primary,
                size: SIZE_TYPE.medium,
                children: "Navigate to Dispatch",
              }}
              date={article.publishedAt}
            ></Card>
          );
        })}
      </InfiniteScroll>
    </ArticleContainer>
  ) : !props.firstLoad ? (
    <Container>
      <img alt="not-found-img" src={notFoundIcon}></img>
      <Text>We couldn't find any matches for your query</Text>
    </Container>
  ) : null;
};

export default Articles;