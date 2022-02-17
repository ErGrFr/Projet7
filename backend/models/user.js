

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');



module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        isAdmin: Sequelize.TINYINT
      })
  
    return User;
  };