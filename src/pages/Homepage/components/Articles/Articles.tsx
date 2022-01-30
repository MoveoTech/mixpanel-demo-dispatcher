import { Key } from "react";
import Card from "../../../../components/Card/Card";
import { Article, SIZE_TYPE, VARIANT } from "../../../../utils/types";
import { ArticleContainer } from "./style";
import InfiniteScroll from "react-infinite-scroll-component";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Articles = (props: any) => {
  return (
    <ArticleContainer>
      {
        props.firstLoad && <Skeleton width={50} height={100}/>
      }
      <InfiniteScroll
        dataLength={props.articles.length}
        next={props.fetchMoreData}
        hasMore={props.hasMore}
        loader={<h4>Loading...</h4>}
        scrollThreshold="100%"
        height={1220}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
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
  );
};

export default Articles;
