import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import icon from '../../assets/icons/back.svg';

export default {
  component: Button,
  title: "Components/Card",
} as Meta;

// args in TS way
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const handleClick = () => {
    window.open("https://www.ynet.co.il/", "_blank");
  };

export const V1 = Template.bind({});
V1.args = {
    onClick: handleClick,
    color: "#0058B9",
    hover: "#3379C7",
    icon: icon,
    children: "Navigate to dispatch",
    size: "small"
};
