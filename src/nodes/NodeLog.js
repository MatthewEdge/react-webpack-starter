import React from 'react'

import { connect, disconnect } from './SocketMaster'

const NODE_LOGS_CHANNEL = 'nodeLogs'

class NodeLog extends React.Component {

  constructor(props) {
    super(props)

    this.socket = null

    this.onMessage = this.onMessage.bind(this)
    this.onError = this.onError.bind(this)

    this.state = {
      node: this.props.params.nodeName,
      logs: []
    }
  }

  componentDidMount() {
    // Connect to the server for Node Logs
    this.socket = connect(NODE_LOGS_CHANNEL, this.state.node, this.onMessage, this.onError)
  }

  componentWillUnmount() {
    disconnect(this.socket)
  }

  onMessage(data) {
    this.setState({
      logs: data.logs
    })
  }

  onError(e) {
    console.error(`Error receiving logs: ${JSON.stringify(e)}`)

    this.setState({
      logs: ['Error fetching logs']
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.node}</p>
        <p>{this.state.logs.join('\n')}</p>
      </div>
    )
  }

}

NodeLog.propTypes = {
  // TODO how to validate a prop that is set by react-router and satisfy eslint?
  params: React.PropTypes.object.isRequired
}

export default NodeLog
