const userNameByUserId = (users, userId) => {
    return Object.values(users).map(user => {
        if (user.id === userId) {
            return user.name
        }
    })
}

export default userNameByUserId
