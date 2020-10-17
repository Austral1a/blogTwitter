const isUserEmailExists = (userEmail) => {
    return fetch(`http://localhost:3000/users?email=${userEmail}`)
        .then(res => res.json())
        .then(arr => arr.length > 0)
}

export default isUserEmailExists
