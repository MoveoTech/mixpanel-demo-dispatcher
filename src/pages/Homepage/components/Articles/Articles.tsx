import { Key } from "react";
import Card from "../../../../components/Card/Card";
import { Article, SIZE_TYPE, VARIANT } from "../../../../utils/types";
import { ArticleContainer } from "./style";

const Articles = (props: any) => {
  return (
    <ArticleContainer>
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
    </ArticleContainer>
  );
};

export default Articles;
