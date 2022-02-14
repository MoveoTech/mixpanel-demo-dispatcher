import axios from "axios";
import { ENDPOINTS } from "../utils/types";

const apiAxios = axios.create({
  baseURL: `https://newsapi.org/v2/`,
  timeout: 10000,
});
const apiKey: any = process.env.REACT_APP_API_KEY;

// export const getArticlesFromApi = async (
//   filtersState: any,
//   location: any,
//   pageNumber: number
// ) => {
//   let country = "";
//   if (filtersState.endpoint === ENDPOINTS.topheadlines) {
//     country = filtersState.country
//       ? filtersState.country
//       : !filtersState.source
//       ? location
//       : "";
//   }
//   apiAxios.interceptors.request.use((config: any) => {
//     config.url = config.url + `&apiKey=${apiKey}`;
//     return config;
//   });

//   const url = `${filtersState.endpoint}?q=${filtersState.searchInput}&pageSize=10&page=${pageNumber}&country=${country}&category=${filtersState.category}&sources=${filtersState.source}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}`;
//   return await apiAxios(url);
// };

// export const getSourcesFromApi = async (filtersState: any) => {
//   const url = `top-headlines/sources?country=${filtersState.country}&category=${filtersState.category}&language=${filtersState.language}`;
//   return await apiAxios(url);
// };

export const getArticlesFromApi = async (filtersState: any, location: any, pageNumber : number) => {
  let country = "";
  if (filtersState.endpoint === ENDPOINTS.topheadlines) {
    country = filtersState.country
      ? filtersState.country
      : !filtersState.source
      ? location
      : "";
  }
  
  const url = `${filtersState.endpoint}?q=${filtersState.searchInput}&pageSize=10&page=${pageNumber}&country=${country}&category=${filtersState.category}&sources=${filtersState.source}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&apiKey=${apiKey}`;
  return await apiAxios.get(url);
};

export const getSourcesFromApi = async (filtersState: any) => {
  const url = `top-headlines/sources?country=${filtersState.country}&category=${filtersState.category}&language=${filtersState.language}&&apiKey=${apiKey}`;
  return await apiAxios(url);
};