import React, {useMemo} from 'react'
import {connect} from 'react-redux'
import PostComments from './PostComments'
import {Divider, Collapse} from 'antd'
import PropTypes from 'prop-types'
import getPostCommentsActionCreator from "./Store/actions/getPostComments";
import {withTranslation} from 'react-i18next'

const mapStateToProps = (state) => ({
    comments: state.getPostCommentsReducer.comments
})

const mapDispatchToProps = (dispatch) => ({
    getPostComments: (postId) => {
        dispatch(getPostCommentsActionCreator(postId))
    }
})

const CommentsSection = ({
    post,
    postId,
    comments,
    getPostComments,
    t
}) => {

    return(
        <Collapse onChange={() => getPostComments(postId)} bordered={false}>
            <Collapse.Panel key={post.name} header={t('postsSection.comments')}>
                {
                    Object.values(comments).map((comment, id) => {
                        return (
                            <React.Fragment key={comment.id + id}>
                                <PostComments
                                    title={comment.name}
                                    body={comment.body}
                                    email={comment.email}
                                />
                                <Divider />
                            </React.Fragment>
                        )
                    })
                }
            </Collapse.Panel>
        </Collapse>
    )
}

CommentsSection.propTypes = {
    post: PropTypes.object,
    comments: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func.isRequired
}

const ConnectedCommentsSection = connect(
    mapStateToProps,
    mapDispatchToProps
)( withTranslation()(CommentsSection))

export default ConnectedCommentsSection
