import {CREATE_POST} from './action-types'
import url from '../../serverUrl'

const createPostAction = (isPostCreated) => ({
    type: CREATE_POST,
    isPostCreated
})

const createPostActionCreator = (userId, title, body) => {
    return (dispatch) => {
        fetch(`${url}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            // if user successfully created a post
            .then(() => dispatch(createPostAction(true)))
            // after successful creating a post then set again false
            .then(() => dispatch(createPostAction(false)))
            .catch(() => dispatch(createPostAction(false)))
    }
}

export default createPostActionCreator
