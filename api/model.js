const db = require("../data/db-config.js");

async function getRecipes() {
  return await db("recipes");
}

// select rc.*, st.step_id, st.step_number, st.instructions, ig.ingredient_id, ig.ingredient_name
// from recipes as rc
// join steps as st
// on rc.recipe_id = st.recipe_id
// join steps_ingredients as si
// on st.step_id = si.step_id
// left join ingredients as ig
// on ig.ingredient_id = si.ingredient_id
// where rc.recipe_id = 2
async function getRecipeById(recipe_id) {
  const recipe = await db("recipes as rc")
    .join("steps as st", "rc.recipe_id", "st.recipe_id")
    .join("steps_ingredients as si", "st.step_id", "si.step_id")
    .leftJoin("ingredients as ig", "ig.ingredient_id", "si.ingredient_id")
    .select(
      "rc.*",
      "st.step_id",
      "st.step_number",
      "st.instructions",
      "ig.ingredient_id",
      "ig.ingredient_name"
    )
    .where("rc.recipe_id", recipe_id);

  return recipe;
  //   const result = {
  //     steps: [],
  //   };

  //   for (let step of scheme) {
  //     if (!result.scheme_id) {
  //       result.scheme_id = Number(scheme_id);
  //       result.scheme_name = step.scheme_name;
  //     }
  //     if (step.step_id) {
  //       result.steps.push({
  //         step_id: step.step_id,
  //         step_number: step.step_number,
  //         instructions: step.instructions,
  //       });
  //     }
  //   }
}

module.exports = {
  getRecipes,
  getRecipeById,
};
