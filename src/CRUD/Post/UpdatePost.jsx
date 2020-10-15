import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import updPostActionCreator from '../../Store/actions/updPost'
import {Drawer, Button, Form, Col, Row, Input} from 'antd'
import {EditOutlined} from "@ant-design/icons";
import PropTypes from 'prop-types'

const mapStateToProps = (state) => ({
    updatedPost: state.updPostReducer.updatedPost
})

const mapDispatchToProps = (dispatch) => ({
    updPost: (postId, title, body) => {
        dispatch(updPostActionCreator(postId, title, body))
    }
})

class UpdatePost extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            isDrawerVisible: false,
            newTitle: '',
            newBody: ''
        }
    }

    onClose = () => {
        this.setState({isDrawerVisible: false})
    }

    showDrawer = () =>  {
        this.setState({isDrawerVisible: true})
    }

    onSubmit = (e) => {
        this.props.updPost(this.props.postId, this.state.newTitle, this.state.newBody)
        this.onClose()
        e.preventDefault()
    }

    render() {
        const {isDrawerVisible, newTitle, newBody} = this.state
        return(
            <>
                <Button
                    type='dashed'
                    shape='circle'
                    onClick={this.showDrawer}
                    icon={<EditOutlined style={{ fontSize: '16px', color: '#1DA1F2' }} />}
                />
                <Drawer
                    title={`Update post with ${this.props.postId} id`}
                    width={500}
                    onClose={this.onClose}
                    visible={isDrawerVisible}
                >
                    <Form
                        layout='vertical'
                        hideRequiredMark
                        onFinish={this.onSubmit}
                    >
                        <Row gutter={14}>
                            <Col span={10}>
                                <Form.Item
                                    name='title'
                                    label='Title'
                                    rules={[{ required: true, message: 'Please enter new title' }]}
                                >
                                    <Input
                                        placeholder="Please enter new title"
                                        value={newTitle}
                                        onChange={(e) => this.setState({newTitle: e.target.value})}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={14}>
                                <Form.Item
                                    name='body'
                                    label='Body'
                                    rules={[{ required: true, message: 'Please enter new body' }]}
                                >
                                    <Input.TextArea
                                        rows={4}
                                        placeholder="Please enter new body"
                                        value={newBody}
                                        onChange={(e) => this.setState({newBody: e.target.value})}
                                    />
                                </Form.Item>
                                <Row gutter={14}>
                                    <Col span={8}>
                                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                            Cancel
                                        </Button>
                                    </Col>
                                    <Col span={8}>
                                        <Button onClick={this.onSubmit} type="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>
        )
    }


}

UpdatePost.propTypes = {
    updatedPost: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    updPost: PropTypes.func.isRequired
}

const ConnectedUpdatePost = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdatePost)

export default ConnectedUpdatePost
