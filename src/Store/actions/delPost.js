import {DEL_POST} from './action-types'

const delPostAction = (isDeleted) => ({
    type: DEL_POST,
    isDeleted
})

const delPostActionCreator = (postId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'DELETE'
        })
            // if post has been deleted successfully
            .then(() => dispatch(delPostAction(true)))
            // after successful deleting, set again false
            .then(() => dispatch(delPostAction(false)))
            .catch(() => dispatch(delPostAction(false)))
    }
}

export default delPostActionCreator
