
import { Meta, Story } from "@storybook/react";
import Card, { CardProps } from "./Card";
import { SIZE_TYPE } from "../../types";
import icon from '../../assets/icons/back.svg';
import { VARIANT } from "../../types";

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

const handleClick = () => {
  window.open("https://www.ynet.co.il/", "_blank");
};

export const Card1 = Template.bind({});
Card1.args = {
    date: "2021-12-23T12:17:14Z",
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211223-texas-exxon-fire-mb-1003-d6d16e.jpg",
    title: "'Explosion' at Baytown, Texas ExxonMobil oil refinery leaves several injured - NBC News",
    source: {
        id: "nbc-news",
        name: "NBC News",
    },
    description: "An overnight fire and possible explosion at an ExxonMobil oil refinery in Baytown, Texas left several people injured early Thursday",
    tags: ['#covid-19','+2'],
    button: {
      onClick: handleClick,
      icon: icon,
      label: "navigate to dispatach",
      variant: VARIANT.primary,
      size: SIZE_TYPE.medium
    },
};
