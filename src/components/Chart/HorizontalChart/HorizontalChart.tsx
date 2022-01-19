import { DataChart } from "../../../utils/types";
import Chart from "../Chart";
import { Data, DataContainer, Precentage, Row, SourceName } from "./style";
import { ProgressBar, ProgressBarUsed } from "./style";

export interface HorizontalChartProps {
  HorizontalChartData: DataChart[];
  ChartTitle: string;
}

const HorizontalChart = (props: HorizontalChartProps) => {
  return (
    <Chart>
      <Chart.Header>{props.ChartTitle}</Chart.Header>
      <Chart.Body>
        <DataContainer>
          {props.HorizontalChartData.map((entry, index) => {
            return (
              <Row key={index}>
                <SourceName>{entry.name}</SourceName>
                <Data>
                  <Precentage>{entry.value}%</Precentage>
                  <ProgressBar>
                    <ProgressBarUsed
                      style={{ width: `${entry.value}px` }}
                    ></ProgressBarUsed>
                  </ProgressBar>
                </Data>
              </Row>
            );
          })}
        </DataContainer>
      </Chart.Body>
    </Chart>
  );
};

export default HorizontalChart;
