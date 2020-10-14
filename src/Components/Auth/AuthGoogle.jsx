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

            </>
        )
    }
}

const ConnectedAuthGoogle = connect(
    null,
    mapDispatchToProps
)(AuthGoogle)

export default AuthGoogle
