import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import getAllPostsActionCreator from './Store/actions/getAllPosts'

const mapStateToProps = (state) => ({
    posts: state.getAllPostsReducer.posts,
    users: state.getUsersReducer.users
})

const mapDispatchToProps = (dispatch) => ({
    getAllPosts: () => {
        dispatch(getAllPostsActionCreator())
    }
})

class Posts extends PureComponent {

    componentDidMount() {
        this.props.getAllPosts()
    }

    render() {
        return('')
    }
}

const ConnectedPosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)

export default ConnectedPosts
