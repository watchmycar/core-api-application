const knex = require('./knex')

const postgres = {
  url: process.env.DATABASE_URL,
}

const config = {
  port: process.env.PORT,
  database: {
    postgres,
  },
  jwtSecret: process.env.JWT_SECRET,
  expiringTime: process.env.EXPIRING_TIME,
  saltRounds: process.env.SALT_ROUNDS,
  iterations: process.env.ITERATIONS,
  digest: process.env.DIGEST,
  knex,
};

module.exports = config;
