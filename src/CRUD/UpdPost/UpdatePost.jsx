import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import updPostActionCreator from '../../Store/actions/updPost'

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


    render() {
        return('')
    }


}

const ConnectedUpdatePost = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdatePost)

export default ConnectedUpdatePost
