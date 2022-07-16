import { Meta, Story } from "@storybook/react";
import LineChart, { LineChartProps } from "./LineChart";

export default {
  component: LineChart,
  title: "Components/LineChart",
} as Meta;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;

export const Line1 = Template.bind({});
// Line1.args = {
//   LineChartData: [
//     { name: "MAR", value: 110 },
//     { name: "APR", value: 5 },
//     { name: "MAY", value: 6 },
//     { name: "JUN", value: 3 },
//     { name: "JUL", value: 23 },
//     { name: "AUG", value: 9 },
//     { name: "SEP", value: 3 },
//   ],
//   ChartTitle: "Dates",
// };
