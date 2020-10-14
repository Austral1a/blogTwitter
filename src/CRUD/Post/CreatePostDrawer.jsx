import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import CreatePostForm from './CreatePostForm'
import {Popover, Button} from 'antd';
import {DiffOutlined} from '@ant-design/icons'
import createPostActionCreator from '../../Store/actions/createPost'

const mapStateToProps = (state) => ({
    posts: state.getAllPostsReducer.posts
})

const mapDispatchToProps = (dispatch) => ({
    createPost: (posts, title, body, userId) => {
        dispatch(createPostActionCreator(posts, title, body, userId))
    }
})

class CreatePostDrawer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            title: '',
            body: ''
        }
    }


    render() {
        return()
    }
}

const ConnectedCreatePostDrawer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePostDrawer)

export default ConnectedCreatePostDrawer
