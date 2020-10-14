import firebase from 'firebase'
import provider from './googleAuthProvider'

const authWithGoogle = () => {
    let user;
    firebase.auth().signInWithPopup(provider)
        .then((res) => {
            user = res.user
        })
    return user
}

export default authWithGoogle
