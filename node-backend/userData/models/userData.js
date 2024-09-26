const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('userData', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};





