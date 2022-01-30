import axios from "axios";
import urlJoin from "url-join";
import { ENDPOINTS } from "../utils/types";

const apiAxios = axios.create({
  baseURL: `https://newsapi.org/v2/`,
  timeout: 10000,
});
const apiKey:any = process.env.REACT_APP_API_KEY;

export const getArticlesFromApi = async (filtersState: any, location: any) => {
  let country = "";
  if (filtersState.endpoint === ENDPOINTS.topheadlines) {
    country = filtersState.country
      ? filtersState.country
      : !filtersState.source
      ? location
      : "";
  }
  // axios.interceptors.request.use((config:any) => {
  //   config.url = urlJoin(apiKey, config.url);
  // })
  const url = 
    `${filtersState.endpoint}?q=${filtersState.searchInput}&country=${country}&category=${filtersState.category}&sources=${filtersState.source}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&apiKey=
    ${apiKey}`
  ;
  return await apiAxios.get(url);
};

export const getSourcesFromApi = async (filtersState: any) => {
  const url = urlJoin(
    `top-headlines/sources?country=${filtersState.country}&category=${filtersState.category}&language=${filtersState.language}&&apiKey=`,
    `${apiKey}`
  );
  return await apiAxios(url);
};
