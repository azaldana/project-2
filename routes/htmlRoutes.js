var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Fridge.findAll({}).then(function(dbFridge) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbFridge
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};

// app.get("/recipe/:spoon", function(req, res) {
//   $.ajax({
//     type: "GET",
//     url: "/api/recipes/" + req.params.spoon,
//     success: function(response) {
//       var recipe = {
//         // big image
//         // title
//         // instructions
//         // preptime
//         // id
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
