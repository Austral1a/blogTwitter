import {IS_USER_SIGNED_IN} from './action-types'
import firebase from 'firebase'

const isUserSignedInAction = (isSignedIn, name, email) => ({
    type: IS_USER_SIGNED_IN,
    isSignedIn,
    name,
    email
})

const isUserSignedInActionCreator = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                let name = user.displayName
                let email = user.email
                dispatch(isUserSignedInAction(true, name, email))
            } else {
                dispatch(isUserSignedInAction(false,null,null))
            }
        })

    }
}

export default isUserSignedInActionCreator
