const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create the Post model

class Post extends Model {}

// create the columns for the Post model

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequilize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;