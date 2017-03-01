/* @author medge */

import React from 'react'
import Node from '../nodes/Node'

import styles from './Dashboard.css'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      nodes: []
    }
  }

  componentWillMount() {
    // TODO extract to REST call
    const nodes = [
      { name: 'consul-0' },
      { name: 'consul-1' },
      { name: 'database-0' },
      { name: 'database-1' },
      { name: 'spark-worker-0' },
      { name: 'spark-worker-1' }
    ]

    this.setState({
      nodes
    })
  }

  render() {
    return (
      <div className={styles.grid}>
        {this.state.nodes.map(nodeDef =>
          <Node node={nodeDef} key={nodeDef.name} />
        )}
      </div>
    )
  }
}

export default Dashboard
