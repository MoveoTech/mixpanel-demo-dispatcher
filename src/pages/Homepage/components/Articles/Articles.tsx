import { Key } from "react";
import Card from "../../../../components/Card/Card";
import { Article, SIZE_TYPE, VARIANT } from "../../../../utils/types";
import { ArticleContainer } from "./style";

const Articles = (props: any) => {
  return (
    <ArticleContainer>
      {props.articles.map((el: Article, i: Key) => {
        return (
          <Card
            key={i}
            image={el.urlToImage}
            title={el.title}
            source={el.source}
            description={el.description}
            tags={[]}
            button={{
              onClick: () => {
                window.open(el.url, "_blank");
              },
              icon: true,
              variant: VARIANT.primary,
              size: SIZE_TYPE.medium,
              children: "Navigate to Dispatch",
            }}
            date={el.publishedAt}
          ></Card>
        );
      })}
    </ArticleContainer>
  );
};

export default Articles;
