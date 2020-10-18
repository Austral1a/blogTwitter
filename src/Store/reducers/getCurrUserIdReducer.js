import {GET_CURR_USER_ID} from '../actions/action-types'

const initState = {
    // grab curr user id from local storage if it exists there or null if it isnt
    // this is needs to render particular user posts
    userId: localStorage.getItem('curr_user_id') || null
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
