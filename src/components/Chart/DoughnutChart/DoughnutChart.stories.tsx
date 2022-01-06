import { Meta, Story } from "@storybook/react";
import DoughnutChart, { DoughnutChartProps } from "./DoughnutChart";

export default {
  component: DoughnutChart,
  title: "Components/DoughnutChart",
} as Meta;

const Template: Story<DoughnutChartProps> = (args) => (
  <DoughnutChart {...args} />
);

export const Doughnut1 = Template.bind({});
Doughnut1.args = {
  DoughnutChartData: [
    { name: "NBC", value: 10 },
    { name: "Vulture", value: 15 },
    { name: "CNN", value: 30 },
    { name: "ESPN", value: 48 },
  ],
  ChartTitle: "Sources",
};
