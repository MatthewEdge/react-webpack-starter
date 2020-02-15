import React from 'react'
import PropTypes from 'prop-types'

class NodeLog extends React.Component {

  constructor(props) {
    super(props)

    this.onMessage = this.onMessage.bind(this)
    this.onError = this.onError.bind(this)

    this.state = {
      node: this.props.params.nodeName,
      logs: []
    }
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
  params: PropTypes.object.isRequired
}

export default NodeLog
