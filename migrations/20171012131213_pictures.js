
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pictures', function(table){
  table.increments();
  table.string('image');
  table.string('title');
  table.string('description');
  table.integer('user_id');
  table.integer('post_id');
  table.timestamp('created_at').notNullable().default(knex.fn.now());
  table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pictures')

};
