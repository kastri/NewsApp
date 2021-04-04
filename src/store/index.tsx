import {createStore, combineReducers, applyMiddleware} from 'redux';
import NewsReducer from '../reducers/NewsReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({newsReducer: NewsReducer});
const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};
export default configureStore;
