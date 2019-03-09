import React, { Component } from 'react';
import '../css/head.css';
import '../css/elementui.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'jack'
    }
  }
  render () {
    return (
      <div className='head'>
        <div>首页</div>
        <div></div>
        <div>
          <span>当前用户:</span>
          &nbsp;
          <span>{this.state.user}</span>
          &nbsp;&nbsp;
          <button className='normal_btn'>注销</button>
        </div>
      </div>
    )
  }
}

export default Header;
