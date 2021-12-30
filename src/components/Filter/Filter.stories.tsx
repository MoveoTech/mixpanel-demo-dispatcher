
import { Meta, Story } from "@storybook/react";
import Filter, { FilterProps } from "./Filter";

export default {
  component: Filter,
  title: "Components/Filter",
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const Filter1 = Template.bind({});
Filter1.args = {
  options: ['chocolate','Strawberry','Vanilla','chocolate','Strawberry','Vanilla','chocolate','Strawberry','Vanilla'],
  name: "country",
  onChangeValue: (value: string) => {}
};
