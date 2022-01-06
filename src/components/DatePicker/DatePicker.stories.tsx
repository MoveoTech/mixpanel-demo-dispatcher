
import { Meta, Story } from "@storybook/react";
import DateFilter from "./DatePicker";

export default {
  component: DateFilter,
  title: "Components/DateFilter",
} as Meta;

const Template: Story = (args) => <DateFilter {...args} />;

export const DatePicker1 = Template.bind({});
DatePicker1.args = {
  
};
