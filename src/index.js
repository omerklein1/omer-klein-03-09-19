import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
	
import allReducrs from './reducers'

const store = createStore(allReducrs, applyMiddleware(thunk, createLogger()))

ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider>
   , document.getElementById('root')
);


