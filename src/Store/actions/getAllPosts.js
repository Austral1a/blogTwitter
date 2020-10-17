import {GET_ALL_POSTS} from './action-types'

const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    posts
})

export const getAllPostsActionCreator = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(json => dispatch(getAllPosts(json)))
    }
}

export default getAllPostsActionCreator
