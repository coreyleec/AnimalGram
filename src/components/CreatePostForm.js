import React from 'react'

class CreatePostForm extends React.Component{
    
    state = {
        caption: "",
        image: "",
        type:"",
        
    }

    handleSubmit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // console.log(this.props.posts)
        return(
            <div>
                {/* <h3>Make a note or reminder</h3> */}
               <form onSubmit={()=> this.props.addPost(this.state)}>
                   <input type="text" placeholder="post an animal" name="caption" 
                   value={this.state.caption}
                   onChange={(e)=>this.handleSubmit(e)}
                   ></input>
                   <input type="text" placeholder="image URL " name="image"
                   value={this.state.image}
                   onChange={(e)=>this.handleSubmit(e)}
                   ></input>
                   <input type="text" placeholder="What Animal Type Is It?" name="type" 
                   value={this.state.type}
                   onChange={(e)=>this.handleSubmit(e)}
                   ></input>
                   <button type="submit"  >Submit</button>
               </form>
            </div>
        )
    }
}

export default CreatePostForm