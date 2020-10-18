import {GET_ALL_POSTS} from './action-types'
import url from '../../serverUrl'

const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    posts
})

export const getAllPostsActionCreator = () => {
    return (dispatch) => {
        fetch(`${url}/posts`)
            .then(res => res.json())
            .then(json => dispatch(getAllPosts(json)))
    }
}

export default getAllPostsActionCreator
