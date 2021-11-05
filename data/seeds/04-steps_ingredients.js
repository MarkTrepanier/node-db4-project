exports.seed = function (knex, Promise) {
  return knex("steps_ingredients").insert([
    { step_id: 1, ingredient_id: 1, quantity: "1 cup" },
    { step_id: 2, ingredient_id: 2, quantity: "1 bag" },
    { step_id: 3, ingredient_id: null, quantity: null },
    { step_id: 4, ingredient_id: 3, quantity: "1 slice" },
    { step_id: 4, ingredient_id: 4, quantity: "1 tblspoon" },
    { step_id: 5, ingredient_id: 3, quantity: "slice" },
    { step_id: 5, ingredient_id: 5, quantity: "1 tblspoon" },
    { step_id: 6, ingredient_id: null, quantity: null },
  ]);
};
