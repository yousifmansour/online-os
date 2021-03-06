import React from 'react';
import ReactDOM from 'react-dom';
import App from 'system/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import reducer from 'reducers';
import {getState} from 'actions/global'

/* MIDDLEWARE SETUP */
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

// for pdf reader
import {pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// let url = 'http://localhost:5000';
let url = 'https://www.yousifmansour.space:5000';

let socket = io(url);

// will emit aciton if it's not from server
let socketIoMiddleware = createSocketIoMiddleware(socket, (type, action) => !action.fromServer);

// will dispatch action and then send the new state
const persistToServer = store => next => action => {
    let result = next(action);
    if (!action.fromServer) 
        socket.emit('update state', store.getState());
    return result;
};
/* MIDDLEWARE SETUP */

const store = applyMiddleware(socketIoMiddleware, persistToServer, thunk)(createStore)(reducer);

// const store = applyMiddleware(thunk)(createStore)(reducer);

store.dispatch(getState());

ReactDOM.render(
    <Provider store={store}>
    <HashRouter><App/></HashRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
