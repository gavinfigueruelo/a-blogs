import React, { Component } from 'react';

class BlogList extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs: [{title: 'BLOGGY', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},{title:'BLOOG', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},{title:'BlEG', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}],
      selected: {},
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(blogIndex) {
      const blogPost = this.state.blogs[blogIndex];
      this.setState({selected: blogPost});
      console.log(this.state.selected);
    }
  render() {
    const blogs = this.state.blogs.map((blog, index) => (<li onClick={() => this.handleClick(index)} key={index}><h5>{blog.title}</h5><div className="blogBody"><p>{blog.body}</p></div></li>));
    return(
      <React.Fragment>
        <div className="left-aside col-12 col-md-4">
        <div>
          <ul className="bloglist">
            {blogs}
          </ul>
        </div>
      </div>
      <BlogRight selected={this.state.selected}/>
      </React.Fragment>
    )
  }
}
class BlogRight extends Component {
  render(){
    console.log(this.props.selected);
    return(
      <div className="col-12 col-md-4 clicked-blog">
      <div>
      <h5>{this.props.selected.title}</h5>
      <p>{this.props.selected.body}</p>
      </div>
      </div>
    )
  }
}
export default BlogList;
