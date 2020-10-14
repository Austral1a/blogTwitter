import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Button, Divider} from 'antd'
import authWithGoogle from '../../Auth/authWithGoogle'
import {GoogleOutlined} from '@ant-design/icons'
import '../../styles/auth-container.scss'

const mapDispatchToProps = (dispatch) => ({
    authGoogle: () => {
        dispatch(authWithGoogle)
    }
})

class AuthGoogle extends PureComponent {

    render() {
        return (
            <>
                <Divider />
                <Button
                    type='dashed'
                    shape='circle'
                    onClick={authWithGoogle}
                    icon={<GoogleOutlined style={{color: '#1DA1F2', fontSize: '1.5em'}} />}
                />
            </>
        )
    }
}

const ConnectedAuthGoogle = connect(
    null,
    mapDispatchToProps
)(AuthGoogle)

export default ConnectedAuthGoogle
