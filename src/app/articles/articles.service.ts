import axios from 'axios';
import { ENDPOINTS } from '../../types/types';

const apiAxios = axios.create({
  baseURL: `https://newsapi.org/v2/`,
  timeout: 10000,
});

export class ArticlesService {
  async getAll(filtersState, location, pageNumber) {
    let country = '';
    if (filtersState.endpoint === ENDPOINTS.topheadlines) {
      country = filtersState.country
        ? filtersState.country
        : !filtersState.category && !filtersState.sourceTopheadlines
        ? location
        : '';
    }
    const urlEverything = `${filtersState.endpoint}?q=${filtersState.searchInput}&pageSize=10&page=${pageNumber}&sources=${filtersState.sourceEverything}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&apiKey=${apiKey}`;
    const urlTopheadlines = `${filtersState.endpoint}?q=${filtersState.searchInput}&pageSize=10&page=${pageNumber}&country=${country}&category=${filtersState.category}&sources=${filtersState.sourceTopheadlines}&apiKey=${apiKey}`;

    return await apiAxios.get(
      filtersState.endpoint === ENDPOINTS.topheadlines
        ? urlTopheadlines
        : urlEverything,
    );
  }
}
