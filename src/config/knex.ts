require('dotenv').config({ silent: false })
import { knexSnakeCaseMappers } from 'objection'

export const knex = {
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
  pool: {
    min: 2,
    max: 10,
  },
}
