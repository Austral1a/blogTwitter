import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ConnectedUsers from "./Users/Users";
import ConnectedPosts from './Posts'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Store/index'
import './styles/general.scss'
import './styles/main-container.scss'
import ConnectedUserPagePosts from "./Pages/UserPagePosts";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <div className='main-container'>
                <ConnectedUsers />
                <Switch>
                    <Redirect exact from='/' to='/posts' />
                    <Route exact path='/posts'>
                        <ConnectedPosts />
                    </Route>
                    <Route exact path={`/users/:id/posts`}>
                        <ConnectedUserPagePosts />
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
