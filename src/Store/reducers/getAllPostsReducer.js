import {GET_ALL_POSTS, DEL_POST, CREATE_POST} from '../actions/action-types'

const initState = {
    posts: {}
}

const getAllPostsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return Object.assign({}, state, {
                // action.posts gets its value from called corresponding
                // action creator which in its turn invokes an action(GET_ALL_POSTS to the right of the `case` operator)
                posts: action.posts
            })
        case DEL_POST:
            return Object.assign({}, state, {
                posts: action.posts
            })
        case CREATE_POST:
            return Object.assign({}, state, {
                posts: action.posts
            })
        default:
            return state
    }
}

export default getAllPostsReducer
