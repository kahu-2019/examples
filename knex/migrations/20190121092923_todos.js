
exports.up = function(knex, Promise) {
 return knex.schema.createTable('todos', table => {
   table.increments()
   table.string('name')
   table.timestamp('due')
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos')
};
