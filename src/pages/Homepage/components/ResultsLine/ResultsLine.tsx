import "./style";
import { DefaultHeadline, Headline } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

export interface ResultsLineProps {
  results?: number;
  requestFunc: () => void;
}

const ResultsLine = (props: ResultsLineProps) => {
  return (
    <>
      {props.results ? (
        <Headline>{props.results} Total results</Headline>
      ) : (
        <DefaultHeadline>Top Headlnines i </DefaultHeadline>
      )}
    </>
  );
};

export default ResultsLine;
