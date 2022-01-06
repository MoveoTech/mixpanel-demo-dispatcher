import { Meta, Story } from "@storybook/react";
import Filter, { FilterProps } from "./Filter";

export default {
  component: Filter,
  title: "Components/Filter",
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const Filter1 = Template.bind({});
Filter1.args = {
  name: "Date",
  options: [
    {
      name: "chocolate",
      value: "ch",
    },
    {
      name: "Strawberry",
      value: "st",
    },
    {
      name: "Vanilla",
      value: "vn",
    },
  ],
  onChangeValue: () => {},
};
