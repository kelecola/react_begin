import React, { Component } from 'react';
import PostItem from './PostItem';
import '../css/postview.css';

class PostsView extends Component {
  // constructor是组件的开始为方法
  constructor(props) {
    super(props);
    this.state = {}
  }

  // 渲染的时候会先渲染出始的样式然后css加载完毕渲染出之后的样式。
  // 应当先隐藏元素等css加载完毕在出现
  render() {
    const posts = !!this.props.posts ? this.props.posts : [];
    return (
      <div>
        <ul>
          {posts.map(item => (
            <PostItem post={item} />
          ))}
        </ul>
      </div>
      
    )
  }
}

export default PostsView;