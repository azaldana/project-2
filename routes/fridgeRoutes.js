/* eslint-disable linebreak-style */
var db = require("../models");

module.exports = function(app) {
  // What's in the fridge?
  app.get("/api/fridge/:user", function(req, res) {
    db.Fridge.findAll({
      where: {
        user: req.params.user
      }
    }).then(function(dbFridge) {
      res.json(dbFridge);
    });
  });

  // Add to the fridge
  app.post("/api/fridge", function(req, res) {
    db.Fridge.create(req.body).then(function(dbFridge) {
      res.json(dbFridge);
    });
  });

  // Remove from the fridge
  app.delete("/api/fridge/:id", function(req, res) {
    db.Fridge.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFridge) {
      res.json(dbFridge);
    });
  });

  // Update is for much later
};
