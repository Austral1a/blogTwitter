import React, {PureComponent} from 'react'
import isUserSignedInActionCreator from '../../Store/actions/isUserSignedIn'
import {getUsersActionCreator} from '../../Store/actions/getUsers'
import {connect} from 'react-redux'
import {List} from "antd";
import {Link} from "react-router-dom";
import getCurrUserIdActionCreator from '../../Store/actions/getCurrUserId'
import ConnectedCreatePostDrawer from '../CRUD/Post/CreatePostDrawer'
import {withTranslation} from 'react-i18next'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => ({
    users: state.getUsersReducer.users,
    isUserSignedUp: state.createUserReducer.isUserNew,
    isUserSignedIn: state.isUserSignedInReducer.isSignedIn,
    singedInUserId: state.createUserReducer.userId
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
        dispatch(getUsersActionCreator())
    },
    getCurrUserId: (id) => {
        dispatch(getCurrUserIdActionCreator(id))
    },
    isUserSignedInCheck: () => {
        dispatch(isUserSignedInActionCreator())
    }
})

class Users extends PureComponent {

    componentDidMount() {
        this.props.getUsers()
        this.props.isUserSignedInCheck()
    }

   // re-load users if some user is just signed-up
    componentDidUpdate(prevProps) {
        if(prevProps.isUserSignedUp !== this.props.isUserSignedUp) {
            this.props.getUsers()
        }
    }

    render() {
        const {isUserSignedIn, singedInUserId, users, getCurrUserId, t} = this.props
        return (
            <List
                // itemLayout is layout of list
                itemLayout='horizontal'
                header={[<Link key={Math.random()} to='/posts'>{t('usersSection.allUsers')}</Link>, isUserSignedIn ? <ConnectedCreatePostDrawer
                    key={Math.random()}
                    userId={singedInUserId} /> : null]}
                // dataSource is array for list
                dataSource={Object.values(users)}
                // adds border
                bordered
                size='small'
                // renderItem uses elements from dataSource to render
                renderItem={(user) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Link
                                onClick={() => getCurrUserId(user.id)}
                                to={`/users/${user.id}/posts`}>{user.name}</Link>}
                            description={user.email}
                        />
                    </List.Item>
                )}
                // additional class, used in `styles/main-container.scss`
                className='users-container'
            />
        )
    }
}

Users.propTypes = {
    users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    isUserSignedIn: PropTypes.bool,
    getUsers: PropTypes.func,
    getCurrUserId: PropTypes.func,
    isUserSignedInCheck: PropTypes.func,
    isUserSignedUp: PropTypes.bool,
    currUserId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const ConnectedUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(Users))

export default ConnectedUsers
