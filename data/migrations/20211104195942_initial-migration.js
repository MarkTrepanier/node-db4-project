exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 50).notNullable();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.string("instructions", 300).notNullable();
      table.integer("step_number").notNullable().unsigned();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes");
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 60);
    })
    .createTable("steps_ingredients", (table) => {
      table.increments("step_ingredient_id");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps");
      table
        .integer("ingredient_id")
        .unsigned()
        .references("ingredient_id")
        .inTable("ingredients");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
