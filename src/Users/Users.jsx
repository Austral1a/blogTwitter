import React, {PureComponent} from 'react'
import {getUsersActionCreator} from "../Store/actions/getUsers";
import {connect} from 'react-redux'
import {List} from "antd";

const mapStateToProps = (state) => ({
    users: state.getUsersReducer.users
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
        dispatch(getUsersActionCreator())
    }
})

class Users extends PureComponent {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <List
                // itemLayout is layout of list
                itemLayout='horizontal'
                header="All Users"
                // dataSource is array for list
                dataSource={Object.values(this.props.users)}
                // adds border
                bordered
                size='small'
                // renderItem uses elements from dataSource to render
                renderItem={(user) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="/">{user.name}</a>}
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

const ConnectedUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

export default ConnectedUsers
