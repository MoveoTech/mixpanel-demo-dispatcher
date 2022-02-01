import { AreaChart, Area, XAxis } from "recharts";
import { theme } from "../../../globalStyle/theme";
import SkeletonLineChart from "../../../pages/Homepage/components/Skeleton/SkeletonLineChart";
import { DataChart } from "../../../utils/types";
import Chart from "../Chart";

export interface LineChartProps {
  LineChartData: DataChart[];
  ChartTitle: string;
  firstLoad: Boolean;
  error: string;
}

const LineChart = (props: LineChartProps) => {
  return (
    <Chart>
      <Chart.Header>{props.ChartTitle}</Chart.Header>
      <Chart.Body>
        {props.firstLoad && !props.error && !props.LineChartData.length ? (
          <SkeletonLineChart />
        ) : !props.LineChartData.length || props.error ? (
          <Chart.NoData />
        ) : (
          <AreaChart width={370} height={300} data={props.LineChartData}>
            <defs>
              <linearGradient id="colorUv" x1="1" y1="0.1" x2="0.3" y2="1.5">
                <stop
                  offset="5%"
                  stopColor={theme.colors.primary_blue}
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor={theme.colors.light_blue}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={theme.colors.primary_blue}
              strokeWidth={5}
              fillOpacity={4}
              fill="url(#colorUv)"
            />
            <XAxis
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
              dataKey="name"
              tick={{
                fontSize: 13,
                fill: `${theme.colors.purple_blue}`,
                fontWeight: 700,
              }}
            />
          </AreaChart>
        )}
      </Chart.Body>
    </Chart>
  );
};

export default LineChart;
