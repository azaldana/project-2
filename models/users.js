/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Fridge, {
      onDelete: "cascade"
    });
  };

  User.associate = function(models) {
    User.hasMany(models.Favorites, {
      onDelete: "cascade"
    });
  };

  return User;
};
