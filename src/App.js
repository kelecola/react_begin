import React, { Component } from 'react';
import Header from './head/Header';
import Postlist from './content/PostList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Postlist />
      </React.Fragment>
    );
  }
}

export default App;
