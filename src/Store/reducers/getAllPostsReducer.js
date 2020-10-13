import {GET_ALL_POSTS} from '../actions/action-types'

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
        default:
            return state
    }
}

export default getAllPostsReducer
