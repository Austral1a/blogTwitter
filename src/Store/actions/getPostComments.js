import {GET_POST_COMMENTS} from './action-types'
import url from '../../serverUrl'

const getPostCommentsAction = (comments) => ({
    type: GET_POST_COMMENTS,
    comments
})

const getPostCommentsActionCreator = (postId) => {
    return (dispatch) => {
        fetch(`${url}/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((json) => dispatch(getPostCommentsAction(json)))
    }
}

export default getPostCommentsActionCreator
