/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredients", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    originalString: {
      type: DataTypes.STRING
    }
  });

  Ingredients.associate = function(models) {
    Ingredients.belongsTo(models.Recipes, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Ingredients;
};
