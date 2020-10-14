import {CREATE_POST} from './action-types'

const createPostAction = (post) => ({
    type: CREATE_POST,
    post
})

const createPostActionCreator = (posts, title, body, userId) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
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
            .then((res) => res.json())
            .then((json) => dispatch(createPostAction(posts.concat(json))))
    }
}

export default createPostActionCreator
