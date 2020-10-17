import {CREATE_USER} from '../actions/action-types'

const initState = {
    userId: undefined
}

const createUserReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {
                userId: action.userId
            })
        default:
            return state
    }
}

export default createUserReducer
