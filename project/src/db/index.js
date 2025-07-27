// db/index.js
import { Sequelize, DataTypes } from "sequelize";
import StudentModel from "../models/Student.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: console.log,
  }
);

const Student = StudentModel(sequelize, DataTypes);

// Initialize database connection
const initDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

export { sequelize, Student, initDB };
