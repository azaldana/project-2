/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Fridge = sequelize.define("Fridge", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  Fridge.associate = function(models) {
    Fridge.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Fridge;
};
