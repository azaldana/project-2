/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define("Search", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    spoonacularId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    smallImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Search.associate = function(models) {
    Search.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Search;
};
