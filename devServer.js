/**
 * Purely for testing WebSocket interactions
 */
let express = require('express')
let app = express()
let http = require('http').createServer(app)
let wss = require('socket.io')(http)

const PORT = 8080

wss.on('error', (err) => console.error(err))

wss.on('connection', (client) => {
  // Setup WebSocket handlers
  handleNodeLogs(client)
  handleNodeInfo(client)

  // Notify for disconnects
  client.once('disconnect', () => {
    console.log('Client closed: ' + client)
  })
})

http.listen(PORT, function listening () {
  console.log('Listening on port ' + PORT)
})

function handleNodeLogs (client) {
  client.on('nodeLogs', (node) => {
    console.log('Node Logs Request for ' + node)

    client.emit('nodeLogs', { logs: ['test', 'one', 'two'] })
  })
}

function handleNodeInfo (client) {
  client.on('nodeInfo', (node) => {
    console.log('Node Info Request for ' + node)

    setTimeout(() => client.emit('nodeInfo', { status: 'up' }), 1500)
  })
}
