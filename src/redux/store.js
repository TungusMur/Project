import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducers from './modules';

const configureStore = (reducers = {}, preLoadedState = {}, middLewares = []) =>
  createStore(
    combineReducers({
      ...rootReducers,
      ...reducers,
    }),
    preLoadedState,
    compose(
      applyMiddleware(...middLewares, thunk, reduxLogger)
      // ,
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default configureStore;
