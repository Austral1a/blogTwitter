import React, {Component} from 'react'
import {connect} from 'react-redux'
import delPostActionCreator from './Store/actions/delPost'
import PropTypes from 'prop-types'
import getAllPostsActionCreator from "./Store/actions/getAllPosts";
import Post from './Post'
import {Empty} from "antd";

const mapStateToProps = (state) => ({
    posts: state.getAllPostsReducer.posts,
    users: state.getUsersReducer.users,
    updatedPost: state.updPostReducer.updatedPost
})

const mapDispatchToProps = (dispatch) => ({
    delPost: (posts, postId) => {
        dispatch(delPostActionCreator(posts, postId))
    },
    getAllPosts: () => {
        dispatch(getAllPostsActionCreator())
    },
})

class Posts extends Component {

    componentDidMount() {
        this.props.getAllPosts()
    }

    render() {
        const {posts, users, updatedPost, delPost} = this.props
        return(
            <div className='posts-container'>
                {
                    posts.length > 0 ? Object.values(posts).map((post, id) => {
                        return (
                                <Post
                                    key={Math.random()}
                                    posts={posts}
                                    post={post}
                                    id={id}
                                    users={users}
                                    updatedPost={updatedPost}
                                    delPost={delPost}
                                />
                        )
                    }): <Empty description='There are no posts' />
                }
            </div>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    comments: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    updatedPost: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

const ConnectedPosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)


export default ConnectedPosts
