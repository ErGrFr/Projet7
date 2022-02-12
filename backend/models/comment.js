module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('Comment', {
        author: Sequelize.STRING,
        authorId: Sequelize.BIGINT,
        postId: Sequelize.BIGINT,
        comment: Sequelize.STRING
      })
  
    return Comment
  };