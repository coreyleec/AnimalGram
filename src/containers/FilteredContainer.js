import React from 'react'
import Post from '../components/Post'

export default class FilteredContainer extends React.Component{
    
    render() {
        // console.log(this.props.catPosts)
        return(
            <div>
            <h1>Cat Posts!</h1>
                <div className="post-cont">
                {this.props.catPosts.map(postObj => <Post key={postObj.id} post={postObj}
                 addComment={this.props.addComment} likePost={this.props.likePost}
                  favoritePet={this.props.favoritePet}
                   deletePost={this.props.deletePost} deleteComment={this.props.deleteComment} />)}
            </div>
            </div>
        )
    }
}