import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "../../components/Card/Card";
import DoughnutChart from "../../components/Chart/DoughnutChart/DoughnutChart";
import HorizontalChart from "../../components/Chart/HorizontalChart/HorizontalChart";
import LineChart from "../../components/Chart/LineChart/LineChart";
import DateFilter from "../../components/Datefilter/DateFilter";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/Navbar/Navbar";
import ResultsLine from "./components/ResultsLine/ResultsLine";
import { device } from "../../globalStyle/theme";
import { Article, ENDPOINTS } from "../../utils/types";
import { filtersActions } from "../../store/slicers/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
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
  ChartContainer,
  FilterContainer,
  HomepageContainer,
  MainLayout,
  DataContainer,
} from "./style";
import { RootState } from "../../store";
import Articles from "./components/Articles/Articles";
import { urlRequest } from "../../services/axios";

const Homepage = () => {
  const isTabletDevice = useMediaQuery({
    query: device.tablet,
  });
  const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);

  const [articles, setArticles] = useState<Article[]>([]);
  const [location, setLocation] = useState<any>({});
  const [results, setResults] = useState(0);

  console.log(urlRequest(filtersState));

  // const { data: dataArticles, fetchError, isLoading } = useFetch(url);
  // const {
  //   isLoading: isLoadingLocation,
  //   error: isErrorLocation,
  //   sendRequest: dataLocation,
  // } = useHttp();

  // useEffect(() => {
  //   const transformData = (data: any) => {
  //     const valueCountry = countryOptions.find(
  //       ({ name }) => name === data.country_name
  //     );
  //     setLocation(valueCountry);
  //   };
  //   dataLocation(
  //     {
  //       url: "https://ipapi.co/json/",
  //     },
  //     transformData
  //   );
  //   return () => {
  //     setLocation({});
  //   };
  // }, [dataLocation]);

  // useEffect(() => {
  //   if (dataArticles.articles) {
  //     setArticles(dataArticles.articles.slice(0, 10));
  //     setResults(dataArticles.totalResults);
  //   }
  // }, [
  //   whereToSearch,
  //   source,
  //   dateTo,
  //   dateFrom,
  //   sortBy,
  //   country,
  //   category,
  //   language,
  //   searchValue,
  //   dataArticles,
  // ]);

  const content = !articles.length
    ? undefined
    : results
    ? results
    : location.name;
  console.log(filtersState);

  return (
    <HomepageContainer>
      {!isTabletDevice ? (
        <Navbar
          filter={{
            name: ENDPOINTS.topheadlines,
            options: filterNavbarOptions,
            onChangeValue: (value) =>
              dispatch(filtersActions.changeEndpoint(value)),
          }}
          searchFunc={(value: string) =>
            dispatch(filtersActions.setSearchInput(value))
          }
          signOutFunc={() => {}}
        >
          YC
        </Navbar>
      ) : (
        <Navbar
          searchFunc={(value: string) =>
            dispatch(filtersActions.setSearchInput(value))
          }
          signOutFunc={() => {}}
        >
          YC
        </Navbar>
      )}
      <MainLayout>
        {!isTabletDevice &&
          (filtersState.endpoint === "everything" ? (
            <FilterContainer>
              <Filter
                name={"Sort By"}
                options={sortByOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setSortBy(value));
                }}
              ></Filter>
              <DateFilter
                name={"Dates"}
                onChangeValue={(
                  startDate: string | undefined,
                  endDate: string | undefined
                ) => {
                  dispatch(filtersActions.setDateFrom(startDate));
                  dispatch(filtersActions.setDateTo(endDate));
                }}
              ></DateFilter>
              <Filter
                name={"Sources"}
                onChangeValue={(value) =>
                  dispatch(filtersActions.setSource(value))
                }
              ></Filter>
              <Filter
                name={"Language"}
                options={languageOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setLanguage(value));
                }}
              ></Filter>
            </FilterContainer>
          ) : (
            <FilterContainer>
              <Filter
                name={"Country"}
                options={countryOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setCountry(value));
                }}
              ></Filter>
              <Filter
                name={"Category"}
                options={categoryOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setCategory(value));
                }}
              ></Filter>
              <Filter
                name={"Sources"}
                onChangeValue={(value) =>
                  dispatch(filtersActions.setSource(value))
                }
                options={sourcesOptions}
              ></Filter>
            </FilterContainer>
          ))}
        <BodyContainer>
          <ResultsLine content={content} />
          <DataContainer>
            {articles && <Articles articles={articles} />}
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
