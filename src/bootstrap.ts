require('dotenv').config({ silent: false })
require('module-alias/register')
import * as tsPathRegister from './ts-path-register'
tsPathRegister.registerTsFiles()
import * as terminus from '@godaddy/terminus'
import { start as startServer, server} from '@src/server'
import * as database from '@database/index'

const runApplication = async () => {
  const gracefullyShutdown = async () => {
    try {
      console.log('finishing application..')
      await server.close()
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