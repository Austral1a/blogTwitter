import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import CreatePostForm from './CreatePostForm'
import {Popover, Button} from 'antd';
import {DiffOutlined} from '@ant-design/icons'
import createPostActionCreator from '../../Store/actions/createPost'


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
