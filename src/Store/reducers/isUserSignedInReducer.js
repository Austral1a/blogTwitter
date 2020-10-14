import {IS_USER_SIGNED_IN} from '../actions/action-types'

const initState = {
    isSignedIn: false,
    name: null,
    email: null
}

const isUserSignedInReducer = (state = initState, action) =>  {
    switch (action.type) {
        case IS_USER_SIGNED_IN:
            return Object.assign({}, state, {
                isSignedIn: action.isSignedIn,
                name: action.name,
                email: action.email
            })
        default:
            return state
    }
}

export default isUserSignedInReducer
