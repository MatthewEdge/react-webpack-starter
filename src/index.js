import React from 'react'
import { render } from 'react-dom'
import App from './App.js'

const nodes = [
  { name: 'Node A' },
  { name: 'Node B' },
  { name: 'Node C' },
  { name: 'Node D' },
  { name: 'Node E' },
  { name: 'Node F' }
]

render(
  <App nodes={nodes} />,
  document.querySelector('#app')
)
