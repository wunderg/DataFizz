import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import main from '../reducers/main.js';

const logger = createLogger({
  collapsed: () => true,
});

export const rootReducer = combineReducers({
  main
});

const createStoreWithMiddleware = applyMiddleware(
  promise,
  thunkMiddleware,
   logger
)(createStore);

export default function storeConfig(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
