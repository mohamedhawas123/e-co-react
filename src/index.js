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
import dropdownReducer from '../src/store/reducer/dropdown'
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['dropdown']
  
}



const composeEnhence = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReucer = combineReducers({
  user: userReducer,
  dropdown: dropdownReducer
})

const pReducer = persistReducer(persistConfig,rootReucer )

const store = createStore(pReducer, composeEnhence(applyMiddleware(thunk)) )

export const persistor = persistStore(store);



const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    
  </Provider>
)


ReactDOM.render(app, document.getElementById('root')
);

export default persistReducer(persistConfig, rootReucer);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
