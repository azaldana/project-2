/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    spoonacularId: DataTypes.INTEGER,
    user: DataTypes.STRING
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
