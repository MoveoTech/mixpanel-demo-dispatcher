import { useMediaQuery } from "react-responsive";
import Card from "../../components/Card/Card";
import DoughnutChart from "../../components/Chart/DoughnutChart/DoughnutChart";
import HorizontalChart from "../../components/Chart/HorizontalChart/HorizontalChart";
import LineChart from "../../components/Chart/LineChart/LineChart";
import DateFilter from "../../components/Datefilter/DateFilter";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/Navbar/Navbar";
import { device } from "../../theme";
import { CardArgs, DoughnutChartData, filterCountry, filterLanguage, filterNavbar, HorizontalChartData, LineChartData } from "../MockData";
import ResultsLine from "./components/ResultsLine/ResultsLine";
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
  return (
    <HomepageContainer>
      {!isTabletDevice ? (
        <Navbar filter={filterNavbar} signOutFunc={() => {}}>
          YC
        </Navbar>
      ) : (
        <Navbar signOutFunc={() => {}}>YC</Navbar>
      )}
      <MainLayout>
        {!isTabletDevice && (
          <FilterContainer>
            <Filter
              name={filterCountry.name}
              options={filterCountry.options}
              onChangeValue={filterCountry.onChangeValue}
            ></Filter>
            <Filter
              name={filterLanguage.name}
              options={filterLanguage.options}
              onChangeValue={filterLanguage.onChangeValue}
            ></Filter>
            <DateFilter name={"Date"} onChangeValue={() => {}}></DateFilter>
          </FilterContainer>
        )}
        <BodyContainer>
          <ResultsLine location={"Israel"} />
          <DataContainer>
            <ArticleContainer>
              <Card {...CardArgs}></Card>
              <Card {...CardArgs}></Card>
              <Card {...CardArgs}></Card>
              <Card {...CardArgs}></Card>
              <Card {...CardArgs}></Card>
              <Card {...CardArgs}></Card>
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
