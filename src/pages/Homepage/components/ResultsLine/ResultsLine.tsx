import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { ENDPOINTS } from "../../../../utils/types";
import "./style";
import { DefaultHeadline, Headline } from "./style";

export interface ResultsLineProps {
  location: string;
}

const ResultsLine = (props: ResultsLineProps) => {
  const filtersState = useSelector((state: RootState) => state.filters);
  const articesState = useSelector((state: RootState) => state.articles);
  return (
    <>
      {filtersState.country ||
      filtersState.category ||
      filtersState.source ||
      filtersState.dateFrom ||
      filtersState.dateTo ||
      filtersState.language ||
      filtersState.sortBy ||
      filtersState.searchInput ||
      filtersState.endpoint === ENDPOINTS.everything ? (
        <Headline>{articesState.results} Total results</Headline>
      ) : (
        props.location &&
        articesState.results &&
        filtersState.endpoint === ENDPOINTS.topheadlines && (
          <DefaultHeadline>Top Headlnines in {props.location} </DefaultHeadline>
        )
      )}
    </>
  );
};

export default ResultsLine;
