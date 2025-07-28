import { DataTypes, sequelize } from '../utils/dbHelper.js';


const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
    tableName: 'students',
    createdAt: false,
    updatedAt: false,
});

export default Student;