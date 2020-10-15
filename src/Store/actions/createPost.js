import {CREATE_POST} from './action-types'

const createPostAction = (userPosts, posts) => ({
    type: CREATE_POST,
    posts: posts || [],
    userPosts: userPosts || []
})

const createPostActionCreator = (userPosts, posts, title, body, userId) => {
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
            .then((json) => {
                dispatch(createPostAction(userPosts.concat(json), posts.concat(json)))
            })
    }
}

export default createPostActionCreator
