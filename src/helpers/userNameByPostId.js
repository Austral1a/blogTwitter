const userNameByPostId = (users, postId) => {
    return Object.values(users).map(user => {
        if(user.id === postId) {
            return user.name
        }
    })
}

export default userNameByPostId
