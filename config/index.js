const { knexSnakeCaseMappers } = require('objection')

const postgres = {
  url: process.env.DATABASE_URL,
}

const knex = {
  debug: false,
  client: 'postgresql',
  connection: postgres.url,
  ...knexSnakeCaseMappers(),
  seeds: {
    directory: '../src/database/seed',
  },
  migrations: {
    directory: '../src/database/migration',
  },
  // pool: {
  //   min: 2,
  //   max: 10,
  // },
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
