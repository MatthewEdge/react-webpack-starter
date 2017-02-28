/* @author medge */

import React from 'react'
import Node from './nodes/Node'

import styles from './Dashboard.css'

class NodeGrid extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      nodes: []
    }
  }

  componentWillMount() {
    // TODO extract to REST call
    const nodes = [
      { name: 'ap-service-discovery-server-0' },
      { name: 'apim-api-manager-database-initial' },
      { name: 'apim-api-manager-user-store-initial' },
      { name: 'apim-api-manager-key-manager-0' },
      { name: 'apim-api-manager-publisher-0' },
      { name: 'apim-api-manager-gateway-manager-0' }
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

export default NodeGrid
