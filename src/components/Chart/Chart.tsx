import { Container, Body, Title, BoldLine, Header } from "./style";
import chartIcon from "../../assets/icons/chart.svg";

const Chart = (props: any) => {
  return <Container>{props.children}</Container>;
};

Chart.Body = function ChartBody(props: any) {
  return <Body>{props.children}</Body>;
};

Chart.Header = function ChartTitle(props: any) {
  return (
    <Header>
      <Title>{props.children}</Title>
      <BoldLine />
    </Header>
  );
};

Chart.NoData = function NoData(props: any) {
  return (
    <div>
      <img alt="icon" src={chartIcon}></img>
      <p>No Data to display</p>
    </div>
  );
};

export default Chart;
