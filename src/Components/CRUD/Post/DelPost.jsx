import React from 'react'
import {Button} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import PropTypes from 'prop-types'

const DelPost = ({
    postId,
    delPost
}) => {
    return (

        <Button
            type='dashed'
            shape='circle'
            icon={<DeleteOutlined style={{ fontSize: '16px', color: '#1DA1F2' }} />}
            onClick={() => delPost(postId)}
        />
    )
}

DelPost.propTypes = {
    postId: PropTypes.number.isRequired,
    delPost: PropTypes.func.isRequired
}

export default DelPost
