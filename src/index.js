import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import ConnectedMainContainer from './Components/MainContainer'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './Store/index'
import {I18nextProvider} from 'react-i18next'
import i18n from './i18n'
import './styles/general.scss'
import './styles/main-container.scss'

const firebaseConfig = {
    apiKey: 'AIzaSyA9ijLIiz_etxZ12RzixJAme8C08OTb46Y',
    authDomain: "blog-98e20.firebaseapp.com",
    databaseURL: "https://blog-98e20.firebaseio.com",
    projectId: "blog-98e20",
    storageBucket: "blog-98e20.appspot.com",
    messagingSenderId: "786012935670",
    appId: "1:786012935670:web:160d15d04220533c75a3d7"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
          <Provider store={store}>
              <ConnectedMainContainer />
          </Provider>
      </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
