import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios';


const giphyList = (state = [], action) => {
    if (action.type === 'GET_GIPHY_DATA') {
        return action.payload;
    }
    return state;
}


function* getGiphy(action) {
    const giphySearch = action.payload
    // addGiphyData works like response, addGiphyData is response.data
    const addGiphyData = yield axios.get(`/api/giphy/${giphySearch}`)
    console.log("")
    yield put({ type: 'GET_GIPHY_DATA', payload: addGiphyData.data })
}

function* rootSaga() {
    yield takeLatest('FETCH_SEARCH', getGiphy)
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        giphyList
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
