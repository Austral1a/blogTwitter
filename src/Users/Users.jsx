import React, {PureComponent} from 'react'
import {getUsersActionCreator} from "../Store/actions/getUsers";
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    users: state.getUsersReducer.users
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
        dispatch(getUsersActionCreator())
    }
})

class Users extends PureComponent {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return ()
    }
}

const ConnectedUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

export default ConnectedUsers
