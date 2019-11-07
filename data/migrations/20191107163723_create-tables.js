exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments("recipe_id");
      table.string("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", table => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 128).notNullable();
      table.decimal("quantity", 128).notNullable();
      table.string("unit", 128);
    })
    .createTable("instructions", table => {
      table.increments("instruction_id");
      table.text("instruction_text").notNullable();
      table.integer("ingredient_id")
      .unsigned()
        // it should not be nullable
        .notNullable()
        // it needs to reference the id on the table
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("steps", table => {
      table.increments("steps_id").notNullable();
      table
        .integer("step_order")
        .notNullable()
        .unsigned();
      table
        .integer("instruction_id")
        // we need positive integers
        .unsigned()
        // it should not be nullable
        .notNullable()
        // it needs to reference the id on the table
        .references("instruction_id")
        .inTable("instructions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("recipe_id")
        // we need positive integers
        .unsigned()
        // it needs to reference the id on the table
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
