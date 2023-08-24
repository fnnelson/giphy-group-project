import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(
        logger,
        sagaMiddleware
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
