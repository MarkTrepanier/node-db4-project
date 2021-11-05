const Recipe = require("./model");

const checkRecipeId = (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then((resp) => {
      if (resp.steps.length >= 1) {
        req.recipe = resp;
        next();
      } else {
        next({
          status: 404,
          message: `id:${req.params.recipe_id} not found`,
        });
      }
    })
    .catch(next);
};

module.exports = {
  checkRecipeId,
};
