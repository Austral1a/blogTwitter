import {CREATE_USER, GET_USERS} from '../actions/action-types'

const initState = {
    users: {}
}

const getUsersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return Object.assign({}, state, {
                // action.users gets its value from called corresponding
                // action creator which in its turn invokes an action(GET_USERS to the right of the `case` operator)
                users: action.users
            })
        case CREATE_USER:
            return Object.assign({}, state, {
                users: action.users
            })
        default:
            return state
    }
}

export default getUsersReducer
