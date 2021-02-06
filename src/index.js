import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './Container/container';
import createSagaMiddleware from 'redux-saga';
import reportWebVitals from './reportWebVitals';
import rootReducer from './Services/Reducers/rootreducer';
import {watchAlbumSet} from './Sagas/saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAlbumSet);
//console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
