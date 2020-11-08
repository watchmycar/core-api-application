require('dotenv').config({ silent: false })
const terminus = require('@godaddy/terminus')
const { start: startServer, server} = require('./src/server')
const database = require('./src/database')

const runApplication = async () => {
  const gracefullyShutdown = async () => {
    try {
      console.log('finishing application..')
      await server.stop()
      console.log('application finished')
    } catch (error) {
      process.exit(1)
    }
  }

  const terminusOptions = {
    signal: 'SIGINT',
    onSignal: gracefullyShutdown,
  }

  terminus(server, terminusOptions)

  try {
    await database.connect()
    await startServer()
  } catch (error) {
    console.error('Fatal exception on startup!')
    console.error(`${error}`)
    process.exit(-1)
  }
}

runApplication()