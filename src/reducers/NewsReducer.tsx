import {
  SET_NEWS_DATA,
  SET_NEWS_ERROR,
  SET_NEWS_LOADING,
} from '../constants/ActionTypes';
const initialState = {
  news: [],
  error: '',
  loading: false,
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_DATA:
      return {
        ...state,
        news: action.payload,
        error: '',
        loading: false,
      };
    case SET_NEWS_ERROR:
      return {
        ...state,
        news: [],
        error: action.payload,
        loading: false,
      };
    case SET_NEWS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default newsReducer;
