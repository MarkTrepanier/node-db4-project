const db = require("../data/db-config.js");

async function getRecipes() {
  return await db("recipes");
}

module.exports = {
  getRecipes,
};
