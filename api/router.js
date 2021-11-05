const express = require("express");
const Recipe = require("./model");
const { checkRecipeId } = require("./middleware");
const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch();
});

router.get("/:recipe_id", checkRecipeId, (req, res, next) => {
  res.status(200).json(req.recipe);
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
