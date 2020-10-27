
exports.up = async (knex) => {
  await knex.schema.createTable(
    'users',
    table => {
      table.increments('id').primary()
      table.string('email').unique()
      table.string('password')
      table.string('googleId').unique()
      table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now())
      table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now())
      table.dateTime('deletedAt').index()
    }
  )
  // implement refresh token table and strategy
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
