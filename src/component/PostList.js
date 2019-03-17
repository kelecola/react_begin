import React, { Component } from 'react';
import '../css/postlist.css';
import PostsView from './PostsView';
import PostEditor from './PostEditor';

class Postlist extends Component {
  // react render渲染两次，一次渲染元素数据，第二次更新数据
  // 感觉redux可以解决这个问题 todo
  render() {
    return (
      <div className='postlist_contain'>
        <PostEditor />
        <PostsView />
      </div>
    )
  }
}

export default Postlist;