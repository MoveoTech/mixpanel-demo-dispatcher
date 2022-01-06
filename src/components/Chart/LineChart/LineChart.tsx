import { AreaChart, Area, XAxis } from "recharts";
import { COLORS } from "../../../theme";
import { DataChart } from "../../../types";
import Chart from "../Chart";

export interface LineChartProps {
  LineChartData: DataChart[];
  ChartTitle: string;
}

const LineChart = (props: LineChartProps) => {
  return (
    <Chart>
      <Chart.Header>{props.ChartTitle}</Chart.Header>
      <Chart.Body>
        <AreaChart width={380} height={300} data={props.LineChartData}>
          <defs>
            <linearGradient id="colorUv" x1="1" y1="0.1" x2="0.3" y2="1.5">
              <stop
                offset="5%"
                stopColor={COLORS.primary_blue}
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor={COLORS.light_blue}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={COLORS.primary_blue}
            strokeWidth={5}
            fillOpacity={4}
            fill="url(#colorUv)"
          />
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey="name"
            tick={{
              fontSize: 13,
              fill: `${COLORS.purple_blue}`,
              fontWeight: 700,
            }}
          />
        </AreaChart>
      </Chart.Body>
    </Chart>
  );
};

export default LineChart;
