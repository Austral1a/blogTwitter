import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Button, Divider} from 'antd'
import {GoogleOutlined} from '@ant-design/icons'
import '../../styles/auth-container.scss'
import createUserActionCreator from '../../Store/actions/createUser'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => ({
    users: state.getUsersReducer.users,
    isUserSignedIn: state.isUserSignedInReducer.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({
    createUser: (users) => {
        dispatch(createUserActionCreator(users))
    }
})

class AuthGoogle extends PureComponent {

    handleClick = () => {
        this.props.createUser(this.props.users)
    }


    render() {
        return (
            <>
                <Divider />
                <Button
                    type='dashed'
                    shape='circle'
                    onClick={this.handleClick}
                    icon={<GoogleOutlined style={{color: '#1DA1F2', fontSize: '1.5em'}} />}
                />
            </>
        )
    }
}

AuthGoogle.propTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isUserSignedIn: PropTypes.bool,
    createUser: PropTypes.func.isRequired
}

const ConnectedAuthGoogle = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthGoogle)

export default ConnectedAuthGoogle
