import React, {PureComponent} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import CommentsSection from '../CommentsSection'
import getUserPostsActionCreator from '../Store/actions/getUserPosts'
import getPostCommentsActionCreator from "../Store/actions/getPostComments";
import UpdatePost from '../CRUD/UpdPost/UpdatePost'

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
                        Object.values(this.props.posts).map((post, id) => {
                            return (
                                <Card       // Since resource will not be really updated on the server but it will be faked as if.
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
                                    <p>{// the same as above but with body rather than title
                                        this.props.updatedPost.id === post.id
                                            && this.props.updatedPost.body
                                            ? this.props.updatedPost.body : post.body}</p>
                                    <CommentsSection
                                        post={post}
                                        comments={this.props.comments}
                                        onChange={() => this.props.getPostComments(post.id)}
                                    />
                                </Card>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const ConnectedUserPagePosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPagePosts)

export default ConnectedUserPagePosts