import {CREATE_POST} from '../actions/action-types'

const initState = {
    isCreated: false
}

const createPostReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return Object.assign({}, state, {
                isCreated: action.isPostCreated
            })
        default:
            return state
    }
}

export default createPostReducer
