import React, {Component} from 'react'
import {Empty} from 'antd'
import {connect} from 'react-redux'
import getUserPostsActionCreator from '../Store/actions/getUserPosts'
import getPostCommentsActionCreator from "../Store/actions/getPostComments";
import delPostActionCreator from '../Store/actions/delPost'
import PropTypes from 'prop-types'
import Post from '../Post'

const mapStateToProps = (state) => ({
    posts: state.getUserPostsReducer.posts,
    currUserId: state.getCurrUserIdReducer.userId,
    comments: state.getPostCommentsReducer.comments,
    users: state.getUsersReducer.users,
    updatedPost: state.updPostReducer.updatedPost
})

const mapDispatchToProps = (dispatch) => ({
    getUserPosts: (userId) => {
        dispatch(getUserPostsActionCreator(userId))
    },
    getPostComments: (postId) => {
        dispatch(getPostCommentsActionCreator(postId))
    },
    delPost: (posts, postId) => {
        dispatch(delPostActionCreator(posts, postId))
    }
})

class UserPagePosts extends Component {

    shouldComponentUpdate(nextProps) {
        if(nextProps.currUserId !== this.props.currUserId) return true
        if(nextProps.posts !== this.props.posts) return true
        if(nextProps.updatedPost !== this.props.updatedPost) return true
    }

    componentDidMount() {
        // default val of currUserId is null, so after reloading currUserId is takes from localStorage
        this.props.getUserPosts(this.props.currUserId || localStorage.getItem('curr_user_id'))
    }

    // when current user id is changed, please re-render the component to correspond new id
    componentDidUpdate(prevProps) {
        if(prevProps.currUserId !== this.props.currUserId) {
            this.props.getUserPosts(this.props.currUserId)
        }
    }

    render() {
        const {posts, users, updatedPost, delPost} = this.props
        return (
            <>
                <div className='posts-container'>
                    {
                        posts.length > 0 ? Object.values(posts).map((post, id) => {
                            return (
                                <Post
                                    posts={posts}
                                    id={id}
                                    post={post}
                                    users={users}
                                    updatedPost={updatedPost}
                                    delPost={delPost}
                                />
                            )
                        }): <Empty description={'There are no posts'} />
                    }
                </div>
            </>
        )
    }
}

UserPagePosts.propTypes = {
    posts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    currUserId: PropTypes.number,
    comments: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    updatedPost: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    getUserPosts: PropTypes.func.isRequired,
    getPostComments: PropTypes.func.isRequired,
    delPost: PropTypes.func.isRequired
}

const ConnectedUserPagePosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPagePosts)

export default ConnectedUserPagePosts


/*post.id ?
                                    <Card       // Since resource will not be really updated on the server but it will be faked as if.
                                                // I comparing updated post data with already existed one,
                                                // and when existed post (title or body) are
                                                // differ from updated post (title or body), title or body gets replace
                                        title={this.props.updatedPost.id === post.id
                                                && this.props.updatedPost.title
                                                ? this.props.updatedPost.title : post.title}
                                        key={post.id + Math.random()}
                                        extra={<PostToolbar
                                            title={post.title}
                                            body={post.body}
                                            posts={this.props.posts}
                                            postId={post.id}
                                            delPost={() => this.props.delPost(this.props.posts, post.id)}
                                        />}
                                        >
                                        <p>{// the same as above but with body rather than title
                                            this.props.updatedPost.id === post.id
                                                && this.props.updatedPost.body
                                                ? this.props.updatedPost.body : post.body}</p>
                                        <CommentsSection
                                            post={post}
                                            comments={this.props.comments}
                                            onChange={() => this.props.getPostComments(post.id)}
                                        />
                                    </Card> : null*/