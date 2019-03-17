import React, { Component } from 'react';
// import { connect } from 'react-redux';
import '../css/posteditor.css';
import '../css/elementui.css';
// import { loadPostsAction } from '../actions/postload';

class PostEditor extends Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   inputValue : '',
    //   areaValue : ''
    // }
    this.onReset = this.onReset.bind(this);
    this.onPost = this.onPost.bind(this);
  }
  render() {
    const border_style = {borderRadius : '3px'};
    return (
      <div className='posteditor_contain'>
        <h2>话题列表</h2>
        <input className='default_margin' type='text' placeholder='标题' name='content'/>
        <textarea style={border_style} className='default_margin' placeholder='内容' cols="30" rows="10" name='content'></textarea>
        <div>
          <button className='normal_btn' onClick={this.onPost}>发帖</button>
          &nbsp;&nbsp;
          <button className='normal_btn' onClick={this.onReset}>重置</button>
        </div>
      </div>
    )
  }

  onReset() {
    // 少操作dom?
    document.getElementsByName('content').forEach(function(el) {
      el.value = '';
    })
  }
  
  onPost() {
    // 数据发送到后端
    // sendData()
    // 然后重新渲染
    // this.props.dispatch(loadPostsAction);
  }
}


// const mapStateToProps = (state, ownProps) => {
//   return {
//     // 这个获取数据的地方注意一下
//     postlist: state.postReducer.list
//   }
// }

// export default connect(mapStateToProps)(PostEditor)
export default PostEditor