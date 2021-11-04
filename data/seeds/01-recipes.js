exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipe_name: "bag noodles" },
    { recipe_name: "PB & J" },
  ]);
};
