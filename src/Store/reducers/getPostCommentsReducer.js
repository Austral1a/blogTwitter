import {GET_POST_COMMENTS} from '../actions/action-types'

const initState = {
    comments: {}
}

const getPostCommentsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_POST_COMMENTS:
            return Object.assign({}, state, {
                comments: action.comments
            })
        default:
            return state
    }
}

export default getPostCommentsReducer
