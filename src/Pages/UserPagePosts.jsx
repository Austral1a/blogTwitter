import React, {PureComponent} from 'react'
import {Card, Empty} from 'antd'
import {connect} from 'react-redux'
import CommentsSection from '../CommentsSection'
import getUserPostsActionCreator from '../Store/actions/getUserPosts'
import getPostCommentsActionCreator from "../Store/actions/getPostComments";
import PostToolbar from '../CRUD/Post/PostToolbar'
import delPostActionCreator from '../Store/actions/delPost'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => ({
    posts: state.getUserPostsReducer.posts,
    currUserId: state.getCurrUserIdReducer.userId,
    comments: state.getPostCommentsReducer.comments,
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

class UserPagePosts extends PureComponent {

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
        return (
            <>
                <div className='posts-container'>
                    {
                        this.props.posts.length > 0 ? Object.values(this.props.posts).map((post, id) => {
                            return (
                                post.id ?
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
                                    </Card> : null
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
    currUserId: PropTypes.string,
    comments: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    updatedPost: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

const ConnectedUserPagePosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPagePosts)

export default ConnectedUserPagePosts