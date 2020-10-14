import {UPD_POST} from './action-types'

const updPostAction = (updatedPost) => ({
    type: UPD_POST,
    updatedPost
})

const updPostActionCreator = (postId, title, body) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(updPostAction(json)))
    }
}

export default updPostActionCreator
