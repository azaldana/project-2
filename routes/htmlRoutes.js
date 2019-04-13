var db = require("../models");

module.exports = function(app) {
  // route loads index.handlebars
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load user page and pass in a user by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.render("user", dbUser);
    });
  });

  // Load recipe page and pass in a recipe by id
  app.get("/recipe/:spoon", function(req, res) {
    // db.Recipe.findAll({
    //   where: {
    //     spoonacularId: req.params.spoon
    //   }
    // }).then(function(dbRecipe) {
    // res.render("recipes", dbRecipe);
    res.render("recipes", {
      spoonacularId: 123,
      smallImg: "fgh",
      bigImg: "ghj",
      instructions: "lkdhskljf",
      preptime: 34,
      ingredients: []
    });
    // });
  });

  // Load favorites page and pass in favorites by id
  app.get("/favorites/:userid", function(req, res) {
    db.Favorites.findAll({}).then(function(dbFavorites) {
      res.render("favorites", dbFavorites);
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
