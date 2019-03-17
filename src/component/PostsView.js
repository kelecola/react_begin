import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostItem from './PostItem';
import '../css/postview.css';
import { loadPostsAction } from '../actions/postload';

class PostsView extends Component {
  componentDidMount() {
    this.props.dispatch(loadPostsAction);
  }

  // 渲染的时候会先渲染出始的样式然后css加载完毕渲染出之后的样式。
  // 应当先隐藏元素等css加载完毕在出现
  render() {
    const posts = this.props.postlist;
    const ul_style = {
      'padding': 0,
      'display': 'flex',
      'justifyContent': 'space-around',
      'flexWrap': 'wrap'
    }
    return (
      <div className='post_list_contain'>
        <ul style={ul_style}>
          {posts.map((item) => (
            <PostItem key={item.id} post={item} />
          ))}
        </ul>
      </div>
      
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // 这个获取数据的地方注意一下
    postlist: state.postReducer.list
  }
}

export default connect(mapStateToProps)(PostsView)