/* eslint-disable linebreak-style */
var db = require("../models");

module.exports = function(app) {
  // What's in the Ingredients?
  app.get("/api/ingredients/:recipe", function(req, res) {
    db.Ingredients.findAll({
      where: {
        recipe: req.params.recipe
      }
    }).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
  });

  // Add to the ingredients list
  app.post("/api/ingredients", function(req, res) {
    db.Ingredients.create(req.body).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
  });

  // Remove from the ingredients list
  app.delete("/api/ingredients/:id", function(req, res) {
    db.Ingredients.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
  });

  // No need for update
};
