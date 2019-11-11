exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "eggs", quantity: 4,  },
        { ingredient_name: "rice", quantity: 2, unit: "cup" },
        { ingredient_name: "spaghetti", quantity: 2, unit: "packs" },
        { ingredient_name: "salt", quantity: 2, unit: "pinch" },
        { ingredient_name: "tomatoes", quantity: 1, unit: "tin" },
        { ingredient_name: 'pepper', quantity: 1, unit: 'ounce'},
        { ingredient_name: 'water', quantity: 1, unit: 'litre'},
        { ingredient_name: 'oil', quantity: 1, unit: 'litre'},
      ]);
    });
};
