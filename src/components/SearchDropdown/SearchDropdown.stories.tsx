import { Meta, Story } from "@storybook/react";
import SearchDropdown, { SearchDropdownProps } from "./SearchDropdown";

export default {
  component: SearchDropdown,
  title: "Components/SearchDropdown",
} as Meta;

const Template: Story<SearchDropdownProps> = (args) => (
  <SearchDropdown {...args} />
);

export const SearchDropdown1 = Template.bind({});
SearchDropdown1.args = {
  items: [
    "chocolate",
    "Strawberry",
    "Vanilla",
    "chocolate",
    "Strawberry",
    "Vanilla",
    "chocolate",
    "Strawberry",
    "Vanilla",
  ],
  onChooseItem: () => {},
  onDeleteItem: () => {},
};
