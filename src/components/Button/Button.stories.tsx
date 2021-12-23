import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import icon from '../../assets/icons/back.svg';
import { BUTTON_SIZE, VARIANT } from "../../types";

export default {
  component: Button,
  title: "Components/Buttton",
} as Meta;

// args in TS way
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const handleClick = () => {
    window.open("https://www.ynet.co.il/", "_blank");
  };

export const V1 = Template.bind({});
V1.args = {
    onClick: handleClick,
    icon: icon,
    label: "button",
    variant: VARIANT.primary,
    size: BUTTON_SIZE.small
};
