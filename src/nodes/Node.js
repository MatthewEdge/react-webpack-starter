/**
 * @author medge
 */
import React from 'react'

import './Node.css'

const Node = (props) => {
  return (
    <div className="node">
      <p>{props.data.name}</p>
    </div>
  )
}

Node.propTypes = {

}

export default Node