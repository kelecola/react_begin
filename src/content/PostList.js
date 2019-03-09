import React, { Component } from 'react';
import '../css/postlist.css';
import PostsView from './PostsView';
import PostEditor from './PostEditor';

class Postlist extends Component {
  // constructor是组件的开始为方法
  constructor(props) {
    super(props);
    this.state = {};
    this.getPostList = this.getPostList.bind(this);
  }

  componentDidMount() {
    this.getPostList();
  }

  /**
   * 获取帖子数据
   */
  getPostList() {
    // 模拟后台获取数据
    let data = [
      {
        title: '前端框架，你最爱哪一个',
        author: 'starry',
        date: '2019.09.09',
        like: 12000
      }, {
        title: '前端框架，你最爱哪一个',
        author: 'starry',
        date: '2019.09.09',
        like: 12000
      }, {
        title: '前端框架，你最爱哪一个',
        author: 'starry',
        date: '2019.09.09',
        like: 12000
      }, {
        title: '前端框架，你最爱哪一个',
        author: 'starry',
        date: '2019.09.09',
        like: 12000
      },{
        title: '前端框架，你最爱哪一个',
        author: 'starry',
        date: '2019.09.09',
        like: 12000
      },{
        title: '前端框架，你最爱哪一个',
        author: 'starry',
        date: '2019.09.09',
        like: 12000
      }
    ];
    setTimeout(() => {
      this.setState({
        posts: data,
        newPost: false
      })
    }, 0);
  }

  // react render渲染两次，一次渲染元素数据，第二次更新数据
  // 感觉redux可以解决这个问题 todo
  render() {
    return (
      <div className='postlist_contain'>
        <PostEditor className='posteditor_contain'/>
        {this.state.posts ? <PostsView className='postsview_contain' posts={this.state.posts}/> : null}
      </div>
    )
  }
}

export default Postlist;