
const Knex = require('knex')
const config = require('../../config')
const { Model } = require('objection')

const connect = async () => {
  console.log(config.knex)
  const knex = Knex(config.knex)

   try {
    await knex.raw('select 1+1 as result')
  } catch (err) {
    console.log('DB connection failed', err)
    throw err
  }
  
  Model.knex(knex)
  return knex
}

module.exports = {
  connect,
}
