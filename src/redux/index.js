import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import apiReducer from './API/Reducers/Index';
import ViewReducer from './views/view.reducers';

const { NODE_ENV } = process.env;
const middlewares = [thunk];
const rootReducers = combineReducers({ api: apiReducer, view: ViewReducer });

const enableDevTools = NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

const store = createStore(rootReducers, enableDevTools);

export default store;
