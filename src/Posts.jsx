import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import getAllPostsActionCreator from "./Store/actions/getUsers";

const mapStateToProps = (state) => ({
    posts: state.getAllPostsReducer.posts
})

const mapDispatchToProps = (dispatch) => ({
    getAllPosts: () => {
        dispatch(getAllPostsActionCreator())
    }
})

class Posts extends PureComponent {
    render() {
        return('')
    }
}

const ConnectedPosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)

export default Posts
