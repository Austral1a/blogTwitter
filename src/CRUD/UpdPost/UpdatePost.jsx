import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import updPostActionCreator from '../../Store/actions/updPost'
import {Drawer, Button, Form, Col, Row, Input} from 'antd'
import {EditOutlined} from "@ant-design/icons";


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
        console.log(this.props.updatedPost)
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

                </Drawer>
            </>
        )
    }


}

const ConnectedUpdatePost = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdatePost)

export default ConnectedUpdatePost
