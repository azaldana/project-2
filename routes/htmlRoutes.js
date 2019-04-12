var db = require("../models");

module.exports = function(app) {
  // route loads index.handlebars
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // Load favorites page and pass in a user by name
  app.get("/favorites/:user", function(req, res) {
    db.Favorites.findOne({
      where: {
        user: req.params.user
      }
    }).then(function(dbFavorites) {
      res.render("favorites", dbFavorites);
    });
  });

  // Load recipe page and pass in a recipe by id
  app.get("/recipe/:spoon", function(req, res) {
    db.Recipe.findAll({
      where: {
        spoonacularId: req.params.spoon
      }
    }).then(function(dbRecipe) {
      res.render("recipes", dbRecipe);
    });
  });
};
