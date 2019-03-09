import React, { Component } from 'react';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const post = this.props.post;
    return (
      <React.Fragment>
        <div>{post.title}</div>
        <div>{post.author}</div>
        <div>{post.date}</div>
        <div>{post.like}</div>
      </React.Fragment>
    )
  }
}

export default PostItem;