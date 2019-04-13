/* eslint-disable indent */
require("dotenv").config();
var unirest = require("unirest");

module.exports = function(app) {
  // tiny request for ingredient
  // app.get("/api/spoon/tiny/:tiny", function(req, res) {
  //   unirest
  //     .get(
  //       "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete?number=10&intolerances=egg&query=" +
  //         req.params.tiny
  //     )
  //     .header(
  //       "X-RapidAPI-Host",
  //       "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
  //     )
  //     .header("X-RapidAPI-Key", process.env.SPOONKEY)
  //     .end(function(result) {
  //       console.log(result.status, result.headers, result.body);
  //     });
  // });

  // Search recipe by ingredients
  app.get("/api/spoon/:list", function(req, res) {
    console.log(req.params.list);
    unirest
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=2&ignorePantry=false&ingredients=" +
          req.params.list
      )
      .header(
        "X-RapidAPI-Host",
        "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      )
      .header("X-RapidAPI-Key", process.env.SPOONKEY)
      .end(function(result) {
        res.json(result.body);
      });
  });

  // Request for recipe by ID
  app.get("/api/spoon/recipe/:id", function(req, res) {
    unirest
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
          req.params.id +
          "/information"
      )
      .header(
        "X-RapidAPI-Host",
        "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      )
      .header("X-RapidAPI-Key", process.env.SPOONKEY)
      .end(function(result) {
        res.json(result.body);
        console.log("Recipe " + req.params.id + " found.");
      });
  });
};
