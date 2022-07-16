import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { ENDPOINTS } from "../../../../utils/types";
import "./style";
import { ContainerResultsLine, DefaultHeadline, Headline } from "./style";

export interface ResultsLineProps {
  location: string;
  results: number;
}

const ResultsLine = (props: ResultsLineProps) => {
  const filtersState = useSelector((state: RootState) => state.filters);
  return (
      <ContainerResultsLine>
        {filtersState.country ||
        filtersState.category ||
        filtersState.sourceEverything ||
        filtersState.sourceTopheadlines ||
        filtersState.dateFrom ||
        filtersState.dateTo ||
        filtersState.language ||
        filtersState.sortBy ||
        filtersState.searchInput ||
        filtersState.endpoint === ENDPOINTS.everything ? (
          <Headline>{props.results} Total results</Headline>
        ) : props.location &&
          props.results &&
          filtersState.endpoint === ENDPOINTS.topheadlines ? (
          <DefaultHeadline>Top Headlnines in {props.location} </DefaultHeadline>
        ) : (
          ""
        )}
      </ContainerResultsLine>
  );
};

export default ResultsLine;
