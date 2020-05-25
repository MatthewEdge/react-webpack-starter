import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import styles from "./Node.css"

const STATES = {
  RUNNING: "running",
  LOADING: "loading",
  UP: "up",
  DOWN: "down",
  ERROR: "error",
}

const Node = (props) => {
  let [nodeName, setNodeName] = useState(props.node.name)
  let [status, setStatus] = useState(STATES.LOADING)

  const colorForStatus = () => {
    const _status = status.toLowerCase()

    if (_status === STATES.UP) {
      return "green"
    } else if ([STATES.RUNNING, STATES.LOADING].includes(_status)) {
      return "black"
    } else {
      return "red"
    }
  }

  return (
    <div className={styles.node}>
      <h3>{nodeName}</h3>
      <p className={styles.status}>
        <span className={styles.statusText} style={{ color: colorForStatus() }}>
          {status.toUpperCase()}
        </span>
      </p>
      <p className={styles.buttons}>
        <button>
          <Link to={`/logs/${nodeName}`}>Logs</Link>
        </button>
      </p>
    </div>
  )
}

Node.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Node
