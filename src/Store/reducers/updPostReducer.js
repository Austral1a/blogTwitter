import {UPD_POST} from '../actions/action-types'

const initState = {
    updatedPost: {}
}

const updPostReducer = (state = initState, action) => {
    switch (action.type) {
        case UPD_POST:
            return Object.assign({}, state, {
                updatedPost: action.updatedPost
            })
        default:
            return state
    }
}

export default updPostReducer
