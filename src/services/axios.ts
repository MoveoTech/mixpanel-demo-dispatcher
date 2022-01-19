import axios from "axios";

const locationAxios = axios.create({
  baseURL: "https://ipapi.co/json/",
});


const articlesAxios = axios.create({
  baseURL: `https://newsapi.org/v2/`,
  timeout: 10000,
  headers: { "api-key": `${process.env.REACT_APP_API_KEY}` },
});

export const urlRequest = async (filtersState: any) => {
  return articlesAxios({
    url: `${filtersState.endpoint}?q=${filtersState.searchInput}&=country=${filtersState.country}&category=${filtersState.category}&sources=${filtersState.source}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&`,
  });
};
