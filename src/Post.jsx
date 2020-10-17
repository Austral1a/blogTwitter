import React from 'react'
import ConnectedCommentsSection from './CommentsSection'
import {Link} from 'react-router-dom'
import {Card} from 'antd'
import PostToolbar from './CRUD/Post/PostToolbar'
import {withTranslation} from 'react-i18next'
import userNameByPostId from './helpers/userNameByPostId'

const Post = ({posts, post, id, users, updatedPost, delPost, t}) => {
    return (
        post.id ?
            <Card
                // Since resource will not be really updated on the server but it will be faked as if.
                // I comparing updated post data with already existed one,
                // and when existed post (title or body) are
                // differ from updated post (title or body), title or body gets replace
                title={updatedPost.id === post.id
                && updatedPost.title
                    ? updatedPost.title : post.title}
                key={id + Math.random()}
                extra={<PostToolbar
                    title={post.title}
                    body={post.body}
                    posts={posts}
                    postId={post.id}
                    delPost={() => delPost(posts, post.id)}
                />}

            >
                <p>{t('postsSection.author')}: {<Link to={`/users/${post.userId}/posts`}>
                    {userNameByPostId(users, post.userId)}</Link>}
                </p>
                <p>{// the same as above but with body rather than title
                    updatedPost.id === post.id
                    && updatedPost.body
                        ?updatedPost.body : post.body}</p>
                <ConnectedCommentsSection
                    post={post}
                    postId={post.id} />
            </Card> : null
    )
}

const PostWithTranslation = withTranslation()(Post)

export default PostWithTranslation
