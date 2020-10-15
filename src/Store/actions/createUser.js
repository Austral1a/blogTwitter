import {CREATE_USER} from './action-types'
import firebase from "firebase";
import provider from "../../Auth/googleAuthProvider";

const createUserAction = (users) => ({
    type: CREATE_USER,
    users
})

const createUserActionCreator = (users) => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(provider)
            .then((res) => {
                return res
            })
            .then((user) => {
                let userName = user.additionalUserInfo.profile.name || `Unknown name ${users.length+1}`
                let userEmail = user.additionalUserInfo.profile.email || 'Unknown email'
                fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    body: JSON.stringify({
                        id: users.length + 1,
                        name: userName,
                        email: userEmail,
                        username: userName
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json)
                        dispatch(createUserAction(users.concat(json)))
                    })
            })
    }
}

export default createUserActionCreator
