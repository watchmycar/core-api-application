const terminus = require('@godaddy/terminus')
const { start, server} = require('./src/server')
const database = require('./src/database')

const gracefullyShutdown = () => server.stop()
  .then(database.disconnect)
  .then(err => process.exit(err ? 1 : 0));

terminus(server, {
  signal: 'SIGINT',
  onSignal: gracefullyShutdown,
});

return database.connect()
  .then(start)
  .catch(err => {
    console.error('Fatal exception on startup!');
    console.error(`${err}`);
    process.exit(-1);
  })
  