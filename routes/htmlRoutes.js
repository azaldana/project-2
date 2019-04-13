var db = require("../models");

module.exports = function(app) {
  // route loads index.handlebars page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // recipe route loads recipe.handlebars page and passes in recipes by spoonacularId
  app.get("/recipe/:spoon", function(req, res) {
    res.render("recipes", {
      "recipe-name": title,
      "recipe-image": bigImg,
      "recipe-instructions": instructions
    });
  });

  // favorites route loads favorites.handlebars page and passes in favorites by user
  app.get("/favorites/:userid", function(req, res) {
    res.render("favorites", {
      "recipe-image": smallImg,
      "recipe-name": title,
      "recipe-missing-ingredients": []
    });
  });
  //   Render 404 page for any unmatched routes
  //   app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
