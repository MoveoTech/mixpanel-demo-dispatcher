import axios from "axios";


const MAX_NUMBER_OF_ARTICELS = 20;

const apiAxios = axios.create({
  baseURL: `http://api.mediastack.com/v1/news`,
  timeout: 10000,
});

export const getArticlesFromApi = async (filtersState: any, location: any, pageNumber: number) => {
  console.log(filtersState)
  console.log('location:', location)
  console.log('pageNumber:', pageNumber)
  return apiAxios.get('', {
    params: {
      limit: MAX_NUMBER_OF_ARTICELS,
      offset: MAX_NUMBER_OF_ARTICELS * (pageNumber - 1),
      languages: 'en',
      categories: filtersState?.category,
      keywords: filtersState?.searchInput,
      access_key: process.env.REACT_APP_API_KEY
    }
  }).then(res => {
    return {
      data: {
        articles: [...res.data.data],
        totalResults: res.data.pagination.total
      }
    }
  })

};

export const getSourcesFromApi = async (filtersState: any) => {
  const data = {
    "status": "ok",
    "sources": [
      {
        "id": "abc-news",
        "name": "ABC News",
        "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
        "url": "https://abcnews.go.com",
        "category": "general",
        "language": "en",
        "country": "us"
      },
      {
        "id": "abc-news-au",
        "name": "ABC News (AU)",
        "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        "url": "http://www.abc.net.au/news",
        "category": "general",
        "language": "en",
        "country": "au"
      },
      {
        "id": "aftenposten",
        "name": "Aftenposten",
        "description": "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
        "url": "https://www.aftenposten.no",
        "category": "general",
        "language": "no",
        "country": "no"
      },
      {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English",
        "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
        "url": "http://www.aljazeera.com",
        "category": "general",
        "language": "en",
        "country": "us"
      }]
  }
  return Promise.resolve({ data });
  // const url = `top-headlines/sources?country=${filtersState.country}&category=${filtersState.category}&language=${filtersState.language}&&apiKey=${apiKey}`;
  // return await apiAxios(url);
};


export const search = (source: string, limit: number, offset: number) => {
  return apiAxios.get('', {
    params: {
      limit,
      offset,
      access_key: process.env.REACT_APP_API_KEY
    }
  }).then(res => {
    return {
      data: {
        articles: [...res.data.data],
        totalResults: res.data.pagination.total
      }
    }
  })
}