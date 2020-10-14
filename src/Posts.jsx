import React, {PureComponent} from 'react'
import CommentsSection from './CommentsSection'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import getAllPostsActionCreator from './Store/actions/getAllPosts'
import getPostCommentsActionCreator from './Store/actions/getPostComments'
import {Card} from 'antd'
import UpdatePost from './CRUD/UpdPost/UpdatePost'

import userNameByPostId from './helpers/userNameByPostId'

const mapStateToProps = (state) => ({
    posts: state.getAllPostsReducer.posts,
    users: state.getUsersReducer.users,
    comments: state.getPostCommentsReducer.comments,
    updatedPost: state.updPostReducer.updatedPost
})

const mapDispatchToProps = (dispatch) => ({
    getAllPosts: () => {
        dispatch(getAllPostsActionCreator())
    },
    getPostComments: (postId) => {
        dispatch(getPostCommentsActionCreator(postId))
    }
})

class Posts extends PureComponent {

    componentDidMount() {
        this.props.getAllPosts()
    }

    render() {
        return(
            <div className='posts-container'>
                {
                    Object.values(this.props.posts).map((post, id) => {
                        return (
                            <Card
                                    // Since resource will not be really updated on the server but it will be faked as if.
                                    // I comparing updated post data with already existed one,
                                    // and when existed post (title or body) are
                                    // differ from updated post (title or body), title or body gets replace
                                title={this.props.updatedPost.id === post.id
                                        && this.props.updatedPost.title
                                        ? this.props.updatedPost.title : post.title}
                                key={post.id + id}
                                extra={<UpdatePost
                                    title={post.title}
                                    body={post.body}
                                    postId={post.id}
                                />}
                            >
                                <p>Author: {<Link to={`/users/${post.userId}/posts`}>
                                    {userNameByPostId(this.props.users, post.userId)}</Link>}
                                </p>
                                <p>{// the same as above but with body rather than title
                                    this.props.updatedPost.id === post.id
                                    && this.props.updatedPost.body
                                    ? this.props.updatedPost.body : post.body}</p>
                                <CommentsSection
                                    post={post}
                                    comments={this.props.comments}
                                    onChange={() => this.props.getPostComments(post.id)} />
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

const ConnectedPosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)

export default ConnectedPosts
