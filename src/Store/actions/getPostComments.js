import {GET_POST_COMMENTS} from './action-types'

const getPostCommentsAction = (comments) => ({
    type: GET_POST_COMMENTS,
    comments
})

const getPostCommentsActionCreator = (postId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((json) => dispatch(getPostCommentsAction(json)))
    }
}

export default getPostCommentsActionCreator
