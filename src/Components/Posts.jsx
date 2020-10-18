import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import delPostActionCreator from '../Store/actions/delPost'
import PropTypes from 'prop-types'
import getAllPostsActionCreator from '../Store/actions/getAllPosts'
import Post from './Post'
import {Empty} from 'antd'

const mapStateToProps = (state) => ({
    posts: state.getAllPostsReducer.posts,
    users: state.getUsersReducer.users,
    isPostUpdated: state.updPostReducer.isPostUpdated,
    isPostDel: state.delPostReducer.isDeleted
})

const mapDispatchToProps = (dispatch) => ({
    delPost: (posts, postId) => {
        dispatch(delPostActionCreator(posts, postId))
    },
    getAllPosts: () => {
        dispatch(getAllPostsActionCreator())
    },
})

class Posts extends PureComponent {

    componentDidMount() {
        this.props.getAllPosts()
    }
    componentDidUpdate(prevProps) {
        if(prevProps.isPostUpdated !== this.props.isPostUpdated) {
            this.props.getAllPosts()
        }
        if(prevProps.isPostDel !== this.props.isPostDel) {
            this.props.getAllPosts()
        }
    }

    render() {
        const {posts, users, delPost} = this.props
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
