import {GET_USER_POSTS} from './action-types'
import url from '../../serverUrl'

const getUserPosts = (posts) => ({
    type: GET_USER_POSTS,
    posts
})

export const getUserPostsActionCreator = (userId) => {
    return (dispatch) => {
        fetch(`${url}/users/${userId}/posts`)
            .then(res => res.json())
            .then(json => dispatch(getUserPosts(json)))
    }
}

export default getUserPostsActionCreator
