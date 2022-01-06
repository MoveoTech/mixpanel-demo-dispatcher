import { PieChart, Pie, Cell, Label } from "recharts";
import { COLORS_DOUGHNUT } from "../../../theme";
import { DataChart } from "../../../types";
import Chart from "../Chart";
import {
  Data,
  DataContainer,
  Dot,
  PieContainer,
  Precentage,
  Row,
  SourceName,
} from "./style";

export interface DoughnutChartProps {
  DoughnutChartData: DataChart[];
  ChartTitle: string;
}

const DoughnutChart = (props: DoughnutChartProps) => {
  const COLORS = Object.values(COLORS_DOUGHNUT);
  return (
    <Chart>
      <Chart.Header>{props.ChartTitle}</Chart.Header>
      <Chart.Body>
        <PieContainer>
          <PieChart width={380} height={165}>
            <Pie
              data={props.DoughnutChartData}
              cx={180}
              cy={70}
              innerRadius={63}
              outerRadius={73}
              dataKey="value"
            >
              {props.DoughnutChartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
              <Label value="Sum" position="center" />
            </Pie>
          </PieChart>
          <DataContainer>
            {props.DoughnutChartData.map((entry, index) => {
              return (
                <Row key={index}>
                  <Dot style={{ backgroundColor: `${COLORS[index]}` }}></Dot>
                  <Data>
                    <SourceName>{entry.name}</SourceName>
                    <Precentage>{entry.value}%</Precentage>
                  </Data>
                </Row>
              );
            })}
          </DataContainer>
        </PieContainer>
      </Chart.Body>
    </Chart>
  );
};
export default DoughnutChart;
