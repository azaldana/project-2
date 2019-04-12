var db = require("../models");

module.exports = function(app) {
  // route loads index.handlebars
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load user page and pass in a user by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.render("user", dbUser);
    });
  });
  // db.Recipe.findAll({
    //   where: {
    //     spoonacularId: req.params.spoon
    //   }
    // }).then(function(dbRecipe) {
      // res.render("recipes", dbRecipe);



//   var Recipes = sequelize.define("Recipes", {
//     spoonacularId: DataTypes.INTEGER,
//     smallImg: DataTypes.STRING,
//     bigImg: DataTypes.STRING,
//     instructions: DataTypes.TEXT,
//     prepTime: DataTypes.INTEGER
//   });

//   Recipes.associate = function(models) {
//     Recipes.hasMany(models.Ingredients, {
//       onDelete: "cascade"
//     });
//   };

//   return Recipes;
// };




  // Load recipe page and pass in a recipe by id
  app.get("/recipe/:spoon", function(req, res) {
    // db.Recipe.findAll({
    //   where: {
    //     spoonacularId: req.params.spoon
    //   }
    // }).then(function(dbRecipe) {
      // res.render("recipes", dbRecipe);
      res.render("recipes",{
        spoonacularId: 123, smallImg: "fgh", bigImg: "ghj", instructions: "lkdhskljf", preptime: 34, ingredients: []
      });
    // });
  });

  //   $.ajax({
  //     type: "GET",
  //     url: "/api/recipes/" + req.params.spoon,
  //     success: function(response) {
  //       var recipe = {
  //         bigImage: 
  //         title:
  //         instructions:
  //         preptime:
  //         id:
  //       };
  //       var ingredients = [];
  //       $.ajax({
  //         type: "GET",
  //         url: "/api/ingredients/" + recipe.id,
  //         success: function(res) {
  //           // res should be all th eingredients in recipe with that id
  //           // var ingArr = names of all the ingredients
  //           var userId = localStorage.getItem("userId");
  //           $.ajax({
  //             type: "GET",
  //             url: "/api/fridge/" + userId,
  //             success: function(r) {
  //               // var fridgeArr = names of all the ingredients
  //               for (var i = 0; i<ingArr.length; i++) {
  //                 if (fridgeArr.indexOf(ingArr[i]) !== -1) {
  //                   ingredients.push({ name: ingArr[i], fridge: true });
  //                 } else {
  //                   ingredients.push({ name: ingArr[i], fridge: false });
  //                 }
  //               }
  //               recipe.ingredients = ingredients;
  //               res.render("recipes", recipe);
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // });

  // Load favorites page and pass in favorites by id
  app.get("/favorites/:userid", function(req, res) {
    db.Fridge.findAll({}).then(function(dbFridge) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbFridge
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};