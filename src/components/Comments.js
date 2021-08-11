import React from "react";
// import { useState } from 'React';

const Comments = (props) => {
  return (
    <ul className="comments">
      <strong>Comments:</strong>
      {props.post.comments.map((comment, key) => (
        <div className="comment-cont">
        <li key={comment.id}>
          {comment}
          <button onClick={(e) => props.deleteComment(e, props.post, key)}>
            Delete
          </button>
        </li>
        </div>
      ))}
    </ul>
  );
};

export default Comments;

// import React from 'react'

// class Comments extends React.Component {

//   state = {
//     areYouSure: false,
//     commentKey: 0,
//     // buttonText: ""
// }

// firstClick = (commentsList, commentKey) => {
//   console.log(commentsList, commentKey)
//   this.setState({
//         areYouSure: !this.state.areYouSure,
//     })
// }

// // changeButtonText(){
// //   this.state.areYouSure === false
// //   ? this.setState({
// //       buttonText: `Delete`
// //   })
// //   : this.setState({
// //       buttonText: `Are you sure?`
// //   })
// // }

// //  if state === false let variable = first click event
// // else variable = second click event

// // : <button onClick={(e)=>this.props.deleteComment(e, this.props.post, key)}>Are you sure?</button>
// render(){

//   // this.state.areYouSure === false
//   // ? let firstClick = <button onClick={()=>this.firstClick(this.props.post.comments, key)}>Delete</button>
//   // : let firstClick = <button onClick={(e)=>this.props.deleteComment(e, this.props.post, key)}>Are you sure?</button>
//   // let buttonText = ""
//   // this.state.areYouSure === false
//   //    ?  buttonText = `Delete`
//   //    :  buttonText = `Are you sure?`

//   return(
//     <ul className='comments'><strong></strong>
//       {this.props.post.comments.map((comment, key)=> <li ref={this.btnRef} key={comment.id}> {comment}
//         {/* {this.state.areYouSure === false
//         ? <button onClick={()=>this.firstClick(this.props.post.comments, key)}>Delete</button>
//         : <button onClick={(e)=>this.props.deleteComment(e, this.props.post, key)}>Are you sure?</button>
//         } */}
//         {/* {this.state.areYouSure === false
//         ? <button onClick={()=>this.firstClick(this.props.post.comments, key)}>Delete</button>
//             : this.state.areYouSure !== false
//             ? this.props.post.comments.filter(comment=> comment.id !== key)
//             && <button onClick={(e)=>this.props.deleteComment(e, this.props.post, key)}>Are you sure?</button>
//             : null*/}

//         <button onClick={

//           this.state.areYouSure === false
//           ? ()=>this.firstClick(this.props.post.comments, key)
//           : this.props.post.comments.filter(comment=> comment.id === key)
//           ? (e)=>this.props.deleteComment(e, this.props.post, key)
//           : null
//         }>{this.state.areYouSure === false && this.props.post.comments.filter(comment=> comment.id !== key)? "Delete" : "Are you sure?"}</button>
//       </li>)}
//       </ul>
//     )}
//     }
//   export default Comments
