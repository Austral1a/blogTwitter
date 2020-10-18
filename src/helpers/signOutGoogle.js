import firebase from 'firebase'

const signOutGoogle = () => {
    return firebase.auth().signOut()
}

export default signOutGoogle
