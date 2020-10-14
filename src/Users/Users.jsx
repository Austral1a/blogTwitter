import React, {PureComponent} from 'react'
import isUserSignedInActionCreator from '../Store/actions/isUserSignedIn'
import {getUsersActionCreator} from "../Store/actions/getUsers";
import {connect} from 'react-redux'
import {List} from "antd";
import {Link} from "react-router-dom";
import getCurrUserIdActionCreator from '../Store/actions/getCurrUserId'

const mapStateToProps = (state) => ({
    users: state.getUsersReducer.users,
    isUserSignedIn: state.isUserSignedInReducer.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
        dispatch(getUsersActionCreator())
    },
    getCurrUserId: (id) => {
        dispatch(getCurrUserIdActionCreator(id))
    },
    isUserSignedInCheck: () => {
        dispatch(isUserSignedInActionCreator())
    }
})

class Users extends PureComponent {

    componentDidMount() {
        this.props.getUsers()
        this.props.isUserSignedInCheck()
    }

    render() {
        return (
            <List
                // itemLayout is layout of list
                itemLayout='horizontal'
                header={<Link to='/posts'>All Users</Link>}
                // dataSource is array for list
                dataSource={Object.values(this.props.users)}
                // adds border
                bordered
                size='small'
                // renderItem uses elements from dataSource to render
                renderItem={(user) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Link
                                onClick={() => this.props.getCurrUserId(user.id)}
                                to={`/users/${user.id}/posts`}>{user.name}</Link>}
                            description={user.email}
                        />
                    </List.Item>
                )}
                // additional class, used in `styles/main-container.scss`
                className='users-container'
            />
        )
    }
}

const ConnectedUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

export default ConnectedUsers
