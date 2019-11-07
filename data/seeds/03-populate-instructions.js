
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { instruction_text: 'Boil for 10minutes'},
        { instruction_text: 'Break as needed or put whole'},
        { instruction_text: 'put in pan'},
        { instruction_text: 'put in hot water'}
      ]);
    });
};
