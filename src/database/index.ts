
import * as Knex from 'knex'
import { Model } from 'objection'
const { knex: knexConfig } = require('@src/config/knex')

export const connect = async () => {
   const knex = Knex(knexConfig)

   try {
    await knex.raw('select 1+1 as result')
  } catch (err) {
    console.log('DB connection failed', err)
    throw err
  }
  
  Model.knex(knex)
  return knex
}
