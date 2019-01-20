
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, name: 'Go shopping'},
        {id: 2, name: 'calm dogs'},
        {id: 3, name: 'finish lecture'}
      ]);
    });
};
