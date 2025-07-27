export default (sequelize, DataTypes) => {
  return sequelize.define("Student", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    tableName: 'student', // Explicitly set table name
      timestamps: false, // Disable default timestamp columns if not needed
      freezeTableName: true // Prevent table name pluralization
  });
};
