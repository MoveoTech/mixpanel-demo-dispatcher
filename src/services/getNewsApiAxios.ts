import axios from "axios";
import { ENDPOINTS } from "../utils/types";

const apiAxios = axios.create({
  baseURL: `https://newsapi.org/v2/`,
  timeout: 10000,
});

export const getArticlesFromApi = async (filtersState: any, location: any) => {
  //preper url string
  //send request
  let country = "";
  if (filtersState.endpoint === ENDPOINTS.topheadlines) {
    country = filtersState.country ? filtersState.country : location;
  }
  return await apiAxios.get(
    `${filtersState.endpoint}?q=${filtersState.searchInput}&country=${country}&category=${filtersState.category}&sources=${filtersState.source}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&apiKey=${process.env.REACT_APP_API_KEY}`
  );
};

export const getSourcesFromApi = async (filtersState: any) => {
  return await apiAxios(
    `top-headlines/sources?country=${filtersState.country}&category=${filtersState.category}&language=${filtersState.language}&&apiKey=${process.env.REACT_APP_API_KEY}`
  );
};
