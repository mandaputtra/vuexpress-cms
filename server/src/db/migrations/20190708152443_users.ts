import * as Knex from 'knex'

exports.up = (knex: Knex) => up(knex)
exports.down = (knex: Knex) => down(knex)

function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('email').notNullable().index().unique()
    table.string('password').notNullable()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.integer('role').notNullable().references('id').inTable('roles')
  })
}

function down(knex: Knex) {
  return knex.schema.dropTable('users')
}
