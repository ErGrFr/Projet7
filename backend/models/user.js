module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        isAdmin: Sequelize.TINYINT
      })
  
    return User;
  };