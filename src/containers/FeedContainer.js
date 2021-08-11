import React from "react";
import Post from "../components/Post";
import CreatePostForm from "../components/CreatePostForm";

class FeedContainer extends React.Component {
  render() {
    // console.log(this.props.posts)
    return (
      <div>
        <CreatePostForm addPost={this.props.addPost} />
        <h1>GitPet</h1>
        <div className="post-cont">
        {this.props.posts.map((postObj) => (
          <Post
            recordTime={this.props.recordTime}
            key={postObj.id}
            post={postObj}
            addComment={this.props.addComment}
            likePost={this.props.likePost}
            deletePost={this.props.deletePost}
            favoritePet={this.props.favoritePet}
            deleteComment={this.props.deleteComment}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default FeedContainer;
