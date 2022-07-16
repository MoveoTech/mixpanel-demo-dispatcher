
import { Meta, Story } from "@storybook/react";
import Search, { SearchProps } from "./Search";

export default {
  component: Search,
  title: "Components/Search",
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;


export const Search1 = Template.bind({});
Search1.args = {
  searchFunc: () => {}
};
