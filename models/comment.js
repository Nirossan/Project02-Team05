module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [5, 30]
      }
    }
  });

  //Adds `GoalId` column to `Comments` table
  Comment.associate = function(models) {
    Comment.belongsTo(models.Goal);
  };

  return Comment;
};
