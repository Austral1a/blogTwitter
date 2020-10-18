import React from 'react'
import PropTypes from 'prop-types'

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

PostComments.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default PostComments
