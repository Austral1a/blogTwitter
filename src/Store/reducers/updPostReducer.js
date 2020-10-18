import {UPD_POST} from '../actions/action-types'

const initState = {
    isPostUpdated: false
}

const updPostReducer = (state = initState, action) => {
    switch (action.type) {
        case UPD_POST:
            return Object.assign({}, state, {
                isPostUpdated: action.isPostUpdated
            })
        default:
            return state
    }
}

export default updPostReducer
