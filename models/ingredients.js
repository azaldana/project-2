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
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Ingredients.associate = function(models) {
    Ingredients.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Ingredients;
};
