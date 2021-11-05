exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { step_number: 1, instructions: "heat water until boiling", recipe_id: 1 },
    {
      step_number: 2,
      instructions:
        "add bag contents of noodles and seasoning and reduce heat to medium",
      recipe_id: 1,
    },
    {
      step_number: 3,
      instructions: "when noodles are soft, you did it!",
      recipe_id: 1,
    },
    {
      step_number: 1,
      instructions: "spread peanut-butter on one slice of bread",
      recipe_id: 2,
    },
    {
      step_number: 2,
      instructions: "spread jelly on the other slice of bread",
      recipe_id: 2,
    },
    { step_number: 3, instructions: "smush'em togevvr", recipe_id: 2 },
  ]);
};
