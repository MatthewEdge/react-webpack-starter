/* @author medge */

import React from 'react'

import { connect, disconnect } from '../SocketMaster'
import { navigate } from '../Navigator'

import styles from './Node.css'

const NODE_INFO_CHANNEL = 'nodeInfo'

const STATES = {
  RUNNING: 'running',
  LOADING: 'loading',
  UP: 'up',
  DOWN: 'down',
  ERROR: 'error'
}

/**
 * Control element for a particular Vagrant Node
 */
class Node extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      node: this.props.node.name,
      status: STATES.LOADING
    }

    // Init function bindings
    this.colorForStatus = this.colorForStatus.bind(this)
    this.up = this.up.bind(this)
    this.down = this.down.bind(this)
    this.provision = this.provision.bind(this)
    this.suspend = this.suspend.bind(this)
    this.logs = this.logs.bind(this)
    this.triggerRunning = this.triggerRunning.bind(this)
    this.onMessage = this.onMessage.bind(this)
    this.onError = this.onError.bind(this)
  }

  componentDidMount() {
    // Connect to the server for Node Logs
    this.socket = connect(NODE_INFO_CHANNEL, this.state.node, this.onMessage, this.onError)
  }

  componentWillUnmount() {
    disconnect(this.socket)
  }

  onMessage(data) {
    console.log(`STATUS: ${data.status}`)
    this.setState({
      status: data.status
    })
  }

  onError(e) {
    console.error(`Error receiving info: ${JSON.stringify(e)}`)

    this.setState({
      status: 'Error'
    })
  }

  colorForStatus() {
    const _status = this.state.status.toLowerCase()

    if (_status === STATES.UP) {
      return 'green'
    }
    else if ([STATES.RUNNING, STATES.LOADING].includes(_status)) {
      return 'black'
    }

    return 'red'
  }

  up() {
    console.log(`Up: ${this.props.node.name}`)
    this.triggerRunning()
  }

  down() {
    console.log(`Down: ${this.props.node.name}`)
    this.triggerRunning()
  }

  provision() {
    console.log(`Provision: ${this.props.node.name}`)
    this.triggerRunning()
  }

  suspend() {
    console.log(`Suspend: ${this.props.node.name}`)
    this.triggerRunning()
  }

  triggerRunning() {
    if (this.state.status !== STATES.RUNNING) {
      this.setState({
        status: STATES.RUNNING
      })
    }
  }

  logs() {
    navigate(`/logs/${this.props.node.name}`)
  }

  render() {
    const nodeName = this.state.node
    const status = this.state.status

    return (
      <div className={styles.node}>
        <h3>{nodeName}</h3>
        <p className={styles.status}>
          <span className={styles.statusText} style={{ color: this.colorForStatus() }}>{status.toUpperCase()}</span>
        </p>
        <p className={styles.buttons}>
          <button onClick={this.up}>Up</button>
          <button onClick={this.down}>Down</button>
          <button onClick={this.provision}>Provision</button>
          <button onClick={this.suspend}>Suspend</button>
          <button onClick={this.logs}>Logs</button>
        </p>
      </div>
    )
  }
}

Node.propTypes = {
  node: React.PropTypes.object.isRequired
}

export default Node
