import {GET_CURR_USER_ID} from '../actions/action-types'

const initState = {
    userId: null
}

const getCurrUserIdReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CURR_USER_ID:
            return Object.assign({}, state, {
                userId: action.id
            })
        default:
            return state
    }
}

export default getCurrUserIdReducer
