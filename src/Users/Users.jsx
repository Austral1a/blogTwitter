import React, {PureComponent} from 'react'
import {getUsersActionCreator} from "../Store/actions/getUsers";

const mapStateToProps = (state) => ({
    users: state.getUsersReducer.users
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
        dispatch(getUsersActionCreator())
    }
})

class Users extends PureComponent {
    render() {
        return ()
    }
}

export default Users
