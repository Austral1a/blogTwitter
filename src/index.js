import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ConnectedUsers from "./Users/Users";
import ConnectedPosts from './Posts'
import {Provider} from 'react-redux'
import store from './Store/index'
import './styles/general.scss'
import './styles/main-container.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <div className='main-container'>
            <ConnectedUsers />
            <ConnectedPosts />
        </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
