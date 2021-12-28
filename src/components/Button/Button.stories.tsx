
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import icon from '../../assets/icons/back.svg';
import { SIZE_TYPE, VARIANT } from "../../types";

export default {
  component: Button,
  title: "Components/Buttton",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Button1 = Template.bind({});
Button1.args = {
    onClick: () => {},
    icon: icon,
    variant: VARIANT.primary,
    size: SIZE_TYPE.small,
    children: "continue"
};
