/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(m) {
    m.increments('id').unsigned().primary()
    m.timestamp('created_at').defaultTo(knex.fn.now())
    m.timestamp('updated_at').defaultTo(knex.fn.now())
    
    m.string('title').notNullable()
    m.date('release').nullable()
    m.string('description').nullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
