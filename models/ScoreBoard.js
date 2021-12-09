const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('scoreboards', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  gameId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'games',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

