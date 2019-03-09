import React, { Component } from 'react';
import '../css/posteditor.css';
import '../css/elementui.css';

class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='posteditor_contain'>
        <h2>话题列表</h2>
        <button className='normal_btn default_margin'>发帖</button>
        <input className='default_margin' type='text' placeholder='标题'/>
        <textarea className='default_margin' name="" id="" placeholder='内容' cols="30" rows="10"></textarea>
        <div>
          <button className='normal_btn'>保存</button>
          &nbsp;&nbsp;
          <button className='normal_btn'>取消</button>
        </div>
      </div>
    )
  }
}

export default PostEditor;