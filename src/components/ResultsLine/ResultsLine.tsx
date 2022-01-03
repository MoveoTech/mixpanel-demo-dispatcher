import "./style";
import { DefaultHeadline, Headline } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

export interface ResultsLineProps {
  results?: number;
}

const ResultsLine = (props: ResultsLineProps) => {
  const [location, setLocation] = useState();

  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((response) => {
      let data = response.data;
      setLocation(data.country_name);
    });
  }, []);
  return (
    <div>
      {props.results ? (
        <Headline>{props.results} Total results</Headline>
      ) : (
        <DefaultHeadline>Top Headlines in {location}</DefaultHeadline>
      )}
    </div>
  );
};

export default ResultsLine;
