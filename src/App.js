import React from 'react'

import Node from './nodes/Node'

const toNodeElement = (nodeDef) => <Node data={nodeDef} key={nodeDef.name} />

const App = ({ nodes }) => {
  return (
    <div className="node-grid">
      {nodes.map(toNodeElement)}
    </div>
  )
}

App.propTypes = {
  nodes: React.PropTypes.array
}

export default App