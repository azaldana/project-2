/* eslint-disable linebreak-style */
require("dotenv").config();
var unirest = require("unirest");

// tiny request for ingredient
unirest
  .get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete?number=10&intolerances=egg&query=appl"
  )
  .header(
    "X-RapidAPI-Host",
    "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
  )
  .header("X-RapidAPI-Key", process.env.SPOONKEY)
  .end(function(result) {
    console.log(result.status, result.headers, result.body);
  });

// Search recipe by ingredients
unirest
  .get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar"
  )
  .header(
    "X-RapidAPI-Host",
    "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
  )
  .header("X-RapidAPI-Key", process.env.SPOONKEY)
  .end(function(result) {
    console.log(result.status, result.headers, result.body);
  });

// Request for recipe by ID
unirest
  .get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information"
  )
  .header(
    "X-RapidAPI-Host",
    "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
  )
  .header("X-RapidAPI-Key", process.env.SPOONKEY)
  .end(function(result) {
    console.log(result.status, result.headers, result.body);
  });
