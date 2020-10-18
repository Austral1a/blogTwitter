import {CREATE_POST, GET_USER_POSTS} from '../actions/action-types'

const initState = {
    posts: {}
}

const getUserPostsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER_POSTS:
            return Object.assign({}, state, {
                // action.posts gets its value from called corresponding
                // action creator which in its turn invokes an action(GET_USER_POSTS to the right of the `case` operator)
                posts: action.posts
            })
        case CREATE_POST:
            return Object.assign({}, state, {
                posts: action.userPosts
            })
        default:
            return state
    }
}

export default getUserPostsReducer
