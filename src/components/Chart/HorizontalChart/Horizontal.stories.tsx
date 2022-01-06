import { Meta, Story } from "@storybook/react";
import HorizontalChart, { HorizontalChartProps } from "./HorizontalChart";

export default {
  component: HorizontalChart,
  title: "Components/HorizontalChart",
} as Meta;

const Template: Story<HorizontalChartProps> = (args) => (
  <HorizontalChart {...args} />
);

export const Horizontal1 = Template.bind({});
Horizontal1.args = {
  HorizontalChartData: [
    { name: "Crypto", value: 10 },
    { name: "China", value: 15 },
    { name: "Tech", value: 30 },
    { name: "Israel", value: 48 },
    { name: "Polticis", value: 12 },
    { name: "Economy", value: 43 },
    { name: "Corona", value: 11 },
    { name: "LA", value: 5 },
  ],
  ChartTitle: "Tags",
};
