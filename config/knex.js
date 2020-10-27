require('dotenv').config({ silent: false })
const { knexSnakeCaseMappers } = require('objection')
console.log(process.env)
const knex = {
  debug: false,
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
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
console.log(knex)
module.exports = knex