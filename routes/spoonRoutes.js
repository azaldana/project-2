/* eslint-disable indent */
require("dotenv").config();
var unirest = require("unirest");

module.exports = function(app) {
  // tiny request for ingredient
  app.get("/api/spoon/tiny/:tiny", function() {
    unirest
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete?number=10&intolerances=egg&query=" +
          req.params.tiny
      )
      .header(
        "X-RapidAPI-Host",
        "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      )
      .header("X-RapidAPI-Key", process.env.SPOONKEY)
      .end(function(result) {
        console.log(result.status, result.headers, result.body);
      });
  });

  // Search recipe by ingredients
  app.get("/api/spoon/", function(req) {
    unirest
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" +
          req.body.text
      )
      .header(
        "X-RapidAPI-Host",
        "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      )
      .header("X-RapidAPI-Key", process.env.SPOONKEY)
      .end(function(result) {
        console.log(result.status, result.headers, result.body);
      });
  });

  // Request for recipe by ID
  app.get("/api/spoon/:id", function() {
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
        console.log(result.status, result.headers, result.body);
      });
  });
};
