import {GET_ALL_POSTS} from './action-types'

const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    posts
})

export const getAllPostsActionCreator = () => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(json => dispatch(getAllPosts(json)))
    }
}

export default getAllPostsActionCreator
