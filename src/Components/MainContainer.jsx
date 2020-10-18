import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import AuthGoogle from './Auth/AuthGoogle'
import ConnectedUsers from './Users/Users'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import ConnectedPosts from "./Pages/PostsPage";
import ConnectedUserPagePosts from './Pages/UserPagePosts'
import firebase from 'firebase'
import {Button} from 'antd'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from '../globalStyles'
import {lightTheme, darkTheme} from '../themes'
import LanguageSwitcher from './LanguageSwitcher'
import PropTypes from 'prop-types'
import {withTranslation} from 'react-i18next'

const mapStateToProps = (state) => ({
    isUserSignedIn: state.isUserSignedInReducer.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({

})

class MainContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            theme: 'light'
        }
    }


    themeToggler = () => {
        this.state.theme === 'light' ?
            this.setState({theme: 'dark'}) : this.setState({theme: 'light'})
    }

    // cause user doesnt actually creates
    // user signing out after mounting whole app, i.e on page reload
    componentDidMount() {
        firebase.auth().signOut()

        // get current theme mode from localStorage
        this.setState({theme: localStorage.getItem('theme')})
    }

    componentDidUpdate(_, prevState) {
        if(prevState.theme !== this.state.theme) {
            // set current theme mode to localStorage
            localStorage.setItem('theme',  this.state.theme)
        }
    }

    render() {
        const {t} = this.props
        return(
            <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Router>
                    {
                        !this.props.isUserSignedIn ?
                            <div className='auth-container'>
                                <h2>{t('mainSection.signIn')}</h2>
                                <AuthGoogle />
                            </div> : null
                    }
                    <LanguageSwitcher i18n={this.props.i18n} />
                    <Button type='primary' onClick={this.themeToggler}>
                        {t('mainSection.switchTheme')}
                    </Button>
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
            </ThemeProvider>
        )
    }
}

MainContainer.propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired
}

const ConnectedMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(MainContainer))

export default ConnectedMainContainer
