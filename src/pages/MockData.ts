import { SIZE_TYPE, VARIANT } from "../types";

export const filterNavbar = {
    name: "Everything",
    options: [
      {
        name: "Everything",
        value: "Everything",
      },
      {
        name: "Top Headlines",
        value: "Top Headlines",
      },
    ],
    onChangeValue: () => {},
  };
  export const filterCountry = {
    name: "Country",
    options: [
        {
          name: "Israel",
          value: "is",
        },
        {
          name: "USA",
          value: "",
        },
        {
            name: "USA",
            value: "",
          },
          {
            name: "USA",
            value: "",
          },
          {
            name: "USA",
            value: "",
          },
      ],
    onChangeValue: () => {},
  };
  export const filterLanguage = {
    name: "Language",
    options: [
        {
          name: "Hebrew",
          value: "he",
        },
        {
          name: "English",
          value: "en",
        },
        {
            name: "USA",
            value: "",
          },
          {
            name: "USA",
            value: "",
          },
          {
            name: "USA",
            value: "",
          },
      ],
    onChangeValue: () => {},
  };

  export const CardArgs = {
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
      "An overnight fire and possible explosion at an ExxonMobil oil refinery in Baytown, Texas left several people injured early Thursday ",
    tags: ["#covid-19", "Israel", "umicorn", "yarden"],
    button: {
      onClick: () => {},
      icon: true,
      variant: VARIANT.primary,
      size: SIZE_TYPE.medium,
      children: "Navigate to Dispatch"
    },
  };
  export const DoughnutChartData = [
    { name: "NBC", value: 10 },
    { name: "Vulture", value: 15 },
    { name: "CNN", value: 30 },
    { name: "ESPN", value: 48 },
  ];
  export const HorizontalChartData = [
    { name: "Crypto", value: 10 },
    { name: "China", value: 15 },
    { name: "Tech", value: 30 },
    { name: "Israel", value: 48 },
    { name: "Polticis", value: 12 },
    { name: "Economy", value: 43 },
    { name: "Corona", value: 11 },
    { name: "LA", value: 5 },
  ];
  export const LineChartData = [
    { name: "MAR", value: 110 },
    { name: "APR", value: 5 },
    { name: "MAY", value: 6 },
    { name: "JUN", value: 3 },
    { name: "JUL", value: 23 },
    { name: "AUG", value: 9 },
    { name: "SEP", value: 3 },
  ];
  