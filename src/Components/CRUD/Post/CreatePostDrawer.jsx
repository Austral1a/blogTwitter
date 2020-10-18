import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import CreatePostForm from './CreatePostForm'
import {Popover, Button} from 'antd'
import {DiffOutlined} from '@ant-design/icons'
import createPostActionCreator from '../../../Store/actions/createPost'
import PropTypes from 'prop-types'
import {withTranslation} from 'react-i18next'

const mapDispatchToProps = (dispatch) => ({
    createPost: (userId, title, body) => {
        dispatch(createPostActionCreator(userId, title, body))
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
        })
    }

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    render() {
        const {title, body} = this.state
        const {createPost, userId, t} = this.props
        return(
            <div style={{margin: 'auto'}}>
                <Popover
                    placement='bottomLeft'
                    content={
                        <>
                            <CreatePostForm
                                titleState={title}
                                bodyState={body}
                                onChangeTitle={(e) => this.onChangeTitle(e)}
                                onChangeBody={(e) => this.onChangeBody(e)}
                                onFinish={() => createPost(userId, title, body)} />
                            <a onClick={this.hide}>{t('btnActions.close')}</a>
                        </>
                        }
                    title={t('postsSection.newPost.popoverTitle')}
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

CreatePostDrawer.propTypes = {
    createPost: PropTypes.func.isRequired
}

const ConnectedCreatePostDrawer = connect(
    null,
    mapDispatchToProps
)(withTranslation()(CreatePostDrawer))

export default ConnectedCreatePostDrawer
