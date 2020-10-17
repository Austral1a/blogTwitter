import {CREATE_USER} from '../actions/action-types'

const initState = {
    // id of logged user
    userId: undefined,
    // reports if user is new, used fully to update the list of users in the Users component
    isUserNew: false
}

const createUserReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {
                userId: action.userId,
                isUserNew: action.isUserNew
            })
        default:
            return state
    }
}

export default createUserReducer
