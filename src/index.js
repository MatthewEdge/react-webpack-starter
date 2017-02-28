/* @author medge */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Dashboard from './Dashboard'
import NodeLog from './nodes/NodeLog'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/logs/:nodeName" component={NodeLog} />
  </Router>,
  document.querySelector('#app')
)
