
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import icon from '../../assets/icons/back.svg';
import { SIZE_TYPE, VARIANT } from "../../types";

export default {
  component: Button,
  title: "Components/Buttton",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const handleClick = () => {
    window.open("https://www.ynet.co.il/", "_blank");
  };

export const Button1 = Template.bind({});
Button1.args = {
    onClick: handleClick,
    icon: icon,
    label: "button",
    variant: VARIANT.primary,
    size: SIZE_TYPE.small
};
