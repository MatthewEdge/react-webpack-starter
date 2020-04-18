/* @author medge */

import React from "react"

import Header from "./header/Header"
import Node from "../nodes/Node"

import styles from "./Dashboard.css"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nodes: [],
    }
  }

  componentDidMount() {
    // This would normally be in a REST call
    this.setState({
      nodes: [
        { name: "consul-0" },
        { name: "consul-1" },
        { name: "database-0" },
        { name: "database-1" },
        { name: "spark-worker-0" },
        { name: "spark-worker-1" },
      ],
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.grid}>
          {this.state.nodes.map((nodeDef) => (
            <Node node={nodeDef} key={nodeDef.name} />
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard
