import {UPD_POST} from './action-types'

const updPostAction = (isPostUpdated) => ({
    type: UPD_POST,
    isPostUpdated
})

const updPostActionCreator = (postId, title, body) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            // report that post has been updated
            .then(() => dispatch(updPostAction(true)))
            // then report that post is successfully updated
            .then(() => dispatch(updPostAction(false)))
            .catch(() => dispatch(updPostAction(false)))
    }
}

export default updPostActionCreator
