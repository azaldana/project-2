/* eslint-disable linebreak-style */
var db = require("../models");

module.exports = function(app) {
  // What are your favorites?
  app.get("/api/favorites/:user", function(req, res) {
    db.Favorites.findAll({
      where: {
        user: req.params.user
      }
    }).then(function(dbFavorites) {
      res.json(dbFavorites);
    });
  });

  // Add to favorites
  app.post("/api/favorites", function(req, res) {
    db.Favorites.create(req.body).then(function(dbFavorites) {
      res.json(dbFavorites);
    });
  });

  // Remove from the favorites
  app.delete("/api/favorites/:id", function(req, res) {
    db.Favorites.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFavorites) {
      res.json(dbFavorites);
    });
  });

  // No update needed for this one
};
