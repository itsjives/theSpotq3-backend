
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.string('content');
    table.integer('picture_id');
    table.integer('user_id');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
