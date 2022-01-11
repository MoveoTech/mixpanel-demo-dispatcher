import { Key, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "../../components/Card/Card";
import DoughnutChart from "../../components/Chart/DoughnutChart/DoughnutChart";
import HorizontalChart from "../../components/Chart/HorizontalChart/HorizontalChart";
import LineChart from "../../components/Chart/LineChart/LineChart";
import DateFilter from "../../components/Datefilter/DateFilter";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/Navbar/Navbar";
import ResultsLine from "./components/ResultsLine/ResultsLine";
import useFetch from "../../hooks/useFetch";
import { device } from "../../theme";
import { Article, SIZE_TYPE, VARIANT } from "../../types";
import {
  DoughnutChartData,
  countryOptions,
  languageOptions,
  categoryOptions,
  HorizontalChartData,
  sortByOptions,
  LineChartData,
  filterNavbarOptions,
  sourcesOptions,
} from "../MockData";
import {
  BodyContainer,
  ArticleContainer,
  ChartContainer,
  FilterContainer,
  HomepageContainer,
  MainLayout,
  DataContainer,
} from "./style";

const Homepage = () => {
  const isTabletDevice = useMediaQuery({
    query: device.tablet,
  });

  //convert to redux
  const [articles, setArticles] = useState<Article[]>([]);
  const [location, setLocation] = useState<any>({});
  const [url, setUrl] = useState("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [whereToSearch, setWhereToSearch] = useState<string>("Top headlines");
  const [source, setSource] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [country, setCountry] = useState<string>("il");
  const [category, setCategory] = useState<string>("");
  const [results, setResults] = useState(0);

  const { data: dataLocation, fetchError: errorLocation } = useFetch(
    "https://ipapi.co/json/"
  );

  const urlEverything = `https://newsapi.org/v2/everything?q=${searchValue}&sources=${source}&from=${dateFrom}&to=${dateTo}&language=${language}&sortBy=${sortBy}&apiKey=2fe52557b5b44b6e9abd6666a5079799`;

  //handle source query
  const urlTopHeadlines = `https://newsapi.org/v2/top-headlines?q=${searchValue}&country=${country}&category=${category}&apiKey=2fe52557b5b44b6e9abd6666a5079799`;

  //handle errors
  const { data: dataArticles, fetchError, isLoading } = useFetch(url);

  useEffect(() => {
    if (dataLocation) {
      const valueCountry = countryOptions.find(
        ({ name }) => name === dataLocation.country_name
      );
      setLocation(valueCountry);
      if (location && country === "") {
        setCountry(location.value);
      }
    }
    if (dataArticles.articles) {
      setArticles(dataArticles.articles.slice(0, 10));
    }
  }, [dataLocation]);

  useEffect(() => {
    if (whereToSearch === "Everything") {
      setUrl(urlEverything);
    } else {
      setUrl(urlTopHeadlines);
    }
    if (dataArticles.articles) {
      setArticles(dataArticles.articles.slice(0, 10));
      setResults(dataArticles.totalResults);
    }
  }, [
    whereToSearch,
    source,
    dateTo,
    dateFrom,
    sortBy,
    country,
    category,
    language,
    searchValue,
    dataArticles,
  ]);

  return (
    <HomepageContainer>
      {!isTabletDevice ? (
        <Navbar
          filter={{
            name: whereToSearch,
            options: filterNavbarOptions,
            onChangeValue: (value) => setWhereToSearch(value),
          }}
          searchFunc={(value: string) => setSearchValue(value)}
          signOutFunc={() => {}}
        >
          YC
        </Navbar>
      ) : (
        <Navbar
          searchFunc={(value: string) => setSearchValue(value)}
          signOutFunc={() => {}}
        >
          YC
        </Navbar>
      )}
      <MainLayout>
        {!isTabletDevice &&
          (whereToSearch === "Everything" ? (
            <FilterContainer>
              <Filter
                name={"Sort By"}
                options={sortByOptions}
                onChangeValue={(value) => {
                  setSortBy(value);
                }}
              ></Filter>
              <DateFilter
                name={"Dates"}
                onChangeValue={(startDate, endDate) => {
                  setDateFrom(startDate);
                  setDateTo(endDate);
                }}
              ></DateFilter>
              <Filter
                name={"Sources"}
                onChangeValue={(value) => setSource(value)}
              ></Filter>
              <Filter
                name={"Language"}
                options={languageOptions}
                onChangeValue={(value) => {
                  setLanguage(value);
                }}
              ></Filter>
            </FilterContainer>
          ) : (
            <FilterContainer>
              <Filter
                name={"Country"}
                options={countryOptions}
                onChangeValue={(value) => {
                  setCountry(value);
                }}
              ></Filter>
              <Filter
                name={"Category"}
                options={categoryOptions}
                onChangeValue={(value) => {
                  setCategory(value);
                }}
              ></Filter>
              <Filter
                name={"Sources"}
                onChangeValue={(value) => setSource(value)}
                options={sourcesOptions}
              ></Filter>
            </FilterContainer>
          ))}
        <BodyContainer>
          <ResultsLine results={results} location={location?.name} />
          <DataContainer>
            <ArticleContainer>
              {articles &&
                articles.map((el: Article, i: Key) => {
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
            {!isTabletDevice && (
              <ChartContainer>
                <DoughnutChart
                  DoughnutChartData={DoughnutChartData}
                  ChartTitle={"Sources"}
                ></DoughnutChart>
                <LineChart LineChartData={LineChartData} ChartTitle={"Dates"} />
                <HorizontalChart
                  HorizontalChartData={HorizontalChartData}
                  ChartTitle={"Tags"}
                ></HorizontalChart>
              </ChartContainer>
            )}
          </DataContainer>
        </BodyContainer>
      </MainLayout>
    </HomepageContainer>
  );
};
export default Homepage;
