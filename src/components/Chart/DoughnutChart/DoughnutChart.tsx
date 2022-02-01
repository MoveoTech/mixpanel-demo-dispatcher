import { PieChart, Pie, Cell, Label } from "recharts";
import { theme } from "../../../globalStyle/theme";
import { DataChart } from "../../../utils/types";

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
import SkeletonDoughnutChart from "../../../pages/Homepage/components/Skeleton/SkeletonDoughnutChart";

export interface DoughnutChartProps {
  DoughnutChartData: DataChart[];
  ChartTitle: string;
  firstLoad: Boolean;
  error: string;
}

const DoughnutChart = (props: DoughnutChartProps) => {
  const COLORS = Object.values(theme.chartsColors.doughnut);

  return (
    <Chart>
      <Chart.Header>{props.ChartTitle}</Chart.Header>
      <Chart.Body>
        {props.firstLoad && !props.error && !props.DoughnutChartData.length ? (
          <SkeletonDoughnutChart />
        ) : !props.DoughnutChartData.length || props.error ? (
          <Chart.NoData />
        ) : (
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
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label
                  value={props.DoughnutChartData.length}
                  position="center"
                />
              </Pie>
            </PieChart>
            <DataContainer>
              {props.DoughnutChartData.map((entry, index) => {
                return (
                  <Row key={index}>
                    <Dot
                      style={{
                        backgroundColor: `${COLORS[index % COLORS.length]}`,
                      }}
                    ></Dot>
                    <Data>
                      <SourceName>{entry.name}</SourceName>
                      <Precentage>{entry.value}%</Precentage>
                    </Data>
                  </Row>
                );
              })}
            </DataContainer>
          </PieContainer>
        )}
      </Chart.Body>
    </Chart>
  );
};
export default DoughnutChart;
