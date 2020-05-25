import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Dashboard from "./dashboard/Dashboard"
import NodeLog from "./nodes/NodeLog"

render(
  <Router>
    <Switch>
      <Route path="/logs/:nodeName" component={NodeLog} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Router>,
  document.querySelector("#app")
)
