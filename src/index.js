import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import reducer from '../src/reducer'
let store = createStore(reducer,{},applyMiddleware(reduxThunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));


