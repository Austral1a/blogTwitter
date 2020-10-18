import React from 'react'
import {Button} from 'antd'
import signOutGoogle from '../../helpers/signOutGoogle'
import {LogoutOutlined} from '@ant-design/icons'
import '../../styles/auth-container.scss'

const SignOutGoogle = () => {
    return (
        <Button
            style={{marginTop: '20px'}}
            type='dashed'
            shape='circle'
            icon={<LogoutOutlined style={{color: '#1DA1F2', fontSize: '1.2em'}} />}
            onClick={signOutGoogle} />
    )
}

export default SignOutGoogle
