import React, {PureComponent} from 'react'

const mapStateToProps = (state) => ({
    posts: state.getAllPostsReducer.posts
})


class Posts extends PureComponent {
    render() {
        return('')
    }
}

export default Posts
