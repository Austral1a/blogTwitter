import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import delPostActionCreator from '../../Store/actions/delPost'
import PropTypes from 'prop-types'
import getAllPostsActionCreator from '../../Store/actions/getAllPosts'
import Post from '../Post'
import {Empty} from 'antd'
import {withTranslation} from 'react-i18next'

const mapStateToProps = (state) => ({
    posts: state.getAllPostsReducer.posts,
    users: state.getUsersReducer.users,
    isPostUpdated: state.updPostReducer.isPostUpdated,
    isPostDel: state.delPostReducer.isDeleted,
    isPostCreated: state.createPostReducer.isCreated
})

const mapDispatchToProps = (dispatch) => ({
    delPost: (postId) => {
        dispatch(delPostActionCreator(postId))
    },
    getAllPosts: () => {
        dispatch(getAllPostsActionCreator())
    }
})

class PostsPage extends PureComponent {

    componentDidMount() {
        this.props.getAllPosts()
    }
    componentDidUpdate(prevProps) {
        // re-render if user updated a post
        if(prevProps.isPostUpdated !== this.props.isPostUpdated) {
            this.props.getAllPosts()
        }
        // re-render if user deleted a post
        if(prevProps.isPostDel !== this.props.isPostDel) {
            this.props.getAllPosts()
        }
        // re-render if user created a post
        if(prevProps.isPostCreated !== this.props.isPostCreated) {
            this.props.getAllPosts()
        }
    }

    render() {
        const {posts, users, delPost, t} = this.props
        return(
            <div className='posts-container'>
                {
                    posts.length > 0 ? Object.values(posts).map((post, id) => {
                        return (
                                <Post
                                    key={Math.random()}
                                    posts={posts}
                                    post={post}
                                    users={users}
                                    id={id}
                                    delPost={delPost}
                                />
                        )
                    }): <Empty description={t('postsSection.noPosts')} />
                }
            </div>
        )
    }
}

PostsPage.propTypes = {
    posts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isPostUpdated: PropTypes.bool,
    isPostDel: PropTypes.bool,
    isPostCreated: PropTypes.bool,
    delPost: PropTypes.func.isRequired,
    getAllPosts: PropTypes.func.isRequired
}

const ConnectedPosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(PostsPage))


export default ConnectedPosts
