import {GET_USERS} from './action-types'

const getUsers = (users) => ({
    type: GET_USERS,
    users
})

export const getUsersActionCreator = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => dispatch(getUsers(json)))
    }
}
