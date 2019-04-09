/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    spoonacularId: DataTypes.INTEGER,
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  Favorites.associate = function(models) {
    Favorites.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Favorites;
};
