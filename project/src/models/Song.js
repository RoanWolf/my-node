import { DataTypes, sequelize } from "../utils/dbHelper.js";

const Song = sequelize.define(
  "Song",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "songs",
    createdAt: false,
    updatedAt: false,
  }
);

export default Song;
