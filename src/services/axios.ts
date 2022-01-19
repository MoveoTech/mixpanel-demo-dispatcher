import axios from "axios";

const locationAxios = axios.create({
  baseURL: "https://ipapi.co/json/",
});


const articlesAxios = axios.create({
  baseURL: `https://cryptic-headland-94862.herokuapp.com/https://newsapi.org/v2/`,
  timeout: 10000,
  headers: { "api-key": `${process.env.REACT_APP_API_KEY}` },
});

export const getArticlesFromApi = async (filtersState: any) => {
  return await articlesAxios({
    url: `${filtersState.endpoint}?q=${filtersState.searchInput}&country=${filtersState.country}&category=${filtersState.category}&sources=${filtersState.source}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&`,
  });
};
