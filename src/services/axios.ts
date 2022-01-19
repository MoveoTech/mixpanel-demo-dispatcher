import axios from "axios";

const locationAxios = axios.create({
  baseURL: "https://ipapi.co/json/",
});

locationAxios.interceptors.request.use(
  (req) => {
    console.log(req);
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default locationAxios;

const articlesAxios = axios.create({
  baseURL: `https://newsapi.org/v2/`,
  timeout: 10000,
  headers: { "api-key": "2fe52557b5b44b6e9abd6666a5079799" },
});

export const urlRequest = (filtersState: any) => {
  return articlesAxios({
    url: `${filtersState.endpoint}?q=${filtersState.searchInput}&=country=${filtersState.country}&category=${filtersState.category}&sources=${filtersState.source}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&`,
  });
};
