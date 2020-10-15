import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import userReducer from '../src/store/reducer/user'

const composeEnhence = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReucer = combineReducers({
  user: userReducer
})

const store = createStore(rootReucer, composeEnhence(applyMiddleware(thunk)) )

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
