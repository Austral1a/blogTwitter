import React from 'react'
import PostComments from './PostComments'
import {Collapse, Divider} from 'antd'

const CommentsSection = ({
    post,
    comments,
    onChange
}) => {
    return(
        <Collapse onChange={onChange} bordered={false}>
            <Collapse.Panel key={post.name} header='Comments'>
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

export default CommentsSection
