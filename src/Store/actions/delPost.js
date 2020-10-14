import {DEL_POST} from './action-types'

const delPostAction = (posts) => ({
    type: DEL_POST,
    posts
})

const delPostActionCreator = (posts, postId) => {
    return (dispatch) => {
        let id = posts.findIndex(post => {
            return post.id === postId
        })
        posts.splice(id, 1)
        dispatch(delPostAction(posts.concat({})))
    }
}

export default delPostActionCreator
