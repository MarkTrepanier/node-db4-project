const db = require("../data/db-config.js");

async function getRecipes() {
  return await db("recipes");
}

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
      "ig.ingredient_name",
      "si.quantity"
    )
    .where("rc.recipe_id", recipe_id);

  const result = {
    steps: [],
  };
  const oldStep = { step_id: 0 };
  for (let step of recipe) {
    if (!result.recipe_id) {
      result.recipe_id = Number(recipe_id);
      result.recipe_name = step.recipe_name;
    }
    if (step.step_id) {
      const aStep = {
        step_id: step.step_id,
        step_number: step.step_number,
        instructions: step.instructions,
        ingredients: [],
      };
      for (let step of recipe) {
        if (step.step_id === aStep.step_id)
          step.ingredient_name
            ? aStep.ingredients.push({
                ingredient_name: step.ingredient_name,
                ingredient_id: step.ingredient_id,
                quantity: step.quantity,
              })
            : null;
      }
      if (oldStep.step_id !== step.step_id) {
        result.steps.push(aStep);
        oldStep.step_id = aStep.step_id;
      }
    }
  }

  if ((await result.step_id) === undefined) {
    return result;
  }
}

module.exports = {
  getRecipes,
  getRecipeById,
};
