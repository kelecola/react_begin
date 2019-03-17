import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk]), //感觉这个就是写死的
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store