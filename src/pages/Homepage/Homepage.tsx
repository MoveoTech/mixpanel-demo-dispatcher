import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import DoughnutChart from "../../components/Chart/DoughnutChart/DoughnutChart";
import HorizontalChart from "../../components/Chart/HorizontalChart/HorizontalChart";
import LineChart from "../../components/Chart/LineChart/LineChart";
import DateFilter from "../../components/Datefilter/DateFilter";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/Navbar/Navbar";
import ResultsLine from "./components/ResultsLine/ResultsLine";
import Articles from "./components/Articles/Articles";
import { device } from "../../globalStyle/theme";
import { Article, ENDPOINTS } from "../../utils/types";
import { filtersActions } from "../../store/slicers/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  countryOptions,
  languageOptions,
  categoryOptions,
  HorizontalChartData,
  sortByOptions,
  filterNavbarOptions,
  LineChartData,
} from "../MockData";
import {
  BodyContainer,
  ChartContainer,
  FilterContainer,
  HomepageContainer,
  MainLayout,
  DataContainer,
} from "./style";
import {
  getArticlesFromApi,
  getSourcesFromApi,
} from "../../services/getNewsApiAxios";
import { getlocationFromApi } from "../../services/getLocationAxios";
import { calculateDatesChart, calculateSourcesChart } from "../../utils/utils";

const Homepage = () => {
  const isTabletDevice = useMediaQuery({
    query: device.tablet,
  });
  const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);
  const [articles, setArticles] = useState<Article[]>([]);
  const [location, setLocation] = useState<any>({});
  const [sourcesOptions, setSourcesOptions] = useState<
    { value: string; name: string }[]
  >([]);

  useEffect(() => {
    try {
      getlocationFromApi().then((res) => {
        const valueCountry = countryOptions.find(
          ({ name }) => name === res.data.country_name
        );
        setLocation(valueCountry);
      });
    } catch (error) {}
  }, [location]);

  useEffect(() => {
    try {
      getArticlesFromApi(filtersState, location.value).then((res) => {
        setArticles(res.data.articles.slice(0, 10));
        dispatch(filtersActions.setResults(res.data.totalResults));
      });
    } catch (error) {
      setArticles([]);
    }
  }, [filtersState, location]);
  
  useEffect(() => {
    try {
      getSourcesFromApi(filtersState).then((res) => {
        setSourcesOptions([]);
        res.data.sources.forEach((source: any) => {
          setSourcesOptions((recentItems) => [
            ...recentItems,
            { value: `${source.id}`, name: `${source.name}` },
          ]);
        });
      });
    } catch (error) {
      setSourcesOptions([]);
    }
  }, [filtersState.language, filtersState.country, filtersState.category]);

  return (
    <HomepageContainer>
      {!isTabletDevice ? (
        <Navbar
          filter={{
            name: "Top Headlines",
            options: filterNavbarOptions,
            disabled: false,
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
          (filtersState.endpoint === ENDPOINTS.everything ? (
            <FilterContainer>
              <DateFilter
                name="Dates"
                onChangeValue={(
                  startDate: string | undefined,
                  endDate: string | undefined
                ) => {
                  dispatch(filtersActions.setDateFrom(startDate));
                  dispatch(filtersActions.setDateTo(endDate));
                }}
              ></DateFilter>

              <Filter
                name="Sources"
                onChangeValue={(value) =>
                  dispatch(filtersActions.setSource(value))
                }
                options={sourcesOptions}
              ></Filter>
              <Filter
                name="Language"
                options={languageOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setLanguage(value));
                }}
              ></Filter>
              <Filter
                name="Sort By"
                options={sortByOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setSortBy(value));
                }}
              ></Filter>
            </FilterContainer>
          ) : (
            <FilterContainer>
              <Filter
                name="Country"
                disabled={filtersState.source ? true : false}
                options={countryOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setCountry(value));
                }}
              ></Filter>
              <Filter
                name="Category"
                disabled={filtersState.source ? true : false}
                options={categoryOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setCategory(value));
                }}
              ></Filter>
              <Filter
                name="Sources"
                disabled={
                  filtersState.country || filtersState.category ? true : false
                }
                onChangeValue={(value) =>
                  dispatch(filtersActions.setSource(value))
                }
                options={sourcesOptions}
              ></Filter>
            </FilterContainer>
          ))}
        <BodyContainer>
          <ResultsLine location={location.name} />
          <DataContainer>
            {articles && <Articles articles={articles} />}
            {!isTabletDevice && (
              <ChartContainer>
                <DoughnutChart
                  DoughnutChartData={calculateSourcesChart(articles)}
                  ChartTitle="Sources"
                ></DoughnutChart>
                <LineChart LineChartData={LineChartData} ChartTitle="Dates" />
                <HorizontalChart
                  HorizontalChartData={HorizontalChartData}
                  ChartTitle="Tags"
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
