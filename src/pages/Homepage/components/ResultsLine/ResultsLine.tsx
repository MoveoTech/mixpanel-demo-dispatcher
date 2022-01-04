import "./style";
import { DefaultHeadline, Headline } from "./style";

export interface ResultsLineProps {
  results?: number;
  location: string;
}

const ResultsLine = (props: ResultsLineProps) => {
  return (
    <>
      {props.results ? (
        <Headline>{props.results} Total results</Headline>
      ) : (
        <DefaultHeadline>Top Headlnines in {props.location} </DefaultHeadline>
      )}
    </>
  );
};

export default ResultsLine;
