import React from 'react'
import ConnectedUpdatePost from './UpdatePost'
import DelPost from './DelPost'
import PropTypes from 'prop-types'

const PostToolbar = ({
    postId,
    posts,
    delPost,
    title,
    body
}) => {
    return (
        <>
            <ConnectedUpdatePost
                title={title}
                body={body}
                posts={posts}
                postId={postId}
            />
            <DelPost
                postId={postId}
                posts={posts}
                delPost={delPost}
            />
        </>
    )
}

PostToolbar.propTypes = {
    postId: PropTypes.number,
    posts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    delPost: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default PostToolbar
