import {GET_USER_POSTS} from './action-types'

const getUserPosts = (posts) => ({
    type: GET_USER_POSTS,
    posts
})

export const getUserPostsActionCreator = (userId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${userId}/posts`)
            .then(res => res.json())
            .then(json => dispatch(getUserPosts(json)))
    }
}

export default getUserPostsActionCreator
