import React from 'react'
import ConnectedUpdatePost from './UpdatePost'
import DelPost from './DelPost'

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

export default PostToolbar
