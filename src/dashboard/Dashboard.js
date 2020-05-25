import React, { useState } from "react"

import Header from "./header/Header"
import Node from "../nodes/Node"

import styles from "./Dashboard.css"

const Dashboard = () => {
  let [nodes, _] = useState([
    { name: "consul-0" },
    { name: "consul-1" },
    { name: "database-0" },
    { name: "database-1" },
    { name: "spark-worker-0" },
    { name: "spark-worker-1" },
  ])

  return (
    <div>
      <Header />
      <div className={styles.grid}>
        {nodes.map((nodeDef) => (
          <Node node={nodeDef} key={nodeDef.name} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
