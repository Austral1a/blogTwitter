import {DEL_POST} from '../actions/action-types'

const initState = {
    isDeleted: false
}

const delPostReducer = (state = initState, action) => {
    switch (action.type) {
        case DEL_POST:
            return Object.assign({}, state, {
                isDeleted: action.isDeleted
            })
        default:
            return state
    }
}

export default delPostReducer
