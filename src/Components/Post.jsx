import React from 'react'
import {connect} from 'react-redux'
import ConnectedCommentsSection from './CommentsSection'
import {Link} from 'react-router-dom'
import {Card} from 'antd'
import PostToolbar from './CRUD/Post/PostToolbar'
import {withTranslation} from 'react-i18next'
import userNameByUserId from '../helpers/userNameByUserId'

import getCurrUserIdActionCreator from "../Store/actions/getCurrUserId";

const mapDispatchToProps = (dispatch) => ({
    getCurrUserId: (id) => {
        dispatch(getCurrUserIdActionCreator(id))
    }
})

const Post = ({post, id, users, delPost, t, getCurrUserId}) => {
    return (
        post.id ?
            <Card
                key={id + post.title}
            >
                <h3>{post.title}</h3>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p>{t('postsSection.author')}: {<Link
                        onClick={() => getCurrUserId(post.userId)}
                        to={`/users/${post.userId}/posts`}>
                        {userNameByUserId(users, post.userId)}</Link>}
                    </p>
                    <PostToolbar
                        title={post.title}
                        body={post.body}
                        postId={post.id}
                        delPost={() => delPost(post.id)}
                    />
                </div>
                <p>{post.body}</p>
                <ConnectedCommentsSection
                    post={post}
                    postId={post.id} />
            </Card> : null
    )
}

const ConenctedPostWithTranslation = connect(
    null,
    mapDispatchToProps
)(withTranslation()(Post))

export default ConenctedPostWithTranslation
