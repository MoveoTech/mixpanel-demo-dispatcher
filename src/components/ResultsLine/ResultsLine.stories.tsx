import { Meta, Story } from "@storybook/react";
import ResultsLine, { ResultsLineProps } from "./ResultsLine";

export default {
  component: ResultsLine,
  title: "Components/ResultsLine",
} as Meta;

const Template: Story<ResultsLineProps> = (args) => <ResultsLine {...args} />;

export const ResultsLine1 = Template.bind({});
ResultsLine1.args = {
  results: 12,
};
