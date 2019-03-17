import React, { Component } from 'react'
import '../css/postitem.css'
import '../icon/iconfont.css'
import { connect } from 'react-redux'

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onClose() {
    this.props.dispatch({
      type: 'DEL_POST',
      id: this.props.id
    });
  }

  onLike() {
    this.props.dispatch({
      type: 'LIKE_POST',
      id: this.props.id
    });
    // 这条数据的点赞加1
  }

  render() {
    // 引入sass简化这一部分
    const post = this.props.post,
      title = post.title,
      date = post.date,
      simplecontent = post.body,
      author = post.userId === 1 ? 'starry' : 'shiqi',
      like = !!post.like === false ? 0 : post.like,
      default_margin = {
        margin: '5px'
      }
    return (
      <div className='postitem_contain'>
        <div className='buttongroup_like'>
          <i onClick={this.onClose} style={default_margin} className="iconfont icon-close"></i>
          <i onClick={this.onLike} style={default_margin} className="iconfont icon-like"></i>
        </div>
        <div className='postitem_content'> 
          <div className='postitem_title'>{title}</div>
          <div className='postitem_author'>作者:&nbsp;{author}</div>
          <div className='postitem_date'>日期:&nbsp;{date}</div>
          <div className='postitem_like'>点赞:&nbsp;{like}</div>
          <div className='postitem_simplecontent'>{simplecontent}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // 这个获取数据的地方注意一下
    postlist: state.postReducer.list,
    id: ownProps.post.id
  }
}

export default connect(mapStateToProps)(PostItem)