import { Container, Body, Title, BoldLine, Header } from "./style";

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

export default Chart;
