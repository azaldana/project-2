/* eslint-disable linebreak-style */
var db = require("../models");

module.exports = function(app) {
  // Find recipe in database
  app.get("/api/recipe/:spoon", function(req, res) {
    db.Recipes.findAll({
      where: {
        spoonacularId: req.params.spoon
      }
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Create a new example
  app.post("/api/recipe/", function(req, res) {
    console.log(req.body);
    db.Recipes.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Delete and Update are for later
};
