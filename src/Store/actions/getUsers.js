import {GET_USERS} from './action-types'
import url from '../../serverUrl'

const getUsers = (users) => ({
    type: GET_USERS,
    users
})

export const getUsersActionCreator = () => {
    return (dispatch) => {
        fetch(`${url}/users`)
            .then(res => res.json())
            .then(json => dispatch(getUsers(json)))
    }
}
