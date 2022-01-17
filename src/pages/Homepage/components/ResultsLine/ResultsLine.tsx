import "./style";
import { DefaultHeadline, Headline } from "./style";

export interface ResultsLineProps {
  content: number | string;
}

const ResultsLine = (props: ResultsLineProps) => {
  return (
    <>
      { typeof props.content === "number" ? (
        <Headline>{props.content} Total results</Headline>
      ) : ( typeof props.content !== "undefined" )? 
        <DefaultHeadline>Top Headlnines in {props.content} </DefaultHeadline>
       : <DefaultHeadline>No data</DefaultHeadline>}
    </>
  );
};

export default ResultsLine;
