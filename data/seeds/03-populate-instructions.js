
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { instruction_text: 'Boil for 10minutes', ingredient_id:7},
        { instruction_text: 'Break as needed or put whole', ingredient_id:3},
        { instruction_text: 'put in pan', ingredient_id:8},
        { instruction_text: 'put in hot oil', ingredient_id:5}
      ]);
    });
};
