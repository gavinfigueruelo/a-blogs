import React, { Component } from 'react';

class BlogForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addBlog(this.state);
    this.setState({title:'', body:''});
  }
  render(){
    return(
     <form onSubmit={this.handleSubmit}>
     <div>
     <label htmlFor="title">Blog Title</label>
     <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInput}/>
     <label htmlFor="body">BlogBody</label>
     <textarea rows="3" id="body" name="body" value={this.state.body} onChange={this.handleInput}/>
     </div>
     <button type="submit">Add</button>
     </form>
    )
  }
}
class BlogBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs: [{}],
    }
    this.addBlog = this.addBlog.bind(this);
  }
  addBlog(blog){
    const blogs = this.state.blogs;
    blogs.push(blog);
    this.setState({blogs});
  }
  render(){
    return(
      <div>
      <BlogForm addBlog={this.addBlog}/>
      </div>
    )
  }
}
export default BlogBoard;
