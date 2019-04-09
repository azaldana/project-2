module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Ingredients, {
      onDelete: "cascade"
    });
  };

  return User;
};
