const userNameByPostId = (users, postId) => {
    return Object.values(users).map(user => {
        if(user.id === postId) {
            console.log(user)
            return user.name
        }
    })
}

export default userNameByPostId
