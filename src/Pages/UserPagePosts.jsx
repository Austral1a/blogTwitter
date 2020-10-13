import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import getUserPostsActionCreator from '../Store/actions/getUserPosts'

const mapStateToProps = (state) => ({
    posts: state.getUserPostsReducer.posts,
    currUserId: state.getCurrUserIdReducer.userId
})

const mapDispatchToProps = (dispatch) => ({
    getUserPosts: (userId) => {
        dispatch(getUserPostsActionCreator(userId))
    }
})

class UserPagePosts extends PureComponent {
    render() {
        return ('')
    }
}

const ConnectedUserPagePosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPagePosts)

export default ConnectedUserPagePosts