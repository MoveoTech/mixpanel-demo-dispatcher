
import { Meta, Story } from "@storybook/react";

export default {
  component: Navbar,
  title: "Components/Navbar",
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Navbar1 = Template.bind({});
Navbar1.args = {
    onClick: handleClick,
    icon: icon,
    label: "button",
    variant: VARIANT.primary,
    size: SIZE_TYPE.small
};
