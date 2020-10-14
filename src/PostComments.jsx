import React from 'react'

const PostComments = ({
    title,
    body,
    email
}) => {
    return (
        <>
            <h4>{title}</h4>
            <small>{email}</small>
            <p>{body}</p>
        </>
    )
}

export default PostComments
