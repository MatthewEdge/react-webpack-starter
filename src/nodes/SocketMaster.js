import io from 'socket.io-client'

const NODE_SOCKET = 'http://localhost:8080/'

/**
 * Create a new Socket connection to the given channel
 *
 * @param channel String
 * @param payload Object optional payload to send after connecting
 * @param onSuccess (resp) => {}
 * @param onError (err) => {}
 * @returns {Object} WebSocket container
 */
export function connect(channel, payload, onSuccess, onError) {
  const ws = io.connect(NODE_SOCKET)

  // Connect and request logs
  ws.on('connect', function socketOpened() {
    console.log(`${channel} opened`)

    if (payload) {
      ws.emit(channel, payload)
    }
  })

  // When received, pass back
  ws.on(channel, function onResponse(resp) {
    onSuccess(resp)
  })

  ws.on('error', function nodeLogsError(e) {
    console.error(`Failed to communicate with ${channel}: ${e}`)

    onError(e)
  })

  return ws
}

/**
 * Connect to the Node Logs Socket
 *
 * @param nodeName Node name to fetch logs for
 * @param onMessage (e) => Action on message received
 * @param onError (e) => Action on Socket error
 * @return {Object} WebSocket container
 */
export function nodeLogsSocket(nodeName, onMessage, onError) {
  return connect('nodeLogs', nodeName, onMessage, onError)
}

/**
 * Force-disconnect a socket
 *
 * @param ws Socket instance
 */
export function disconnect(ws) {
  ws.disconnect()
}
