module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('Post', {
        userId: Sequelize.BIGINT,
        title: Sequelize.STRING,
        username: Sequelize.STRING,
        imgURL: Sequelize.STRING,
        desc: Sequelize.STRING
      })
  
    return Post
  };