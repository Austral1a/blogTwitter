import {CREATE_USER} from './action-types'
import firebase from "firebase";
import provider from "../../Auth/googleAuthProvider";
import isUserEmailExists from '../../helpers/isUserEmailExists'

const createUserAction = (userId) => ({
    type: CREATE_USER,
    userId
})

const createUserActionCreator = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(provider)
            .then((res) => res)
            .then((user) => {
                let userName = user.additionalUserInfo.profile.name || `Unknown name`
                let userEmail = user.additionalUserInfo.profile.email || 'Unknown email'
                isUserEmailExists(userEmail).then(isExists => {
                    // if the user's email is not in db, then create one, and set his id into the Store
                    if(!isExists) {
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            body: JSON.stringify({
                                name: userName,
                                email: userEmail,
                                username: userName
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            }
                        })
                            .then(res => res.json())
                            .then(newUser => dispatch(createUserAction(newUser.id)))
                    // if the user's email already exists in db, then only grab his id, and let him log in
                    } else {
                        fetch(`http://localhost:3000/users?email=${userEmail}`)
                            .then(res => res.json())
                            .then(existedUser => dispatch(createUserAction(existedUser[0].id)))
                    }
                })
            })
    }
}

export default createUserActionCreator
