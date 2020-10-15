import React, {PureComponent} from 'react'
import isUserSignedInActionCreator from '../Store/actions/isUserSignedIn'
import {getUsersActionCreator} from "../Store/actions/getUsers";
import getUserPostsActionCreator from '../Store/actions/getUserPosts'
import {connect} from 'react-redux'
import {List} from "antd";
import {Link} from "react-router-dom";
import getCurrUserIdActionCreator from '../Store/actions/getCurrUserId'
import ConnectedCreatePostDrawer from '../CRUD/Post/CreatePostDrawer'

const mapStateToProps = (state) => ({
    users: state.getUsersReducer.users,
    isUserSignedIn: state.isUserSignedInReducer.isSignedIn,
    posts: state.getAllPostsReducer.posts,
    userPosts: state.getUserPostsReducer.posts
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
    },
    getUserPosts: (userId) => {
        dispatch(getUserPostsActionCreator(userId))
    }
})

class Users extends PureComponent {

    componentDidMount() {
        this.props.getUsers()
        this.props.getUserPosts(this.props.users.length)
        this.props.isUserSignedInCheck()
    }

    render() {
        return (
            <List
                // itemLayout is layout of list
                itemLayout='horizontal'
                header={[<Link key={Math.random()} to='/posts'>All Users</Link>, this.props.isUserSignedIn ?
                    <ConnectedCreatePostDrawer
                    key={Math.random()}
                    userPosts={this.props.userPosts}
                    userId={this.props.users.length} /> : null]}
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
