/* eslint-disable linebreak-style */
var db = require("../models");

module.exports = function(app) {
  // Find user in database
  app.get("/api/user/:user", function(req, res) {
    db.User.findAll({
      where: {
        name: req.params.user
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/user/:user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete and Update are for later
};
