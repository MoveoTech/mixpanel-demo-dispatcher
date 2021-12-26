import React from "react";
import "./App.css";
import icon from "./assets/icons/back.svg";
import Card from "./components/Card/Card";
import { SIZE_TYPE, VARIANT } from "./types";
const args = {
  date: "2021-12-23T12:17:14Z",
  image:
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211223-texas-exxon-fire-mb-1003-d6d16e.jpg",
  title:
    "'Explosion' at Baytown, Texas ExxonMobil oil refinery leaves several injured - NBC News",
  source: {
    id: "nbc-news",
    name: "NBC News",
  },
  description:
    "An overnight fire and possible explosion at an ExxonMobil oil refinery in Baytown, Texas left several people injured early Thursday",
  tags: ["#covid-19", "+2"],
  button: {
    onClick: () => {},
    icon: icon,
    label: "navigate to dispatach",
    variant: VARIANT.primary,
    size: SIZE_TYPE.medium,
  },
};
function App() {
  return <div><Card {...args}/></div>;
}

export default App;
