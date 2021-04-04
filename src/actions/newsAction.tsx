import {newsServices} from '../services/news';
import {
  SET_NEWS_DATA,
  SET_NEWS_ERROR,
  SET_NEWS_LOADING,
} from '../constants/ActionTypes';

export const newsAction = {
  getNews,
  setNewsLoading,
};
function getNews(query: string) {
  const url =
    query !== ''
      ? 'everything?from=2021-04-03&to=2021-04-03&sortBy=popularity&q=' + query
      : 'top-headlines?country=us&category=business';
  return dispatch => {
    newsServices
      .getNews(url)
      .then(response => {
        console.log(response.data.articles);
        dispatch(setNewsData(response.data.articles));
      })
      .catch(error => {
        console.log(error);
        dispatch(setNewsError(error.toString()));
      })
      .finally(() => {
        dispatch(setNewsLoading(false));
      });
  };
}

function setNewsData(payload: any) {
  return {
    type: SET_NEWS_DATA,
    payload: payload,
  };
}

function setNewsError(payload: string) {
  return {
    type: SET_NEWS_ERROR,
    payload: payload,
  };
}

function setNewsLoading(payload: boolean) {
  return {
    type: SET_NEWS_LOADING,
    payload: payload,
  };
}
