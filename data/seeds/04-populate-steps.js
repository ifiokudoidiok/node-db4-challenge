
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_order: 1, instruction_id:1,recipe_id:1},
        { step_order:2 , instruction_id:2,recipe_id: 1},
        { step_order: 3, instruction_id:3,recipe_id:1},
        { step_order: 4, instruction_id:4,recipe_id:1},
      ]);
    });
};
