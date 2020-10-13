import {GET_USER_POSTS} from './action-types'

const getUserPosts = (posts) => ({
    type: GET_USER_POSTS,
    posts
})

export const getUserPostsActionCreator = (userId) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(res => res.json())
            .then(json => dispatch(getUserPosts(json)))
    }
}

export default getUserPostsActionCreator
