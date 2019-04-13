var db = require("../models");

module.exports = function(app) {
  // route loads index.handlebars page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // db.Recipes.findall({
  //   where: {

  //   }
  // }).then(fun)
  //   res.render("index", {
  //     "recipe-name": dbRecipes.title,
  //     "recipe-image": dbRecipes.smallImg,
  //     "recipe-missing-ingredients": dbRecipes.name
  // recipe route loads recipe.handlebars page and passes in recipes by spoonacularId
  app.get("/recipe", function(req, res) {
    db.Recipes.findAll({
      where: {
        spoonacularId: req.params.spoon
      }
    }).then(function(dbRecipes) {
      res.render("recipes", {
        "ingredients-list": dbRecipes.ingredients,
        "recipe-name": dbRecipes.title,
        "recipe-image": dbRecipes.bigImg,
        "recipe-instructions": dbRecipes.instructions
      });
    });
  });

  // favorites route loads favorites.handlebars page and passes in favorites by user
  app.get("/favorites", function(req, res) {
    db.Favorites.findAll({}).then(function(dbFavorites) {
      res.render("favorites", {
        "recipe-name": dbFavorites.title,
        "recipe-image": dbFavorites.smallImg,
        "recipe-missing-ingredients": dbFavorites.name
      });
    });
  });
};
