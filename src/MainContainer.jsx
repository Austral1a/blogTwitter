import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import AuthGoogle from "./Components/Auth/AuthGoogle";
import ConnectedUsers from "./Users/Users";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import ConnectedPosts from "./Posts";
import ConnectedUserPagePosts from "./Pages/UserPagePosts";
import firebase from 'firebase'

const mapStateToProps = (state) => ({
    isUserSignedIn: state.isUserSignedInReducer.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({

})

class MainContainer extends PureComponent {

    // cause user doesnt actually creates
    // user signing out after mounting whole app, i.e on page reload
    componentDidMount() {
        firebase.auth().signOut()
    }

    render() {
        return(
            <Router>
                {
                    !this.props.isUserSignedIn ?
                        <div className='auth-container'>
                            <h2>Sign-In</h2>
                            <AuthGoogle />
                        </div> : null

                }
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
        )
    }
}

const ConnectedMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer)

export default ConnectedMainContainer
