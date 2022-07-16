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