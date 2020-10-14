import React from "react";
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

const DelPost = ({
    posts,
    postId,
    delPost
}) => {
    return (

        <Button
            type='dashed'
            shape='circle'
            icon={<DeleteOutlined style={{ fontSize: '16px', color: '#1DA1F2' }} />}
            onClick={() => {
                delPost(posts, postId)}}
        />
    )
}

export default DelPost
