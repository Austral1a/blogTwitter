import React, {PureComponent} from 'react'
import {Empty} from 'antd'
import {connect} from 'react-redux'
import getUserPostsActionCreator from '../Store/actions/getUserPosts'
import getPostCommentsActionCreator from '../Store/actions/getPostComments'
import delPostActionCreator from '../Store/actions/delPost'
import PropTypes from 'prop-types'
import Post from '../Post'
import {withTranslation} from 'react-i18next'

const mapStateToProps = (state) => ({
    posts: state.getUserPostsReducer.posts,
    currUserId: state.getCurrUserIdReducer.userId,
    users: state.getUsersReducer.users,
    isPostUpdated: state.updPostReducer.isPostUpdated,
    isPostDel: state.delPostReducer.isDeleted,
    isPostCreated: state.createPostReducer.isCreated
})

const mapDispatchToProps = (dispatch) => ({
    getUserPosts: (userId) => {
        dispatch(getUserPostsActionCreator(userId))
    },
    getPostComments: (postId) => {
        dispatch(getPostCommentsActionCreator(postId))
    },
    delPost: (postId) => {
        dispatch(delPostActionCreator(postId))
    }
})

class UserPagePosts extends PureComponent {

    componentDidMount() {
        this.props.getUserPosts(localStorage.getItem('curr_user_id'))
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currUserId !== this.props.currUserId) {
            this.props.getUserPosts(localStorage.getItem('curr_user_id'))
        }
        if(prevProps.isPostUpdated !== this.props.isPostUpdated) {
            this.props.getUserPosts(localStorage.getItem('curr_user_id'))
        }
        if(prevProps.isPostDel !== this.props.isPostDel) {
            this.props.getUserPosts(localStorage.getItem('curr_user_id'))
        }
        if(prevProps.isPostCreated !== this.props.isPostCreated) {
            this.props.getUserPosts(localStorage.getItem('curr_user_id'))
        }
    }

    render() {
        const {posts, users, delPost, t} = this.props
        return (
            <div className='posts-container'>
                {
                    posts.length > 0 ? Object.values(posts).map((post, id) => {
                        return (
                            <Post
                                key={Math.random()}
                                posts={posts}
                                id={id}
                                post={post}
                                users={users}
                                delPost={delPost}
                            />
                        )
                    }): <Empty description={t('postsSection.noPosts')} />
                }
            </div>
        )
    }
}

UserPagePosts.propTypes = {
    posts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    currUserId: PropTypes.number,
    updatedPost: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    getUserPosts: PropTypes.func.isRequired,
    getPostComments: PropTypes.func.isRequired,
    delPost: PropTypes.func.isRequired
}

const ConnectedUserPagePosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(UserPagePosts))

export default ConnectedUserPagePosts
