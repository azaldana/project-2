/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    spoonacularId: DataTypes.INTEGER,
    user: DataTypes.STRING,
    smallImg: DataTypes.STRING,
    bigImg: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    prepTime: DataTypes.INTEGER
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
