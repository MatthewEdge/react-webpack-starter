/* @author medge */

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Dashboard from './dashboard/Dashboard'
import NodeLog from './nodes/NodeLog'

render(
  <Router>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route path="/logs/:nodeName" component={NodeLog} />
    </div>
  </Router>,
  document.querySelector('#app')
)
