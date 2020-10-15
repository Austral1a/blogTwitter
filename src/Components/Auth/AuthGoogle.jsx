import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Button, Divider} from 'antd'
import {GoogleOutlined} from '@ant-design/icons'
import '../../styles/auth-container.scss'
import createUserActionCreator from '../../Store/actions/createUser'

const mapStateToProps = (state) => ({
    users: state.getUsersReducer.users,
    isUserSignedIn: state.isUserSignedInReducer.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({
    createUser: (users) => {
        dispatch(createUserActionCreator(users))
    }
})

class AuthGoogle extends PureComponent {

    render() {
        return ()
    }
}

const ConnectedAuthGoogle = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthGoogle)

export default ConnectedAuthGoogle
