const {
  PORT,
  DBHOST,
  DBPORT,
  DBNAME,
  JWT_SECRET,
  EXPIRING_TIME,
  SALT_ROUNDS,
  ITERATIONS,
  DIGEST,
} = process.env;

const config = {
  port: PORT,
  dbHost: DBHOST,
  dbPort: DBPORT,
  dbName: DBNAME,
  jwtSecret: JWT_SECRET,
  expiringTime: EXPIRING_TIME,
  saltRounds: SALT_ROUNDS,
  iterations: ITERATIONS,
  digest: DIGEST,
};

module.exports = config;
