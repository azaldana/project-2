/* eslint-disable linebreak-style */
var db = require("../models");

module.exports = function(app) {
  app.get("/api/search/:user", function(req, res) {
    db.Search.findAll({
      where: {
        UserId: req.params.user
      }
    }).then(function(dbSearch) {
      res.json(dbSearch);
    });
  });

  app.post("/api/search", function(req, res) {
    db.Search.create(req.body).then(function(dbSearch) {
      res.json(dbSearch);
    });
  });

  app.delete("/api/search/:id", function(req, res) {
    db.Search.destroy({
      where: {
        UserId: req.params.id
      }
    }).then(function(dbSearch) {
      res.json(dbSearch);
    });
  });
};
