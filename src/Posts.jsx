import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import getAllPostsActionCreator from './Store/actions/getAllPosts'
import {Card} from 'antd'

import userNameByPostId from './helpers/userNameByPostId'

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
        return(
            <div className='posts-container'>
                {
                    Object.values(this.props.posts).map((post, id) => {
                        return (
                            <Card
                                title={post.title}
                                key={post.id + id}
                            >
                                <p>Author: {<Link to={`/users/${post.userId}/posts`}>
                                    {userNameByPostId(this.props.users, post.userId)}</Link>}
                                </p>
                                <p>{post.body}</p>
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
