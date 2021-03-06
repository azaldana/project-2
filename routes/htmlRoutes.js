var db = require("../models");

module.exports = function(app) {
  // route loads index.handlebars page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // db.Recipes.findall({
  //   where: {

  // route loads index with recipe values
  app.get("/:user", function(req, res) {
    db.Search.findAll({
      where: {
        UserId: req.params.user
      }
    }).then(function(data) {
      var results = [];
      for (var i = 0; i < data.length; i++) {
        results.push(data[i].dataValues);
      }
      var hbsObject = {
        recipe: results
      };
      res.render("index", hbsObject);
      console.log(hbsObject);
    });
  });

  // Load user page and pass in a user by id
  app.get("/user/:spoon", function(req, res) {
    db.User.findOne({
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
