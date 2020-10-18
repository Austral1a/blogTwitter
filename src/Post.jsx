import React from 'react'
import ConnectedCommentsSection from './CommentsSection'
import {Link} from 'react-router-dom'
import {Card} from 'antd'
import PostToolbar from './CRUD/Post/PostToolbar'
import {withTranslation} from 'react-i18next'
import userNameByPostId from './helpers/userNameByPostId'

const Post = ({posts, post, id, users, delPost, t}) => {
    return (
        post.id ?
            <Card
                key={id + Math.random()}
            >
                <h3>{post.title}</h3>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p>{t('postsSection.author')}: {<Link to={`/users/${post.userId}/posts`}>
                        {userNameByPostId(users, post.userId)}</Link>}
                    </p>
                    <PostToolbar
                        title={post.title}
                        body={post.body}
                        postId={post.id}
                        delPost={() => delPost(posts, post.id)}
                    />
                </div>
                <p>{post.body}</p>
                <ConnectedCommentsSection
                    post={post}
                    postId={post.id} />
            </Card> : null
    )
}

const PostWithTranslation = withTranslation()(Post)

export default PostWithTranslation
