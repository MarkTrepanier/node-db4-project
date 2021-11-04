const express = require("express");
const Recipe = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch();
});

router.get("/:recipe_id", (req, res) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch();
});

module.exports = router;
