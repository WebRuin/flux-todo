import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import TodoHistory from './pages/TodoHistory'
import Layout from './pages/Layout'
import Todos from './pages/Todos'

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path='history' component={TodoHistory} ></Route>
    </Route>
  </Router>,
app)
