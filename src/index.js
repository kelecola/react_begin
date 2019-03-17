import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Header from './head/Header'
import Postlist from './component/PostList'
import store from './store'

const renderEl = (
  <Provider store = {store}>
    <Header />
    <Postlist />
  </Provider>
)

ReactDOM.render(renderEl, document.getElementById('root'));
