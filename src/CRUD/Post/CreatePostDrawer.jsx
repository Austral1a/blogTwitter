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

    onChangeTitle = (e) => {
        this.setState({title: e.target.value})
    }

    onChangeBody = (e) => {
        this.setState({body: e.target.value})
    }

    hide = () => {
        this.setState({
            visible: false,
        });
    };

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    render() {
        return(
            <div style={{margin: 'auto'}}>
                <Popover
                    placement='bottomLeft'
                    content={
                        <>
                        </>
                        }
                    title="New post"
                    trigger="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <Button
                        type="primary"
                        shape="circle"
                        style={{backgroundColor: '#1DA1F2'}}
                        icon={<DiffOutlined />}
                    />
                </Popover>
            </div>
        )
    }
}

const ConnectedCreatePostDrawer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePostDrawer)

export default ConnectedCreatePostDrawer
