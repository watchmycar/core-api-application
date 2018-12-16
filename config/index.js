const {
  PORT,
  DBHOST,
  DBPORT,
  DBNAME,
  JWT_SECRET,
  EXPIRING_TIME,
  SALT_ROUNDS,
} = process.env;

const config = {
  port: PORT,
  dbHost: DBHOST,
  dbPort: DBPORT,
  dbName: DBNAME,
  jwtSecret: JWT_SECRET,
  expiringTime: EXPIRING_TIME,
  saltRounds: SALT_ROUNDS,
};

module.exports = config;
