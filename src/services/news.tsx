import apiRequest from '../api';

async function getNews(query: string) {
  return apiRequest.get(query);
}

export const newsServices = {
  getNews,
};
