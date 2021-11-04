const express = require("express");
const Recipe = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("test1");
  Recipe.getRecipes()
    .then((recipes) => {
      console.log("test2");
      res.status(200).json(recipes);
    })
    .catch();
});
module.exports = router;
