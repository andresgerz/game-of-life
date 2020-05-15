import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { loadState, saveState } from './localStorage';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const persistedState = loadState();
const store = createStoreWithMiddleware(
  reducers,
  persistedState
); 

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));