import { DataTypes, sequelize } from '../utils/dbHelper.js';


const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  remindAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  deadline:{
    type: DataTypes.DATE,
    allowNull: true
  }

}, {
    tableName: 'todos',
    createdAt: false,
    updatedAt: false,
});

export default Todo;