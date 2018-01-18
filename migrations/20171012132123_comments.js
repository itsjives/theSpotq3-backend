  exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function(table){
    table.increments();
    table.string('commentscontent');
    table.integer('user_id').notNull().defaultTo(1);
    table.integer('post_id').notNull().defaultTo(1);
    table.timestamp('created_at').notNullable().default(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
}

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments')
}
