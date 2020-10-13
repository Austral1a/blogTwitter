import React, {PureComponent} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import getUserPostsActionCreator from '../Store/actions/getUserPosts'

const mapStateToProps = (state) => ({
    posts: state.getUserPostsReducer.posts,
    currUserId: state.getCurrUserIdReducer.userId
})

const mapDispatchToProps = (dispatch) => ({
    getUserPosts: (userId) => {
        dispatch(getUserPostsActionCreator(userId))
    }
})

class UserPagePosts extends PureComponent {

    componentDidMount() {
        // default val of currUserId is null, so after reloading currUserId is takes from localStorage
        this.props.getUserPosts(this.props.currUserId || localStorage.getItem('curr_user_id'))
    }


    render() {
        return (
            <>
                <div className='posts-container'>
                    {
                        Object.values(this.props.posts).map((post, id) => {
                            return (
                                <Card
                                    title={post.title}
                                    key={post.id + id}
                                >
                                    <p>{post.body}</p>
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