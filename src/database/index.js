
const mongoose = require('mongoose');
const { dbHost, dbPort, dbName } = require('../../config');

const connect = () => {
  const connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}`;
  const options = {
    poolSize: 5,
    connectTimeoutMS: 30000,
    keepAlive: 1000,
    useNewUrlParser: true,
  };

  return mongoose.connect(connectionString, options);
};

const disconnect = () => mongoose.disconnect();

module.exports = {
  connect,
  disconnect,
};
