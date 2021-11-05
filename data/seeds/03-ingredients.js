exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "water" },
    { ingredient_name: "bag noodles" },
    { ingredient_name: "bread slice" },
    { ingredient_name: "peanut-butter" },
    { ingredient_name: "jelly" },
  ]);
};
