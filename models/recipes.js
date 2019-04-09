/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    spoonacularId: DataTypes.INTEGER,
    user: DataTypes.STRING
  });

  Recipes.associate = function(models) {
    Recipes.belongsTo(models.Ingredients, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Recipes;
};
