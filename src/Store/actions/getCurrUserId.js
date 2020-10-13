import {GET_CURR_USER_ID} from './action-types'

const getCurrUserIdAction = (id) => ({
    type: GET_CURR_USER_ID,
    id
})

const getCurrUserIdActionCreator = (id) => {
    return (dispatch) => {
        dispatch(getCurrUserIdAction(id))
        localStorage.setItem(`curr_user_id`, `${id}`)
    }
}

export default getCurrUserIdActionCreator