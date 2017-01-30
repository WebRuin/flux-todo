import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, browserHistory } from "react-router"

import Todos from "./pages/Todos"
import Layout from "./pages/Layout"

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
    </Route>
  </Router>,
app)
